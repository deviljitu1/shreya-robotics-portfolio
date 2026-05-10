// portfolioData.js — All structured content for Shreya Ade's portfolio

export const personalInfo = {
  name: "Shreya Ade",
  role: "Robotics & Automation Engineer",
  email: "shreyaade2003@gmail.com",
  phone: "+91 7020690901",
  eyebrow: "// PORTFOLIO 2025",
  bio: "Engineering intelligent systems from concept to prototype.",
  typewriterRoles: [
    "Robotics Engineer",
    "Automation Designer",
    "Hackathon Winner 🏆",
    "CAD Specialist",
    "IoT Builder",
  ],
};

export const education = [
  {
    degree: "B.E. Robotics & Automation",
    institution: "Anna University (MIT)",
    period: "2022–2026",
    gpa: "8.05",
    status: "Pursuing",
  },
  {
    degree: "12th Grade",
    institution: "People's Junior College",
    period: "2022",
    score: "96.7%",
    status: "Completed",
  },
];

export const stats = [
  { label: "GPA", value: "8.05 ↑", id: "gpa" },
  { label: "Projects", value: "7", id: "projects" },
  { label: "Awards", value: "3 🏆", id: "awards" },
];

export const technicalSkills = [
  { name: "SolidWorks", icon: "🔷", category: "CAD" },
  { name: "CATIA", icon: "🔶", category: "CAD" },
  { name: "Arduino", icon: "⚡", category: "Controllers" },
  { name: "Raspberry Pi", icon: "🫐", category: "Controllers" },
  { name: "ESP32", icon: "📡", category: "Controllers" },
  { name: "Python", icon: "🐍", category: "Code" },
  { name: "Blynk IoT", icon: "📱", category: "Code" },
  { name: "SIH", icon: "🛡️", category: "Other" },
];

export const softSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Teamwork", level: 90 },
  { name: "Leadership", level: 85 },
  { name: "Communication", level: 88 },
  { name: "Time Management", level: 92 },
];

export const languages = [
  { name: "English", proficiency: 8, max: 8, color: "cyan" },
  { name: "Hindi", proficiency: 8, max: 8, color: "cyan" },
  { name: "Marathi", proficiency: 7, max: 8, color: "violet" },
  { name: "Tamil", proficiency: 4, max: 8, color: "amber" },
];

export const projects = [
  {
    id: "01",
    title: "Adaptive Wheelchair",
    subtitle: "TNWISE Hackathon 2025 Winner",
    description:
      "Award-winning adaptive wheelchair designed using SolidWorks. Engineered for maximum user comfort and mobility with innovative ergonomic mechanisms and custom actuation systems.",
    mechanisms: ["SolidWorks", "Ergonomic Design", "Actuation System"],
    tags: ["CAD", "Hackathon", "Medical"],
    featured: true,
    winner: true,
    accentColor: "amber",
    topGradient: "linear-gradient(90deg, #FF9D00, #FF6B35)",
  },
  {
    id: "02",
    title: "Staircase Climbing Robot",
    subtitle: "Multi-mechanism locomotion system",
    description:
      "Designed and built a robot capable of navigating staircases using a hybrid lead screw, rack & pinion, and horizontal motion system. Overcomes vertical obstacles autonomously.",
    mechanisms: ["Lead Screw", "Rack & Pinion", "Horizontal Motion"],
    tags: ["Robotics", "Mechanical", "Locomotion"],
    featured: false,
    winner: false,
    accentColor: "cyan",
    topGradient: "linear-gradient(90deg, #00E5FF, #7B2FFF)",
  },
  {
    id: "03",
    title: "Water Surface Cleaning Bot",
    subtitle: "SIH Internal Hackathon — Shortlisted",
    description:
      "Solar-powered autonomous vessel with conveyor waste collection system. Designed for efficient large-scale water body cleaning with minimal human intervention.",
    mechanisms: ["Solar Power", "Conveyor Belt", "Autonomous Navigation"],
    tags: ["SIH", "Green Tech", "Autonomous"],
    featured: false,
    winner: false,
    accentColor: "green",
    topGradient: "linear-gradient(90deg, #00FF88, #00E5FF)",
  },
  {
    id: "04",
    title: "Cleaning Boat with Burnishing Roller",
    subtitle: "Camera-based detection system",
    description:
      "Autonomous cleaning vessel using camera-based surface detection and a burnishing roller mechanism for thorough surface cleaning of water bodies.",
    mechanisms: ["Camera Detection", "Burnishing Roller", "Boat Platform"],
    tags: ["Computer Vision", "Robotics", "Autonomous"],
    featured: false,
    winner: false,
    accentColor: "violet",
    topGradient: "linear-gradient(90deg, #7B2FFF, #00E5FF)",
  },
  {
    id: "05",
    title: "Blynk IoT Soil Moisture Detection",
    subtitle: "ESP32 based smart agriculture",
    description:
      "Smart soil monitoring system using ESP32 microcontroller and Blynk IoT platform. Real-time moisture readings with automated irrigation alerts.",
    mechanisms: ["ESP32", "Blynk IoT", "Sensor Array"],
    tags: ["IoT", "Agriculture", "ESP32"],
    featured: false,
    winner: false,
    accentColor: "amber",
    topGradient: "linear-gradient(90deg, #FF9D00, #7B2FFF)",
  },
  {
    id: "06",
    title: "Gas Detection & Buzzer Alert",
    subtitle: "Raspberry Pi safety system",
    description:
      "Safety monitoring system built on Raspberry Pi for industrial gas leak detection with real-time buzzer and notification alerts.",
    mechanisms: ["Raspberry Pi", "Gas Sensors", "Alert System"],
    tags: ["Safety", "IoT", "Raspberry Pi"],
    featured: false,
    winner: false,
    accentColor: "cyan",
    topGradient: "linear-gradient(90deg, #00E5FF, #00FF88)",
  },
  {
    id: "07",
    title: "Object Detection System",
    subtitle: "Raspberry Pi vision system",
    description:
      "Computer vision-based object detection system implemented on Raspberry Pi for real-time identification and classification of objects.",
    mechanisms: ["Raspberry Pi", "OpenCV", "Vision Processing"],
    tags: ["CV", "Raspberry Pi", "AI"],
    featured: false,
    winner: false,
    accentColor: "violet",
    topGradient: "linear-gradient(90deg, #7B2FFF, #00FF88)",
  },
];

export const achievements = [
  {
    id: 1,
    year: "2025",
    title: "TNWISE Hackathon Winner",
    subtitle: "TANSCAM — Adaptive Wheelchair Design",
    description:
      "First place winner at the prestigious TNWISE Hackathon 2025 organized by TANSCAM for the innovative Adaptive Wheelchair design using SolidWorks.",
    icon: "🏆",
    type: "winner",
    color: "amber",
  },
  {
    id: 2,
    year: "2024",
    title: "SIH Internal Hackathon",
    subtitle: "Smart India Hackathon — Shortlisted",
    description:
      "Shortlisted for Smart India Hackathon 2024 with the Water Surface Cleaning Bot project — a solar-powered autonomous waste collection vessel.",
    icon: "🎯",
    type: "shortlist",
    color: "cyan",
  },
  {
    id: 3,
    year: "2023",
    title: "NSS Best Volunteer Award",
    subtitle: "National Service Scheme Recognition",
    description:
      "Recognized as the Best Volunteer by the National Service Scheme for exceptional community service and social contributions.",
    icon: "⭐",
    type: "award",
    color: "violet",
  },
];

export const internship = {
  title: "Moving & Kinetic Displays",
  role: "Design Intern",
  tools: ["SolidWorks"],
  description:
    "Designed actuation mechanisms for synchronized motion systems and RC Track/Arena layouts. Developed detailed CAD models for kinetic display systems.",
  highlights: [
    "Actuation mechanism design",
    "Synchronized motion systems",
    "RC Track/Arena design",
    "SolidWorks modeling",
  ],
};
