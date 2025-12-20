'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, ArrowDown, ExternalLink, MapPin, Phone } from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaGitAlt, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiGithubactions 
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

// Custom hook for intersection observer
function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

// Navigation Component
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-zinc-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="text-xl tracking-tight text-black font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            KS
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="text-black hover:text-blue-600 transition-colors inline-block"
                  whileTap={{ scale: 0.95, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-600 hover:text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200"
          >
            <ul className="py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <motion.a
                    href={item.href}
                    className="block text-zinc-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.98, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Component
export function Hero() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'https://github.com/ksarika79522' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/karthik-sarika/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailTo:sarika.kar23@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl tracking-tight mb-4 text-zinc-900"
            >
              Karthik Sarika
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl text-black mb-8"
            >
              I build exceptional digital experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-black max-w-2xl mx-auto mb-12"
            >
              I'm a student at North Carolina State University studying Computer Science. I'm passionate about creating AI-powered applications and building solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon size={24} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-zinc-400" size={24} />
      </motion.div>
    </section>
  );
}

// About Component
export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl mb-12 flex items-center gap-4 text-zinc-900"
          >
            About Me
            <span className="flex-1 h-px bg-zinc-300 ml-4"></span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-4 text-zinc-900"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
              Hello! I’m Karthik Sarika, a software developer interested in building AI-driven applications and thoughtful, well-designed software. I’ve spent my time exploring both full-stack development and machine learning through hands-on projects that focus on solving real-world problems.
              </p>
              <p>
              I’ve worked on projects ranging from AI-powered personal finance tools to data-driven prediction models, where I’ve gained experience designing application logic, working with APIs and datasets, and building clean, user-focused interfaces. I enjoy turning ideas into working products and learning how different parts of a system fit together, from backend logic to frontend experience.
              </p>
              <p>
              I’m constantly learning and experimenting with new technologies, improving my understanding of machine learning, and refining my software engineering skills through personal projects and coursework. Outside of that, I love to box and listen to music.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Blue Ring */}
              <div className="absolute -inset-2 bg-blue-600/20 rounded-full blur-md"></div>
              
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl bg-zinc-900">
                <div className="aspect-square relative w-full h-full">
                  <Image
                    src="/me.png"
                    alt="Karthik Sarika"
                    fill
                    className="object-cover scale-100 object-[50%_35%]"
                    priority
                  />
                  {/* Fallback initials if image fails or is loading */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-white font-bold -z-10">
                    KS
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Component
const experiences = [
  {
    title: 'Robotics Team Developer',
    company: 'Charlotte AI Research',
    location: 'Charlotte, NC',
    date: 'September 2024 - March 2025',
    description: [
      'Contributed to the robotics team project building an autonomous delivery system designed to replicate and eventually replace Starship food delivery robots on campus. Successfully implemented 5+ test routes around the UNCC Campus.',
      'Worked with ROS2 Foxy and Gazebo to configure navigation and path-planning modules for obstacle avoidance and real-time route updates.',
      'Integrated basic machine learning models collaborating with the machine learning team to improve accuracy by 15% in simulation tests.',
    ],
  },
  {
    title: 'AI Model Test Engineer',
    company: 'Outlier AI',
    location: 'Remote',
    date: 'October 2024 - April 2025',
    description: [
      'Tested and validated machine learning models for accuracy and reliability.',
      'Cleaned and processed large datasets using Python and Pandas.',
      'Collaborated remotely with AI engineers to test and validate models.',
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-16 flex items-center gap-4 text-zinc-900 font-semibold">
            Experience
            <span className="flex-1 h-px bg-zinc-300 ml-4"></span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="max-w-3xl"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                  <div className="flex items-center gap-3 text-zinc-500 mt-2 text-sm font-medium uppercase tracking-wide">
                    <span>{exp.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-700 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600/30 mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Component
const projects = [
  {
    title: 'MovieRec Pro',
    description: 'A full-stack movie recommendation system with a built in ai chatbot for personalized recommendations and content-based filtering system.',
    tech: ['React', 'Python', 'Numpy', 'Pandas'],
    github: 'https://github.com/ksarika79522/movie-recommendation-system',
  },
  {
    title: 'AAPL Stock Prediction',
    description: 'AAPL stock prediction model using LSTM neural network to predict closing prices from historical data with high accuracy.',
    tech: ['Python', 'Jupyter', 'Pandas', 'TensorFlow'],
    github: 'https://github.com/ksarika79522/aapl-stock-predict',
  },
  {
    title: 'Personal Portfolio',
    description: 'Comprehensive portfolio website showcasing projects, skills, and certifications with smooth animations and responsive design.',
    tech: ['React', 'Next.js', 'HTML', 'Javascript'],
    github: 'https://github.com/ksarika79522/personalPortfolio',
  },
  {
    title: 'FinBruzz',
    description: 'AI-powered personal finance assistant that helps users manage expenses, track budgets, and provides financial insights through a conversational interface.',
    tech: ['TypeScript', 'Javascript', 'React', 'Lua'],
    github: 'https://github.com/sidmalireddi10/FinBruzz',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-12 flex items-center gap-4 text-zinc-900">
            Projects
            <span className="flex-1 h-px bg-zinc-300 ml-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white border border-zinc-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all block"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl group-hover:text-blue-600 transition-colors text-zinc-900 font-semibold">
                    {project.title}
                  </h3>
                  <Github size={20} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Component
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Intermediate', icon: FaReact },
      { name: 'Next.js', level: 'Intermediate', icon: SiNextdotjs },
      { name: 'JavaScript', level: 'Intermediate', icon: SiJavascript },
      { name: 'HTML/CSS', level: 'Intermediate', icon: FaHtml5 }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Intermediate', icon: FaNodeJs },
      { name: 'Python', level: 'Advanced', icon: FaPython },
      { name: 'Java', level: 'Intermediate', icon: FaJava },
      { name: 'REST APIs', level: 'Intermediate', icon: AiOutlineApi }
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced', icon: FaGitAlt },
      { name: 'Docker', level: 'Intermediate', icon: FaDocker },
      { name: 'AWS', level: 'Beginner', icon: FaAws },
      { name: 'CI/CD', level: 'Intermediate', icon: SiGithubactions }
    ],
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-12 flex items-center gap-4 text-zinc-900">
            Skills
            <span className="flex-1 h-px bg-zinc-300 ml-4"></span>
          </h2>

          <div className="space-y-16 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="text-xl mb-8 text-blue-600 font-medium"
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3
                      }}
                      className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-200 group cursor-default hover:border-blue-600 hover:bg-blue-50/30"
                    >
                      <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        <skill.icon size={28} />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-zinc-900">{skill.name}</p>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 font-medium">{skill.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Certifications Component
const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2025',
    link: 'https://www.linkedin.com/in/karthik-sarika/',
  },
  {
    title: 'IBM AI Developer Professional Certificate',
    issuer: 'Coursera',
    date: '2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/KEOXRNH9JZ21',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/L7O9NAVY7OZ2'
  },
];

export function Certifications() {
  const { ref, isInView } = useInView();

  return (
    <section id="certifications" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-12 flex items-center gap-4 text-zinc-900">
            Certifications
            <span className="flex-1 h-px bg-zinc-300 ml-4"></span>
          </h2>

          <div className="max-w-8xl mx-auto flex flex-col gap-3">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-zinc-100 rounded-xl py-3 px-6 hover:border-blue-600 transition-all group shadow-sm hover:shadow-md block"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-700 text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-zinc-600 text-sm font-medium">{cert.date}</span>
                    <span className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm transition-colors">
                      View Certificate
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Component
export function Contact() {
  const { ref, isInView } = useInView();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      alert("Error: Web3Forms Access Key is missing. Please add it to your .env.local file.");
      setFormState('idle');
      return;
    }
    
    formData.append("access_key", accessKey); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        alert("Error: " + data.message);
        setFormState('idle');
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-center text-zinc-900 font-semibold">
            Get In Touch
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-black mb-12 text-center"
          >
            Have a question or want to work together? Feel free to send me a message!
          </motion.p>

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-50 border border-zinc-200 rounded-sm p-12 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Message Sent!</h3>
              <p className="text-zinc-600">Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 shadow-sm focus-within:border-blue-600 transition-all"
                >
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-none outline-none text-zinc-900 placeholder:text-zinc-300"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 shadow-sm focus-within:border-blue-600 transition-all"
                >
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-none outline-none text-zinc-900 placeholder:text-zinc-300"
                  />
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 shadow-sm focus-within:border-blue-600 transition-all"
              >
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1 ml-1">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full bg-transparent border-none outline-none text-zinc-900 placeholder:text-zinc-300 resize-none"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={formState === 'submitting'}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="w-full py-4 bg-blue-600 text-white rounded-sm font-semibold hover:bg-blue-700 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                {formState === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}