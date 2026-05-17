const fs = require('fs');
const path = require('path');

const replacements = {
  '#00E5FF': '#FFFFFF',
  '#4A7A94': '#999999',
  '#00FF88': '#FFFFFF',
  '#E8F4F8': '#FFFFFF',
  '#7B2FFF': '#E0E0E0',
  '#060D18': '#212224',
  '#0a1628': '#2C2D30',
  'rgba(6, 20, 40': 'rgba(44, 45, 48',
  'rgba(0,229,255': 'rgba(255,255,255',
  'rgba(0, 229, 255': 'rgba(255, 255, 255',
  "'Orbitron', monospace": "'Inter', 'Helvetica Neue', sans-serif",
  "'Rajdhani', sans-serif": "'Inter', 'Helvetica Neue', sans-serif"
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  for (const [key, value] of Object.entries(replacements)) {
    // Escape for regex and replace globally
    const regex = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    newContent = newContent.replace(regex, value);
  }
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
