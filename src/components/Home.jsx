import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pic from '../images/portfolio_logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce site with user authentication, payment processing, and admin dashboard",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team functionality",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and reporting",
      tech: ["React", "Express", "MongoDB", "Chart.js", "REST API"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80"
    },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg"></div>
              <span className="text-xl font-bold tracking-tight text-black">MERN<span className="text-green-600">Dev</span></span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-sm uppercase tracking-wider transition-all duration-300 ${activeSection === item.id
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600 hover:border-b-2 hover:border-green-300'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <button
              ref={menuRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <motion.i
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}
              ></motion.i>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-2 pt-2 pb-4">
                  {navItems.map(item => (
                    <motion.button
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`font-medium text-left py-3 px-4 text-sm uppercase tracking-wider transition-all duration-200 ${activeSection === item.id
                          ? 'text-green-600 bg-green-50 rounded-md'
                          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                        }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-green-600 font-semibold text-lg mb-3 tracking-wide"
                >
                  HELLO, I'M
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black"
                >
                  ANAND <span className="text-green-600">SHAW</span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
                >
                  Full Stack <span className="text-green-600 font-semibold">MERN</span> Developer
                </motion.h2>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg"
              >
                MERN Stack Developer with 3+ years of experience building scalable full-stack web apps. Delivered 3+ live projects with responsive UI, multilingual support, and secure payments. Proficient in JavaScript, React, Node.js, Express, MongoDB, and REST APIs.              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-7 py-3.5 rounded-lg font-medium hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-black text-black px-7 py-3.5 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center lg:justify-start space-x-6"
              >
                {['github', 'linkedin', 'twitter', 'dev'].map((social, index) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-all duration-300"
                  >
                    <i className={`fab fa-${social} text-2xl`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                >
                  <img
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                    src={Pic}
                    alt="Anand Kumar - MERN Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -bottom-3 -right-3 bg-gradient-to-br from-green-600 to-emerald-500 text-white p-5 rounded-xl shadow-xl"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold">3+</p>
                    <p className="text-sm font-medium">Years Experience</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -top-3 -left-3 bg-black text-white p-5 rounded-xl shadow-xl"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold">3+</p>
                    <p className="text-sm font-medium">Projects</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6 text-black">Building Digital Solutions</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a passionate MERN stack developer with over 3 years of experience building full-stack web applications.
                I specialize in creating responsive, performant applications with clean code and modern development practices.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                My approach combines technical expertise with a strong focus on user experience, ensuring that every application
                I build is both powerful and intuitive. I stay updated with the latest technologies and methodologies to
                deliver cutting-edge solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {['Full-Stack Development', 'REST API Design', 'Database Architecture', 'Cloud Deployment'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <i className={`fas fa-check-circle ${index < 2 ? 'text-green-600' : 'text-black'} mr-3 text-lg`}></i>
                    <span className="font-medium text-gray-800">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-5 py-3 rounded-lg font-medium hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-md"
                >
                  <span>Download Resume</span>
                  <i className="fas fa-download ml-2"></i>
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-black font-medium hover:text-gray-800 transition-colors duration-200 border-b border-black hover:border-gray-800"
                >
                  <span>View Certifications</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6 text-black">My Development Process</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: 'search',
                    title: 'Discovery & Planning',
                    description: 'Understanding business requirements, user needs, and architecting scalable solutions with proper documentation.',
                    color: 'green'
                  },
                  {
                    icon: 'code',
                    title: 'Development & Testing',
                    description: 'Building with clean, maintainable code following best practices and implementing comprehensive testing strategies.',
                    color: 'black'
                  },
                  {
                    icon: 'rocket',
                    title: 'Deployment & Optimization',
                    description: 'Deploying to production environments, performance optimization, and continuous monitoring for reliability.',
                    color: 'gradient'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`${step.color === 'green' ? 'bg-green-50 text-green-600' :
                        step.color === 'black' ? 'bg-gray-50 text-black' :
                          'bg-gradient-to-r from-green-50 to-gray-50 text-gray-900'
                      } w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0`}>
                      <i className={`fas fa-${step.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-black">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - Added missing section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Skills & Technologies</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React", level: 95 },
                  { name: "Next.js", level: 85 },
                  { name: "Redux", level: 90 },
                  { name: "Tailwind CSS", level: 92 }
                ]
              },
              {
                category: "Backend",
                skills: [
                  { name: "Node.js", level: 90 },
                  { name: "Express.js", level: 88 },
                  { name: "REST APIs", level: 94 },
                  { name: "MongoDB", level: 87 }
                ]
              },
              {
                category: "Tools",
                skills: [
                  { name: "Git", level: 93 },
                  { name: "Docker", level: 80 },
                  { name: "AWS", level: 75 },
                  { name: "Jest", level: 85 }
                ]
              }
            ].map((categoryData, categoryIndex) => (
              <motion.div
                key={categoryData.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-6 text-black">{categoryData.category}</h3>
                <div className="space-y-5">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-green-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Projects</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"
            ></motion.div>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto">Showcasing my MERN stack applications and full-stack solutions with modern architectures and best practices.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    MERN
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">{project.title}</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <motion.a
                      whileHover={{ x: -5 }}
                      href={project.github}
                      className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium flex items-center"
                    >
                      <i className="fab fa-github mr-2"></i> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center shadow-md"
                    >
                      Live Demo <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Get In Touch</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"
            ></motion.div>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto">Interested in working together? Let's discuss your project requirements and how I can help bring your ideas to life.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-black">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-800 mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Enter name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="xyz@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-800 mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-800 mb-2 font-medium">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                      placeholder="Tell me about your project requirements, timeline, and any specific needs..."
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:from-green-700 hover:to-emerald-600'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        Drop Message <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-xl h-full shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 opacity-90 leading-relaxed">Feel free to reach out for collaboration, job opportunities, or to discuss how we can work together on your next project.</p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: 'envelope', title: 'Email', content: 'akshaw5999@gmail.com' },
                    { icon: 'phone', title: 'Phone', content: '+91 6291312929' },
                    { icon: 'map-marker-alt', title: 'Location', content: 'New Delhi, India.' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start"
                    >
                      <div className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className={`fas fa-${item.icon} text-green-400`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="opacity-90">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4 text-lg">Connect with me</h4>
                  <div className="flex space-x-4">
                    {['github', 'linkedin-in', 'twitter', 'dev'].map((social, index) => (
                      <motion.a
                        key={social}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        href="#"
                        className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-black text-white py-10 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0 text-center md:text-left"
            >
              <div className="flex items-center space-x-3 justify-center md:justify-start mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg"></div>
                <span className="text-xl font-bold">MERN<span className="text-green-400">Dev</span></span>
              </div>
              <p className="text-gray-400">Full Stack MERN Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-6 md:mb-0"
            >
              {navItems.map(item => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -3 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm uppercase tracking-wider"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-right"
            >
              <p>&copy; {new Date().getFullYear()} Anand Kumar Shaw. All rights reserved.</p>
              <span className="text-xl font-bold">MERN<span className="text-green-400"> STACK</span></span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
          >
            <p>Specializing in MongoDB, Express, React, Node.js, and modern web technologies.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
export default App;