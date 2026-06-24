import { Project, Internship, Certification, Education, SkillGroup } from "./types";

export const PERSONAL_DETAILS = {
  name: "Arun Praveen SJ",
  title: "Full Stack Developer & AI/ML Enthusiast",
  roles: [
    "Full Stack Developer",
    "Computer Science Student",
    "Data Analyst",
    "AI/ML Enthusiast",
    "Oracle Fusion HCM Learner"
  ],
  location: "Coimbatore, Tamil Nadu",
  email: "arunpraveen90@gmail.com",
  phone: "+91 91593 34006",
  phoneRaw: "9159334006",
  linkedin: "https://www.linkedin.com/in/arun-praveen-sj/",
  linkedinLabel: "linkedin.com/in/arun-praveen-sj",
  github: "https://github.com/arnprvn",
  githubUsername: "arnprvn",
  bio: "Results-driven Computer Science and Engineering student with hands-on experience in Full Stack Development, Artificial Intelligence, Data Analytics, and Oracle Fusion HCM. Skilled in Java, Python, JavaScript, MERN Stack, Flutter, Firebase, MongoDB, and Data Analytics. Strong problem-solving abilities with experience gained through internships and real-world projects."
};

export const EDUCATION: Education = {
  institution: "SNS College of Technology, Coimbatore",
  degree: "Bachelor of Engineering (B.E.) – Computer Science and Engineering",
  gpa: "7.48 / 10 CGPA",
  period: "2023 – 2027",
  location: "Coimbatore, Tamil Nadu"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 90 },
      { name: "C / C++", level: 75 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 82 }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 88 }
    ]
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Data Analytics", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "Scikit-Learn", level: 80 }
    ]
  },
  {
    category: "Cloud, Tools & Oracle",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Oracle Fusion HCM", level: 70 },
      { name: "Oracle Cloud (OCI)", level: 75 },
      { name: "Figma", level: 78 },
      { name: "Flutter", level: 78 }
    ]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "internship-1",
    company: "InternPe",
    role: "AI/ML Intern",
    period: "June 2024 – July 2024",
    responsibilities: [
      "Worked extensively on end-to-end Machine Learning lifecycles including data preprocessing and dataset cleaning.",
      "Conducted thorough feature engineering to extract predictive variables and maximize classification accuracy.",
      "Trained and compared multiple Machine Learning models including Logistic Regression, Decision Trees, Random Forests, KNN, SVM, and Neural Approximations.",
      "Created intuitive data visualizations to present insights and performed comprehensive model evaluations using precision-recall and ROC curves."
    ],
    skills: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Data Visualization"]
  },
  {
    id: "internship-2",
    company: "Brainery Spot Technology",
    role: "MERN Stack Development Intern",
    period: "March 2024 – May 2024",
    responsibilities: [
      "Developed high-fidelity frontend user interfaces using React.js, optimizing component reusability and render cycles.",
      "Integrated secure REST APIs, handling asynchronous queries, error catches, and local state synchronizations.",
      "Designed and implemented modular, interactive UI components featuring clean animations and strict layout responsiveness.",
      "Led rigorous debugging, profiling, and unit testing sessions to improve client-side responsiveness and stability."
    ],
    skills: ["React.js", "JavaScript", "API Integration", "Tailwind CSS", "UI/UX Design"]
  },
  {
    id: "internship-3",
    company: "Reach Cloud Technology",
    role: "MERN Stack Development Intern",
    period: "December 2023 – February 2024",
    responsibilities: [
      "Assisted in full-stack architecture development utilizing MongoDB, Express.js, React.js, and Node.js.",
      "Built server-side Node.js logic and API routing controllers, connecting data flow schemas seamlessly with MongoDB.",
      "Engineered flexible database schemas and aggregate pipelines to serve dynamic content efficiently.",
      "Participated in comprehensive cloud deployment procedures and cross-platform testing of web modules."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "API Development"]
  },
  {
    id: "internship-4",
    company: "Byte XL",
    role: "Data Science & Python Programming Intern",
    period: "September 2023 – November 2023",
    responsibilities: [
      "Utilized Python programming to parse, clean, and deduplicate complex real-world data sources.",
      "Built custom exploratory data analysis (EDA) scripts to identify anomalous trendlines and statistical correlations.",
      "Developed several mini-AI and programmatic scripts to automate analytical pipelines and model evaluation workflows.",
      "Created customized analytics reports and business intelligence summaries to highlight core indicators."
    ],
    skills: ["Python", "Data Science", "Data Cleaning", "Data Analytics", "Pandas"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Oracle Fusion AI Agent Studio and Generative AI",
    issuer: "Oracle"
  },
  {
    id: "cert-2",
    title: "Google Cloud Introduction to Generative AI Studio",
    issuer: "Google Cloud"
  },
  {
    id: "cert-3",
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Deloitte / Forage"
  },
  {
    id: "cert-4",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / Forage"
  },
  {
    id: "cert-5",
    title: "HP LIFE Social Media Marketing",
    issuer: "HP LIFE"
  },
  {
    id: "cert-6",
    title: "Forage Data Labeling Job Simulation",
    issuer: "Forage"
  },
  {
    id: "cert-7",
    title: "Cisco Data Analytics",
    issuer: "Cisco"
  },
  {
    id: "cert-8",
    title: "Data Science and Analytics Certification",
    issuer: "SNS / Partner Institute"
  },
  {
    id: "cert-9",
    title: "AI for Beginners and Business Professionals",
    issuer: "Cognitive Class / IBM"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Smart Agriculture Support System",
    description: "An AI-powered web dashboard that assists farmers in making data-driven decisions by providing real-time recommendations, soil diagnostics, and localized forecasts.",
    category: "ai-ml",
    tech: ["React.js", "Node.js", "Firebase", "MySQL", "AI/ML Modeler"],
    features: [
      "Crop Recommendation Engine powered by trained Machine Learning classifiers",
      "Dynamic Soil Analysis reporting tool tracking NPK components",
      "Real-time localized Weather Monitoring API integration",
      "Comprehensive Farmer Dashboard with simple multi-language support"
    ],
    githubUrl: "https://github.com/arnprvn/smart-agriculture-support"
  },
  {
    id: "proj-2",
    title: "Interview AI Coach",
    description: "An interactive, intelligent simulation platform that provides live mock interviews, real-time feedback, and ATS-friendly resume scoring to help candidates prepare for interviews.",
    category: "ai-ml",
    tech: ["React.js", "Node.js", "Firebase", "Gemini API", "Web Speech API"],
    features: [
      "AI-driven Mock Interviews with dynamic audio and visual questions",
      "Instant feedback reports breaking down vocabulary, technical depth, and delivery",
      "ATS Resume Analysis with detailed parsing and formatting recommendations",
      "Historical Performance Tracking graph highlighting score progressions"
    ],
    githubUrl: "https://github.com/arnprvn/interview-ai-coach"
  },
  {
    id: "proj-3",
    title: "Stay & Savour (Living Spoon)",
    description: "A hybrid mobile application built for students and travelers, blending homestay bookings with an online local, home-cooked food marketplace.",
    category: "mobile",
    tech: ["Flutter", "Oracle HCM", "Firebase Auth", "Cloud Firestore", "Google Maps API"],
    features: [
      "Interactive Homestay Booking module with real-time room availability status",
      "Home-cooked Food Marketplace allowing local chefs to register and sell dishes",
      "Student-friendly Accommodation Search filters based on proximity and price",
      "In-app chatting and peer-to-peer secure transaction systems"
    ],
    githubUrl: "https://github.com/arnprvn/stay-savour"
  },
  {
    id: "proj-4",
    title: "Teacher Location Finder IoT",
    description: "A smart IoT and mobile solution designed to track, locate, and coordinate faculty attendance and locations across academic campuses in real-time.",
    category: "iot",
    tech: ["ESP32", "RFID RC522", "Flutter", "Firebase RTDB", "C++"],
    features: [
      "Hardware integrated RFID check-in terminals broadcasting to cloud databases",
      "Real-time faculty tracking showing active coordinates or classrooms",
      "Automated attendance logs exportable into CSV/Excel files",
      "Instant faculty notification panel for urgent class adjustments"
    ],
    githubUrl: "https://github.com/arnprvn/teacher-locator-iot"
  },
  {
    id: "proj-5",
    title: "Plant Disease Detection System",
    description: "A deep learning visual diagnostics tool capable of instantly identifying diseases on crop leaves from user-uploaded images.",
    category: "ai-ml",
    tech: ["Python", "TensorFlow Lite", "CNN (ResNet)", "Flask API", "React.js"],
    features: [
      "Highly accurate leaf image analysis with localized defect highlighting",
      "Lightweight CNN model deployed on server-side and optimized via TF Lite",
      "Actionable treatment guides and botanical descriptions of detected anomalies",
      "Offline prediction capabilities on mobile-responsive interfaces"
    ],
    githubUrl: "https://github.com/arnprvn/plant-disease-detector"
  },
  {
    id: "proj-6",
    title: "Missing Person Detection System",
    description: "An AI surveillance security project matching image inputs against database records in real-time using modern facial recognition libraries.",
    category: "ai-ml",
    tech: ["Python", "OpenCV", "TensorFlow", "FaceNet", "MySQL"],
    features: [
      "Facial alignment and high-dimensional face embed comparison logic",
      "Real-time surveillance camera stream parsing with bounding box render feeds",
      "Automated alerts triggering immediately upon database face matches",
      "Database manager for storing multiple reference photographs of missing people"
    ],
    githubUrl: "https://github.com/arnprvn/missing-person-detector"
  },
  {
    id: "proj-7",
    title: "Healthcare Chatbot",
    description: "An NLP-powered symptom evaluator and virtual healthcare assistant designed to guide patients towards appropriate specialist actions.",
    category: "ai-ml",
    tech: ["Python", "Flask", "NLTK", "PyTorch", "React.js"],
    features: [
      "Intelligent symptom triage engine utilizing tailored text classification",
      "Conversational medical terminology parsers and synonym maps",
      "Specialist classification matching patient concerns with local clinical departments",
      "Precautionary first-aid advice modules based on verified medical resources"
    ],
    githubUrl: "https://github.com/arnprvn/healthcare-chatbot"
  },
  {
    id: "proj-8",
    title: "Data Analytics Dashboard",
    description: "An enterprise business intelligence dashboard monitoring sales pipelines, operational margins, and performance metrics.",
    category: "web",
    tech: ["Power BI", "Python", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Interactive multi-page Power BI reports displaying business growth vectors",
      "Advanced ETL preprocessing scripts built with Python and Pandas",
      "Predictive trendline modeling for quarterly sales pipelines",
      "Cross-filtering matrices showcasing regional and product performance"
    ],
    githubUrl: "https://github.com/arnprvn/business-analytics-dashboard"
  },
  {
    id: "proj-9",
    title: "RailJet Smart Railway System",
    description: "A full-stack modern reservation system supporting lightning-fast booking, automated seat configurations, and secure digital ticketings.",
    category: "web",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Seat Allocation algorithm preventing carriage crowding",
      "E-Ticket Generation with customized dynamic QR codes",
      "Real-time train tracking dashboard and itinerary planners",
      "Fully responsive administrative portals and user transaction history logs"
    ],
    githubUrl: "https://github.com/arnprvn/railjet-railway-reservation"
  },
  {
    id: "proj-10",
    title: "ResearchFlow Collaboration Platform",
    description: "A team project management and paper co-authoring space tailored specifically for academic researchers and university labs.",
    category: "web",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    features: [
      "Dynamic file attachment managers and task assignment kanbans",
      "Collaborative project logs documenting timeline events",
      "Markdown document co-editor with automatic saving cycles",
      "Direct citation builder and resource library organizers"
    ],
    githubUrl: "https://github.com/arnprvn/researchflow"
  }
];

export const STATS = [
  { value: "10+", label: "Advanced Projects", description: "Across AI/ML, MERN, IoT, and Flutter" },
  { value: "4", label: "Industry Internships", description: "Gained hands-on technical corporate skills" },
  { value: "9+", label: "Professional Certifications", description: "Oracle, AWS, Cisco, and Google Cloud" },
  { value: "7.48", label: "Academic CGPA", description: "Computer Science & Engineering B.E." }
];
