import type { Project, Experience, Education, Certification, SkillGroup, SkillBar } from '../types';

export const SKILL_BARS: SkillBar[] = [
  { name: 'Python / ML', pct: 82, desc: 'TensorFlow, PyTorch, Scikit-learn, Pandas' },
  { name: 'React / JavaScript', pct: 88, desc: 'React 18, Hooks, REST APIs, TypeScript' },
  { name: 'SQL & Databases', pct: 75, desc: 'MySQL, MongoDB, Firebase, Supabase' },
  { name: 'TensorFlow / PyTorch', pct: 72, desc: 'CNNs, RL agents, Model training pipelines' },
  { name: 'Power BI / Analytics', pct: 70, desc: 'DAX, Data modelling, Dashboard design' },
  { name: 'React Native', pct: 78, desc: 'Expo, cross-platform mobile apps, Firebase sync' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    icon: '{ }',
    tags: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C#'],
  },
  {
    title: 'AI / ML',
    icon: '⚙',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'OpenAI Gym', 'Reinforcement Learning'],
  },
  {
    title: 'Frontend',
    icon: '◻',
    tags: ['React 18', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & Databases',
    icon: '▣',
    tags: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Data & Visualisation',
    icon: '◈',
    tags: ['Power BI', 'Matplotlib', 'Seaborn', 'Excel', 'EDA', 'Statistical Analysis'],
  },
  {
    title: 'Tools & Platforms',
    icon: '◎',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Unity', 'Figma', 'Jupyter'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'esakha',
    num: '01',
    name: 'E-Sakha',
    cat: 'Live Web Application',
    tag: 'web',
    desc: 'Production-grade responsive React website for E-Sakha. Mobile-first design with smooth cross-browser compatibility, clean UI/UX, and measurable improvement in client online presence.',
    detail: 'Led end-to-end frontend development, designed a component library, and deployed via Vercel with CI/CD. Achieved a 40% improvement in page load time vs the previous static site.',
    techs: ['React', 'CSS3', 'Vercel', 'REST APIs'],
    metric: '40%',
    metricLabel: 'Faster load time',
    link: 'https://www.esakha.in',
    featured: true,
  },
  {
    id: 'adaptive-ai',
    num: '02',
    name: 'Adaptive Game AI',
    cat: 'Final Year Project · Unity',
    tag: 'ml',
    desc: 'Adaptive NPC AI using priority matrices for real-time decision-making and vector-based navigation for pathfinding in dynamic game environments.',
    detail: 'Designed a behaviour-tree architecture with dynamic priority scoring. NPCs adapt to 6 player state variables and 4 terrain factors at runtime, achieving natural-feeling gameplay without scripted paths.',
    techs: ['Unity', 'C#', 'Pathfinding', 'Behaviour Trees', 'AI/ML'],
    metric: '6+',
    metricLabel: 'Adaptive variables',
    featured: true,
  },
  {
    id: 'tetris-rl',
    num: '03',
    name: 'Deep RL Tetris Bot',
    cat: 'Reinforcement Learning',
    tag: 'ml',
    desc: 'AI agent trained to play Tetris via deep Q-learning. Reward-engineered iterative training with Python and TensorFlow over 50,000 episodes.',
    detail: 'Implemented a DQN with experience replay and target network stabilisation. The agent learned to clear lines efficiently, achieving scores in the top 15% of human baseline benchmarks by episode 40k.',
    techs: ['Python', 'TensorFlow', 'OpenAI Gym', 'DQN', 'Reinforcement Learning'],
    metric: '50k',
    metricLabel: 'Training episodes',
    github: 'https://github.com/dikesh098',
  },
  {
    id: 'analytics-dashboard',
    num: '04',
    name: 'Business Analytics Dashboard',
    cat: 'Business Intelligence',
    tag: 'data',
    desc: 'End-to-end data analytics pipeline. Cleaned and transformed structured datasets with Pandas, then built interactive Power BI dashboards surfacing key business metrics.',
    detail: 'Processed 150k+ row datasets, performed exploratory analysis, and created 12 KPI-driven visualisations. Reduced manual reporting time by an estimated 70% for the client.',
    techs: ['Python', 'Pandas', 'Power BI', 'NumPy', 'DAX', 'Excel'],
    metric: '150k+',
    metricLabel: 'Rows processed',
  },
  {
    id: 'nlp-sentiment',
    num: '05',
    name: 'NLP Sentiment Analyser',
    cat: 'Natural Language Processing',
    tag: 'ml',
    desc: 'Sentiment classification model built with Python and Scikit-learn. Classifies customer reviews into positive, negative, and neutral with validated accuracy.',
    detail: 'Trained on a balanced 10k-sample dataset. Applied TF-IDF vectorisation, SVM classifier, and cross-validation. Achieved 85% accuracy on held-out test set.',
    techs: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'SVM'],
    metric: '85%',
    metricLabel: 'Model accuracy',
    github: 'https://github.com/dikesh098',
  },
  {
    id: 'expense-tracker',
    num: '06',
    name: 'React Native Expense Tracker',
    cat: 'Cross-Platform Mobile App',
    tag: 'mobile',
    desc: 'Personal finance tracker with real-time budget monitoring, category-wise expense charts, and Firebase cloud sync across iOS and Android.',
    detail: 'Built with Expo for instant cross-platform deployment. Supports 8 budget categories, monthly trend charts, and offline-first local storage with background Firebase sync.',
    techs: ['React Native', 'Expo', 'Firebase', 'JavaScript', 'AsyncStorage'],
    metric: 'iOS + Android',
    metricLabel: 'Cross-platform',
    github: 'https://github.com/dikesh098',
  },
  {
    id: 'covid-visualizer',
    num: '07',
    name: 'COVID-19 Data Visualiser',
    cat: 'Data Science · React',
    tag: 'data',
    desc: 'Interactive dashboard visualising global COVID-19 spread via real-time API data. Country comparison charts, heatmaps, and trend analysis.',
    detail: 'Integrates with the disease.sh API to stream live global data. Renders 195-country comparison charts and a Leaflet.js choropleth map. Built for data journalism and public health research use.',
    techs: ['React', 'Chart.js', 'Leaflet.js', 'REST API', 'CSS3'],
    metric: '195',
    metricLabel: 'Countries tracked',
    github: 'https://github.com/dikesh098',
  },
  {
    id: 'chatbot',
    num: '08',
    name: 'AI Chatbot Assistant',
    cat: 'Conversational AI · NLP',
    tag: 'ml',
    desc: 'Rule-based and ML-hybrid chatbot built with Python and NLTK. Handles intent classification and context-aware responses for student Q&A.',
    detail: 'Combines a keyword-match layer for deterministic FAQs with an ML intent classifier for open-ended queries. Trained on 500+ student Q&A pairs. Served as a study-aid tool for 50+ peers.',
    techs: ['Python', 'NLTK', 'Flask', 'Intent Classification', 'JSON'],
    metric: '500+',
    metricLabel: 'Training samples',
    github: 'https://github.com/dikesh098',
  },
];

export const PROJECTS_FEATURED = PROJECTS.filter(p => p.featured);
export const PROJECTS_GRID = PROJECTS.filter(p => !p.featured);

export const EXPERIENCES: Experience[] = [
  {
    date: 'Jun 2023 – Dec 2023',
    company: 'NY All in One Solutions and Services Ltd.',
    role: 'Web Development Intern',
    location: 'Nagpur, Maharashtra',
    points: [
      'Developed 5+ responsive UI components using React, improving page load performance by an estimated 30%.',
      'Built a reusable component library and optimised bundle size using code-splitting and lazy loading.',
      'Contributed to mobile app features using React Native for both iOS and Android platforms.',
      'Integrated 8+ REST API endpoints ensuring smooth data flow between frontend and backend services.',
      'Used Git for version control; participated in daily stand-ups, code reviews, and sprint planning.',
    ],
    tags: ['React', 'React Native', 'REST APIs', 'Git', 'JavaScript'],
  },
  {
    date: 'Dec 2022 – Jan 2023',
    company: 'Suvidha Foundation',
    role: 'Web Developer Intern',
    location: 'Nagpur, Maharashtra',
    points: [
      'Redesigned "CODE KARO YAARO" educational website targeted at kids and parents learning to code.',
      'Delivered full-stack UI/UX improvements within a 6-week deadline, meeting all client requirements.',
      'Enhanced accessibility scores and mobile usability through semantic HTML and responsive CSS.',
      'Maintained platform stability through active debugging, QA testing, and iterative feature releases.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'UI/UX'],
  },
];

export const EDUCATIONS: Education[] = [
  {
    date: '2021 – 2025',
    school: 'University of Mumbai',
    degree: 'Bachelor of Engineering — Artificial Intelligence & Machine Learning',
    grade: 'CGPA: 7.04 / 10',
    points: [
      'Specialised in AI/ML with coursework covering Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Data Structures.',
      'Final-year project: Adaptive NPC AI for dynamic Unity environments using priority matrices and vector-based pathfinding — received distinction from the evaluation panel.',
      'Completed 8+ technical projects spanning reinforcement learning, sentiment analysis, full-stack web, and mobile development throughout the programme.',
      'Active participant in technical seminars, hackathons, and department-level project exhibitions.',
    ],
    tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Structures', 'DBMS', 'Software Engineering', 'Computer Vision'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', icon: '🔒', year: '2024', domain: 'Security' },
  { name: 'Generative AI Foundations',     issuer: 'Amazon Web Services (AWS)',   icon: '🤖', year: '2024', domain: 'AI/ML' },
  { name: 'Python for Data Science',       issuer: 'IBM / Coursera',              icon: '🐍', year: '2023', domain: 'Data Science' },
  { name: 'Data Science 101',              issuer: 'IBM',                          icon: '📊', year: '2023', domain: 'Data Science' },
  { name: 'Introduction to Cybercrime',   issuer: 'Simplilearn',                  icon: '🛡️', year: '2023', domain: 'Security' },
  { name: 'Cyber Job Simulation',          issuer: 'Deloitte Australia',           icon: '💼', year: '2024', domain: 'Industry' },
];

export const NAV_LINKS = [
  { label: 'Home',            path: '/' },
  { label: 'About',           path: '/about' },
  { label: 'Skills',          path: '/skills' },
  { label: 'Experience',      path: '/experience' },
  { label: 'Projects',        path: '/projects' },
  { label: 'Certifications',  path: '/certifications' },
  { label: 'Contact',         path: '/contact' },
];
