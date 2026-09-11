/* ================================================
   PORTFOLIO CONFIGURATION
   ================================================
   Edit this file to customize your portfolio.
   All content (name, links, skills, etc.) is here.
   ================================================ */

const PORTFOLIO_CONFIG = {

  /* ---------- PERSONAL INFO ---------- */
  personal: {
    name: "Muhammad Ahmad",
    title: "Junior Data Scientist | ML Engineer",
    tagline: "I thrive at the intersection of mathematical theory and clean, executable code. Specializing in building end-to-end intelligent systems — from data preprocessing and model training with PyTorch to deploying high-performance inference engines.",
    greeting: "As-salamu alaykum, I'm",
    image: "assits/person.png"
  },

  /* ---------- SOCIAL LINKS ---------- */
  social: {
    github: "https://github.com/ahmaddotml",
    linkedin: "https://www.linkedin.com/in/ahmaddotml",
    twitter: "https://x.com/ahmaddotml"
  },

  /* ---------- ABOUT SECTION ---------- */
  about: {
    heading: "Python Developer specializing in Machine Learning & Deep Learning",
    paragraphs: [
      "I am a Python Developer specializing in Machine Learning and Deep Learning. My expertise lies in building end-to-end intelligent systems, from data preprocessing and model training with PyTorch to deploying high-performance inference engines.",
      "I focus on practical AI applications, specifically in Computer Vision (Image Recognition & Pose Estimation) and Audio Analysis. By leveraging the Python ecosystem, I transform complex datasets into functional models that solve real-world problems.",
      "I thrive at the intersection of mathematical theory and clean, executable code. Let's connect if you're looking for someone to bridge the gap between Data Science and Production."
    ],
    stats: [
      { value: "Google Gemini API", label: "Top Skill" },
      { value: "Cerebras API", label: "Top Skill" },
      { value: "Speech Recognition", label: "Top Skill" }
    ]
  },

  /* ---------- SKILLS ---------- */
  skills: [
    { name: "Python", icon: "fa-brands fa-python", category: "Language", progress: 95 },
    { name: "PyTorch", icon: "fas fa-fire", category: "ML / AI", progress: 88 },
    { name: "Scikit-Learn", icon: "fas fa-robot", category: "ML / AI", progress: 90 },
    { name: "NumPy", icon: "fas fa-calculator", category: "Library", progress: 92 },
    { name: "Pandas", icon: "fas fa-table", category: "Library", progress: 93 },
    { name: "Computer Vision", icon: "fas fa-eye", category: "ML / AI", progress: 85 },
    { name: "Audio Classification", icon: "fas fa-volume-up", category: "ML / AI", progress: 82 },
    { name: "Speech Recognition", icon: "fas fa-microphone", category: "ML / AI", progress: 80 },
    { name: "Google Gemini API", icon: "fas fa-gem", category: "AI API", progress: 88 },
    { name: "Cerebras API", icon: "fas fa-microchip", category: "AI API", progress: 85 },
    { name: "Deep Learning", icon: "fas fa-network-wired", category: "ML / AI", progress: 84 },
    { name: "Predictive Modeling", icon: "fas fa-chart-line", category: "Analytics", progress: 86 },
    { name: "FastAPI", icon: "fas fa-bolt", category: "Backend", progress: 80 },
    { name: "Flask", icon: "fas fa-flask", category: "Backend", progress: 82 },
    { name: "Docker", icon: "fa-brands fa-docker", category: "DevOps", progress: 78 },
    { name: "SQL", icon: "fas fa-database", category: "Data", progress: 85 },
    { name: "Data Science & Analytics", icon: "fas fa-chart-bar", category: "Certification", progress: 90 },
    { name: "Statistics", icon: "fas fa-chart-pie", category: "Math", progress: 85 },
    { name: "Git", icon: "fa-brands fa-git-alt", category: "DevOps", progress: 85 },
    { name: "Data Visualization", icon: "fas fa-chart-area", category: "Analytics", progress: 83 }
  ],

  /* ---------- CONTACT INFO ---------- */
  contact: {
    email: "youremail@xxxx.com",
    phone: "+92 XXX XXXXXXX",
    location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    heading: "Let's connect",
    description: "Have a project, question, or just want to chat about AI and data? Reach out through any of these channels."
  },

  /* ---------- FORM SUBMISSION ---------- */
  /* 
   * To make the contact form work:
   * 
   * OPTION 1 — Formspree (recommended, free):
   *   1. Sign up at https://formspree.io
   *   2. Create a new form and get your endpoint URL
   *   3. Paste it below
   *   Example: "https://formspree.io/f/yourFormId"
   * 
   * OPTION 2 — Web3Forms (free):
   *   1. Sign up at https://web3forms.com
   *   2. Get your access key
   *   3. Use: "https://api.web3forms.com/submit"
   *   And add a hidden input with name="access_key" and your key
   * 
   * OPTION 3 — EmailJS:
   *   1. Sign up at https://emailjs.com
   *   2. Follow their integration guide
   * 
   * Leave endpoint as empty string to disable (form will just show success message).
   */
  form: {
    endpoint: "",  // Paste your form endpoint here
    successMessage: "Message sent successfully — I'll get back to you soon."
  },

  /* ---------- FOOTER ---------- */
  footer: {
    copyright: "2026 Muhammad Ahmad. <a href='https://www.linkedin.com/in/ahmaddotml' target='_blank' aria-label='LinkedIn'><i class='fas fa-heart'></i></a>"
  }

};
