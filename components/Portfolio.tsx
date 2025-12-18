'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, ArrowDown, ExternalLink, MapPin, Phone } from 'lucide-react';

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
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
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
            className="text-xl tracking-tight text-zinc-900"
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
                  className="text-zinc-600 hover:text-blue-600 transition-colors inline-block"
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
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
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
              className="text-2xl md:text-4xl text-zinc-600 mb-8"
            >
              I build exceptional digital experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-zinc-500 max-w-2xl mx-auto mb-12"
            >
              I'm a software developer specializing in building high-quality web applications
              with modern technologies. Currently focused on creating accessible, user-centered products.
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
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
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
              className="space-y-4 text-zinc-600"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Hello! I'm Karthik Sarika, a software developer passionate about crafting
                exceptional digital experiences. My journey in web development started years ago,
                and I've been fortunate to work on a variety of interesting projects.
              </p>
              <p>
                I specialize in building scalable web applications with a focus on performance,
                accessibility, and user experience. I love working with modern technologies and
                staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open source, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="aspect-square bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-6xl text-white">
                  KS
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Component
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern best practices.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with interactive charts, data visualization, and customizable reporting for business intelligence.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Social Media API',
    description: 'RESTful API for social media platform with authentication, posts, comments, and real-time notifications. Fully documented with Swagger.',
    tech: ['Node.js', 'Express', 'Redis', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-32 bg-white">
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
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white border border-zinc-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors text-zinc-900">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </motion.div>
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
      { name: 'React', level: 'Intermediate' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Intermediate' }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Advanced' }
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Beginner' },
      { name: 'CI/CD', level: 'Intermediate' }
    ],
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-32 bg-zinc-50">
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
                      whileHover={{ 
                        y: -5,
                        backgroundColor: 'white',
                        boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)',
                        borderColor: '#2563eb'
                      }}
                      className="bg-white/50 border border-zinc-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all group cursor-default"
                    >
                      <div className="w-14 h-14 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <span className="text-zinc-400 font-bold text-sm group-hover:text-blue-600">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </span>
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

// Contact Component
export function Contact() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'karthik@example.com', href: 'mailto:karthik@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
  ];

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-6 flex items-center justify-center gap-4 text-zinc-900">
            Get In Touch
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-zinc-600 mb-12 max-w-2xl mx-auto"
          >
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-zinc-50 border border-zinc-200 rounded-lg p-6"
              >
                <info.icon className="mx-auto mb-4 text-blue-600" size={24} />
                <p className="text-sm text-zinc-500 mb-2">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-zinc-700 hover:text-blue-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-zinc-700">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="mailto:karthik@example.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}