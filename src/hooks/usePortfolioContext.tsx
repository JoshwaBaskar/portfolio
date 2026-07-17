import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  cls: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  href: string | null;
};

export type PortfolioContextValue = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  skillCategories: SkillCategory[];
  projects: Project[];
  timeline: TimelineEvent[];
  faqItems: FAQItem[];
  contactItems: ContactInfo[];
  stats: { value: number; label: string; suffix: string }[];
  socialLinks: { icon: string; href: string; label: string }[];
};

const PortfolioContext = createContext<PortfolioContextValue | undefined>(undefined);

const skillCategories: SkillCategory[] = [
  { name: 'Programming', icon: 'FaCode', items: ['Java', 'Python', 'C', 'JavaScript'] },
  { name: 'Frontend', icon: 'FaPalette', items: ['React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'] },
  { name: 'Backend', icon: 'FaServer', items: ['Spring Boot', 'REST API', 'JWT Authentication'] },
  { name: 'Database', icon: 'FaDatabase', items: ['MySQL', 'MongoDB', 'SQLite'] },
  { name: 'Machine Learning', icon: 'FaBrain', items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { name: 'Tools', icon: 'FaWrench', items: ['Git', 'GitHub', 'Docker', 'Swagger', 'VS Code', 'Postman'] }
];

const projects: Project[] = [
  {
    title: 'Employee Management System',
    desc: 'Secure full stack employee management system built with Spring Boot, React, JWT Authentication, MySQL, Docker, and Swagger.',
    features: ['Role-based Authentication', 'CRUD Operations', 'REST APIs', 'Responsive UI', 'JWT Login', 'Dockerized Application', 'Swagger Documentation'],
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Docker', 'Swagger'],
    cls: 'emerald'
  },
  {
    title: 'Hire Sense AI',
    desc: 'AI-powered resume screening and candidate matching platform using React, FastAPI, MongoDB, Gemini API, JWT, and ChromaDB.',
    features: ['Resume Parsing', 'ATS Score', 'Skill Extraction', 'AI Recommendations', 'Candidate Dashboard', 'Recruiter Dashboard', 'Authentication', 'Vector Database Integration'],
    tech: ['React', 'FastAPI', 'MongoDB', 'Gemini API', 'JWT', 'ChromaDB'],
    cls: 'cyan'
  },
  {
    title: 'Online Payment Fraud Detection',
    desc: 'Machine learning-based fraud detection model for payment transactions using Python, Scikit-learn, and advanced analytics.',
    features: ['Data Analysis', 'Fraud Prediction', 'ML Model', 'Visualization'],
    tech: ['Python', 'Machine Learning', 'Scikit-learn'],
    cls: 'amber'
  },
  {
    title: 'Digital Complaint Management System',
    desc: 'Complaint tracking platform with user registration, admin dashboard, status tracking, and resolution workflows.',
    features: ['User Registration', 'Complaint Submission', 'Admin Dashboard', 'Status Tracking', 'Resolution Workflow'],
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    cls: 'rose'
  }
];

const timeline: TimelineEvent[] = [
  { year: '2022', title: 'Learning Programming', desc: 'Started with C and Python fundamentals, building a solid foundation in logic and problem-solving.' },
  { year: '2023', title: 'Java Development', desc: 'Deep dive into Java, OOP concepts, data structures, and algorithms. Built console applications.' },
  { year: '2023', title: 'Machine Learning', desc: 'Explored ML algorithms, data preprocessing, and model evaluation with Python and Scikit-learn.' },
  { year: '2024', title: 'Full Stack Development', desc: 'Built full stack applications with Spring Boot backend and React frontend, deploying with Docker.' },
  { year: '2024', title: 'Cloud Learning', desc: 'AWS and Azure fundamentals, containerization with Docker, and CI/CD pipeline concepts.' },
  { year: '2025', title: 'AI Projects', desc: 'AI-powered applications with Google Gemini API, vector databases, and intelligent resume screening.' }
];

const faqItems: FAQItem[] = [
  { q: 'What technologies do you specialize in?', a: 'I specialize in Java, Spring Boot, React, MySQL, and Machine Learning technologies including TensorFlow and Scikit-learn. I also have experience with Docker, AWS, and Azure.' },
  { q: 'Are you available for freelance work?', a: 'Yes, I am open to freelance opportunities and collaborations on interesting full stack or AI-related projects.' },
  { q: 'What is your approach to learning new technologies?', a: 'I follow a hands-on approach — building projects while learning. I leverage online courses, official documentation, and open-source contributions to deepen my understanding.' },
  { q: 'Can you work in a team environment?', a: 'Absolutely. I have experience working in team settings during hackathons, internships at Intrainz and NSIC, and college projects including coordinating a cultural fest.' },
  { q: 'How can I contact you?', a: 'You can reach me through the contact form below, or directly via email at joshwavsb@gmail.com. I typically respond within 24 hours.' },
  { q: 'What are your career goals?', a: 'I aim to grow as a Software Developer working on production-grade applications, combining my full stack skills with AI/ML to build intelligent, scalable systems.' }
];

const contactItems: ContactInfo[] = [
  { icon: 'FiMail', label: 'Email', value: 'joshwavsb@gmail.com', href: 'mailto:joshwavsb@gmail.com' },
  { icon: 'FiGithub', label: 'GitHub', value: 'JoshwaBaskar', href: 'https://github.com/JoshwaBaskar' },
  { icon: 'FiLinkedin', label: 'LinkedIn', value: 'joshwa-b-322967291', href: 'https://linkedin.com/in/joshwa-b-322967291' },
  { icon: 'FiMapPin', label: 'Location', value: 'Kovilpatti, Tamil Nadu, India', href: null }
];

const stats = [
  { value: 3, label: 'Years Learning', suffix: '+' },
  { value: 4, label: 'Projects Built', suffix: '+' },
  { value: 15, label: 'Technologies', suffix: '+' },
  { value: 4, label: 'Certificates', suffix: '+' }
];

const socialLinks = [
  { icon: 'FiGithub', href: 'https://github.com/JoshwaBaskar', label: 'GitHub' },
  { icon: 'FiLinkedin', href: 'https://linkedin.com/in/joshwa-b-322967291', label: 'LinkedIn' },
  { icon: 'FiMail', href: 'mailto:joshwavsb@gmail.com', label: 'Email' }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      skillCategories,
      projects,
      timeline,
      faqItems,
      contactItems,
      stats,
      socialLinks
    }),
    [activeSection]
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioContext must be used within AppProvider');
  }
  return context;
}
