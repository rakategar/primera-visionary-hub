export const SITE = {
  name: "Primera Karya Sinergia",
  short: "Primera",
  tagline: "Empowering People. Elevating Performance.",
  positioning: "Business Management & People Development Consulting Firm",
  email: "info@prmrsinergia.com",
  phoneOki: "+62 818 651 975",
  whatsapp: "62818651975",
  address:
    "INFINITI OFFICE, BELLEZZA BSA 1st Floor Unit 106, Jl. Letjen Soepeno RT.004 RW.002, Grogol Utara, Kebayoran Lama, Jakarta Selatan, DKI Jakarta",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bellezza+BSA+Office+Jl+Letjen+Soepeno+Jakarta+Selatan",
  crmDemoUrl: "https://demo-crm-btn-final.vercel.app/",
  founded: 2021,
};

export const CONTACTS = [
  { name: "Oki T. Wikan", role: "Director", phone: "081381088910", email: "oki.wikan@prmrsinergia.com" },
  { name: "Arike Agung", role: "Senior Advisor", phone: "08118675004", email: "arike.agung@prmrsinergia.com" },
  { name: "Erica", role: "Client Relations", phone: "08111398880", email: "erica.naibaho@gmail.com" },
];

export const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "What We Do", to: "/services" as const },
  { label: "Products", to: "/products" as const },
  { label: "Clients & Stories", to: "/clients" as const },
  { label: "Insights", to: "/insights" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export const VALUES = [
  { letter: "P", title: "Potential Unlocking", body: "Everyone has great potential ready to grow and create extraordinary impact." },
  { letter: "R", title: "Result with Integrity", body: "Results matter, but integrity in every process defines who we are." },
  { letter: "I", title: "Impactful Learning", body: "Learning experiences that go beyond the classroom — inspiring mindset and behavioral change." },
  { letter: "M", title: "Meaningful Collaboration", body: "We thrive on authentic teamwork, mutual support, and shared inspiration." },
  { letter: "E", title: "Excellence in Execution", body: "We build capabilities that drive personal, organizational, and social growth." },
  { letter: "R", title: "Relevant Innovation", body: "We continuously innovate with contextual, industry-relevant approaches." },
  { letter: "A", title: "Adaptive Mindset", body: "We foster agility and continuous learning in the face of change." },
];

export const SERVICES = [
  { slug: "leadership", title: "Leadership & Managerial Development", body: "Inspiring leaders who drive people, performance, and purpose." },
  { slug: "soft-skills", title: "Soft Skills & Behavioral Excellence", body: "Empowering individuals to communicate, collaborate, and perform at their best." },
  { slug: "sales", title: "Technical & Sales Capability", body: "Elevating sales professionals to become trusted advisors." },
  { slug: "talent", title: "Talent Assessment & Recruitment", body: "Selecting, mapping, and growing the right talents for lasting impact." },
  { slug: "facilitator", title: "Facilitator & Digital Learning Enablement", body: "Empowering facilitators and trainers to deliver learning with impact and innovation." },
  { slug: "consulting", title: "Business Consulting & Performance Advisory", body: "Strategy, operating models, and distribution effectiveness for Indonesian markets." },
];

export const PROBLEMS = [
  { p: "Leaders are promoted but not fully prepared to lead.", s: "Leadership and managerial programs that build clarity, accountability, coaching ability, and adaptive decision-making." },
  { p: "Sales teams work hard, but performance is inconsistent.", s: "Sales capability and performance programs that strengthen consultative selling, pipeline discipline, advisory skill, and measurable productivity." },
  { p: "Training happens, but behavior change is not measured.", s: "Learning-to-performance design with structured evaluation, follow-up, and business impact tracking." },
  { p: "Talent decisions rely too much on intuition.", s: "Assessment, recruitment, competency mapping, and analytics-based talent development." },
  { p: "Facilitators need modern digital learning capability.", s: "Facilitator enablement using experiential learning, AI tools, digital collaboration, and data-driven evaluation." },
  { p: "Organizations need learning that fits culture and business reality.", s: "Customizable, relevant, and adaptive programs aligned with organizational context and current business needs." },
];

export const IMPACT_STEPS = [
  { n: "01", t: "Assess", d: "Diagnose business challenges, role profiles, and people performance gaps." },
  { n: "02", t: "Design", d: "Build contextual learning journeys aligned with culture and business goals." },
  { n: "03", t: "Train", d: "Facilitate practical, experiential, and action-oriented programs." },
  { n: "04", t: "Accredit", d: "Understanding and accreditation programs to certify capability." },
  { n: "05", t: "Reinforce", d: "Follow-up programs, coaching cadence, and behavior tracking." },
  { n: "06", t: "Measure", d: "Evaluation Level 1–4 — reaction, learning, behavior, and business impact." },
];

export const PROGRAM_CATEGORIES = [
  {
    slug: "leadership",
    title: "Leadership & Managerial Series",
    tagline: "Inspiring leaders who drive people, performance, and purpose.",
    items: [
      "Lead with Impact",
      "First-Time Manager Mastery",
      "Coaching for Peak Performance",
      "Strategic Business Leadership",
      "Leading High-Performance Teams",
      "Sales Leadership Excellence",
      "Managing Performance with Integrity",
      "Change Leadership & Organizational Alignment",
      "Managerial Communication & Decision Agility",
      "Leadership in Times of Change",
      "Digital Leadership in the AI Era",
    ],
  },
  {
    slug: "soft-skill",
    title: "Soft Skills & Behavioral Excellence Series",
    tagline: "Empowering individuals to communicate, collaborate, and perform at their best.",
    items: [
      "Communicate to Influence",
      "Critical Thinking & Creative Problem Solving",
      "Emotional Intelligence at Work",
      "Negotiation & Influence Mastery",
      "Service Excellence Mindset",
      "Personal Productivity & Time Mastery",
      "Collaboration in Cross-Functional Teams",
      "Presentation & Storytelling Excellence",
      "Resilience & Adaptive Mindset",
      "AI-Powered Productivity & Communication",
      "Digital Collaboration with Google Workspace",
    ],
  },
  {
    slug: "technical-sales",
    title: "Technical & Sales Capability Series",
    tagline: "Elevating sales professionals to become trusted advisors.",
    items: [
      "Consultative Selling Excellence",
      "Financial Planning Mastery",
      "Wealth Advisory & Investment Planning",
      "Bancassurance Sales Excellence",
      "Sharia Insurance Advisory",
      "Digital Sales Mastery",
      "Sales Activity Management",
      "Negotiation for Closing",
      "Customer Portfolio Management",
      "AI for Financial Advisors",
    ],
  },
  {
    slug: "talent-assessment",
    title: "Talent Assessment & Recruitment Excellence Series",
    tagline: "Hiring smart and developing the right people for the right roles.",
    items: [
      "Assessment & Recruitment Excellence",
      "Behavioral Interviewing Masterclass",
      "Competency Mapping & Role Profiling",
      "Talent Analytics for Smart Hiring",
      "Assessment Center Design",
      "Onboarding Excellence",
      "Succession Planning Fundamentals",
      "Performance Appraisal Mastery",
      "Workforce Planning Essentials",
      "Digital Recruitment & Interviewing with AI",
    ],
  },
  {
    slug: "facilitator",
    title: "Facilitator & Digital Learning Enablement Series",
    tagline: "Enabling facilitators and L&D teams to deliver modern learning experiences.",
    items: [
      "Train the Trainer 5.0",
      "Designing Experiential Learning Programs",
      "AI-Powered Learning Facilitation",
      "Learning Experience Design",
      "Microlearning & Digital Content Design",
      "Coaching Skills for Facilitators",
      "Virtual Classroom Mastery",
      "Storytelling for Learning",
      "Learning Analytics & Reporting",
      "Data-Driven Learning Evaluation (Level 1–4)",
    ],
  },
];

export const INDUSTRIES = [
  { title: "Banking & Financial Services", body: "Wealth, bancassurance, sales execution and leadership for retail and corporate banking." },
  { title: "Insurance & Sharia Insurance", body: "Conventional and sharia advisory, agency development, and product training." },
  { title: "Telecommunications", body: "Frontline capability, leadership, and digital sales transformation." },
  { title: "State-Owned Enterprises", body: "Leadership pipeline, change leadership, and performance culture programs." },
  { title: "Manufacturing & FMCG", body: "Sales force effectiveness, distribution strategy, and supervisor capability." },
  { title: "Professional & Education", body: "Capability building for professional bodies and educational institutions." },
];

export const FAQ = [
  { q: "What does Primera Karya Sinergia do?", a: "We are a business management and people development consulting firm helping organizations grow through their people — across recruitment, training, leadership, sales capability, talent assessment, facilitator development, and digital learning enablement." },
  { q: "Can programs be customized for our organization?", a: "Yes. Every program is tailored to your business context, role profiles, and learning objectives — from short workshops to multi-month learning journeys." },
  { q: "Do you provide leadership and sales capability programs?", a: "Yes. Our Leadership & Managerial Series and Technical & Sales Capability Series are core practice areas, with deep BFSI and wealth advisory experience." },
  { q: "Can training impact be measured?", a: "Yes. We design Level 1–4 evaluation (Kirkpatrick) into every engagement — from reaction and learning to behavior change and business results." },
  { q: "Does Primera provide digital learning and AI enablement?", a: "Yes. We design AI-supported learning, facilitator enablement, and modern digital learning ecosystems integrated into the learning journey." },
  { q: "What is CRM ACT?", a: "CRM ACT is Primera's AI-powered mobile banking sales execution CRM — built to control sales execution from daily field activity to executive dashboard, using the ACT methodology: Action Daily, Control Activity, Track Progress." },
  { q: "Is CRM ACT the same as a generic CRM?", a: "No. CRM ACT is a banking-specific sales execution system focused on activity discipline, pipeline movement, follow-up consistency, and governed AI insight — not a generic contact database." },
  { q: "How do we start a consultation?", a: "Use the contact form to request a discovery session. We typically respond within two business hours." },
];

export const INSIGHTS = [
  { slug: "leadership-challenges", category: "Leadership", title: "Five leadership challenges in Indonesian organizations", excerpt: "Why mid-level leadership is the real bottleneck — and what to do about it.", read: "6 min read" },
  { slug: "sales-discipline", category: "Sales Performance", title: "Building sales discipline through activity management", excerpt: "Activity is the only leading indicator a frontline leader can truly control.", read: "5 min read" },
  { slug: "ai-productivity", category: "AI Productivity", title: "AI-powered productivity for modern teams", excerpt: "Practical patterns for using AI to compress the time between intent and action.", read: "7 min read" },
  { slug: "training-impact", category: "Learning Evaluation", title: "Measuring training impact beyond classroom satisfaction", excerpt: "How Level 1–4 evaluation reframes training as a performance instrument.", read: "8 min read" },
  { slug: "future-talent", category: "Talent Development", title: "Future-ready talent development for Indonesian enterprises", excerpt: "From competency mapping to AI-supported career paths.", read: "6 min read" },
  { slug: "crm-act-banking", category: "CRM ACT", title: "Why banks need execution visibility — not more dashboards", excerpt: "The case for a sales execution operating system in modern Indonesian banking.", read: "9 min read" },
];

export const LEADERSHIP = [
  { name: "Oki T. Wikan", role: "Director", credentials: "CFP, QWM, CPBC", expertise: "Leadership Coach · Wealth Planner · Sales Productivity Specialist" },
  { name: "Dr. Jisman M. Lubis", role: "Senior Advisor", credentials: "CFP, CRGP, ANZIIF, AAAIK, MM, MBA", expertise: "Finance · Strategy · Insurance & Wealth Management" },
  { name: "Ir. Paula Sembiring", role: "Senior Advisor", credentials: "QRGP, CFP, LPCP, AIIS, AAAIJ, ACS, LUTCF, MM", expertise: "Insurance Governance · Leadership Development" },
  { name: "Kartono", role: "Senior Advisor", credentials: "Banking & Insurance Operations", expertise: "Marketing & Operations Leadership" },
  { name: "Arike Agung Widjaja", role: "Senior Advisor", credentials: "Leadership Coach · Wealth Planner", expertise: "Professional Trainer · Public Speaking · Financial Modules" },
  { name: "Tedi Irawan", role: "Lead Facilitator", credentials: "25 Years L&D · Happiness Enthusiast", expertise: "Train the Trainer · Experiential Learning" },
];

export const CREDENTIALS = ["CFP®", "QWM", "CRGP", "ANZIIF", "AAAIK", "BFSI Expertise", "Wealth Management", "Leadership Coaching", "Kirkpatrick Evaluation", "Digital Learning"];

export const TRUST_STRIP = [
  "End-to-End People Development",
  "Certified Facilitators & Advisors",
  "BFSI, Insurance & Sales Performance",
  "Measurable Impact (Evaluation Level 1–4)",
  "AI-Supported Learning & Digital Enablement",
];

export const INDUSTRY_CLIENTS = [
  { group: "Banking & Financial Services", names: ["Bank BTN", "Bank Mandiri", "BRI", "BNI", "BCA", "CIMB Niaga"] },
  { group: "Insurance", names: ["AIA", "Allianz", "Manulife", "Prudential", "Sun Life", "BNI Life"] },
  { group: "Government / SOE", names: ["Pertamina", "Telkom", "Pelindo", "Angkasa Pura", "PLN", "Jasa Raharja"] },
  { group: "Telecommunications", names: ["Telkomsel", "XL Axiata", "Indosat", "Smartfren"] },
  { group: "Corporate / FMCG", names: ["Unilever", "Indofood", "Sinarmas", "Astra", "Wings Group"] },
  { group: "Education / Professional", names: ["IBI Kesatuan", "FPSB Indonesia", "AAJI", "AAUI"] },
];
