// ============================================================
// portfolioData.js — Centralized configuration for Vaishnavi's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Vaishnavi Gupta",
  firstName: "Vaishnavi",
  brandName: "Vaishnavi Gupta",
  title: "B.Voc (AI & Robotics) Student",
  location: "Agra, India",
  phone: "8077282154",
  emails: {
    primary: "vaishnavigupta82200628@gmail.com",
    secondary: "vaishnavigupta82200628@gmail.com",
  },
  summary:
    "I am a motivated and detail-oriented aspiring engineer with strong skills in Python programming, data science, microcontrollers, and sensor interfacing. I have hands-on experience developing automation systems and simulation-based technical projects, demonstrating strong problem-solving and analytical abilities. With a keen interest in artificial intelligence, robotics, and data-driven technologies, I am eager to apply my technical expertise to innovative, real-world engineering challenges.",
  resumeUrl: "/assets/vaishnavi_resume-1.pdf",
};

export const socialLinks = {
  github: "https://github.com/vaishnavigupta82200628-lang",
  linkedin: "https://www.linkedin.com/in/vaishnavi-gupta-79839b328",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Vaishnavi Gupta",
  titleHighlight: "B.Voc (AI & Robotics) Student",
  subtitle:
    "Building intelligent digital experiences with AI, code, and creativity.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vaishnavigupta82200628@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Vaishnavi,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/assets/vaishnavi_resume-1.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vaishnavi Gupta</span>, an aspiring engineer based in Agra, India, passionate about artificial intelligence, robotics, and data-driven technologies.`,
  techStack: ["Python", "AI/ML", "Robotics"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world solutions",
  description:
    "I follow a structured, analytical, and hands-on approach to build intelligent, real-world engineering solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, gathering data, and studying constraints to build a solid technical foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing clean system architecture and user flows, whether it's a web platform or a hardware-integrated system.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building functional applications and automation systems using Python, ML models, and sensor/microcontroller integration.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing, refining, and deploying the solution, followed by continuous learning and improvement.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 85 },
        { name: "HTML5", level: 80 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "OpenCV", level: 75 },
        { name: "Automated Machine Learning", level: 70 },
        { name: "Tkinter", level: 70 },
      ],
    },
    {
      title: "Hardware & Robotics",
      skills: [
        { name: "Arduino", level: 80 },
        { name: "Sensors & IoT Automation", level: 78 },
        { name: "System Simulation", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "Linux Commands", level: 70 },
        { name: "TinkerCad", level: 75 },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Smart India Hackathon — 2024 & 2025",
    description:
      "Had project ideas shortlisted in the Smart India Hackathon in both 2024 and 2025, showcasing strong problem-solving and innovation skills.",
    role: "Participant",
    badge: "Achievement",
  },
];

export const internshipsList = [];

export const softSkillsList = [
  { name: "Analytical Thinking", icon: "🧠", desc: "Breaking down complex technical problems into structured, solvable steps." },
  { name: "Problem Solving", icon: "🧩", desc: "Applying logical and creative approaches to real-world engineering challenges." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to learn new tools and technologies across AI, robotics, and web development." },
  { name: "Communication", icon: "💬", desc: "Clear and structured communication in technical and collaborative settings." },
];

export const projects = [
  {
    id: "resqnet",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "ResQNet",
    description:
      "An AI-powered disaster management platform for emergency preparedness, community reporting, and resource coordination. Predicts disasters using real-time weather data, enables real-time emergency reporting and safe evacuation guidance, and includes a donation module to support NGOs and affected communities. Multilingual interface with a user-friendly design.",
    techTags: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Bootstrap", "SQLite", "Maps API", "Machine Learning"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "smart-hospital",
    number: "02",
    badge: null,
    title: "Smart Hospital Management System",
    description:
      "A digital healthcare platform that streamlines hospital operations, patient care, and appointment management. Includes patient registration and medical records, doctor appointment scheduling, department and staff management, and a secure administration dashboard.",
    techTags: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "SQLite", "Bootstrap"],
    links: {
      github: "https://github.com/vaishnavigupta82200628-lang/patient-tracker",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "careerscope",
    number: "03",
    badge: null,
    title: "CareerScope",
    description:
      "An AI career guidance platform helping students discover the right career path through personalized recommendations, skill assessment, learning resource suggestions, and a roadmap based on user interests and skills.",
    techTags: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "SQLite", "Machine Learning"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "EDGE AI Workshop",
      issuer: "AiProff × Dayalbagh Educational Institute",
      icon: "🤖",
      image: "/assets/certificates/edge-ai-workshop.jpeg",
    },
    {
      name: "Skill Development Workshop",
      issuer: "Skill Orbit India",
      icon: "🛠️",
      image: "/assets/certificates/skill-development-workshop.jpeg",
    },
    {
      name: "AI Fundamentals Training",
      issuer: "Head Held High Foundation × Anudip Foundation",
      icon: "🎓",
      image: "/assets/certificates/ai-fundamentals-training.jpeg",
    },
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Voc – Artificial Intelligence & Robotics",
  institution: "Dayalbagh Educational Institute",
  cgpa: "",
  graduation: "2027",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "AI & Robotics",
    "Python · Machine Learning · IoT",
    "Building Intelligent Solutions",
  ],
  credential: "B.Voc (AI & Robotics) · 2024–2027",
  copyright: `© ${new Date().getFullYear()} Vaishnavi Gupta | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};