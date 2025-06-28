import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePic from '../images/Profile_PIC2.jpg'


const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll handler with debounce
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to activate section earlier

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Found the active section, no need to check further
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // --- NEW: Form submission handler ---
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    alert('Thank you for your message! I will get back to you soon.'); // Your alert message
    event.target.reset(); // Resets all form fields
  };
  // --- END NEW ---

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'E-commerce Platform',
  //     description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
  //     tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
  //     image: 'https://via.placeholder.com/400x225/FFA500/FFFFFF?text=E-commerce',
  //     githubLink: '#',
  //     liveLink: '#'
  //   },
  //   {
  //     id: 2,
  //     title: 'Task Management App',
  //     description: 'Real-time collaborative task management application',
  //     tags: ['React', 'Firebase', 'Material UI', 'TypeScript'],
  //     image: 'https://via.placeholder.com/400x225/4CAF50/FFFFFF?text=Task+App',
  //     githubLink: '#',
  //     liveLink: '#'
  //   },
  //   {
  //     id: 3,
  //     title: 'Portfolio Website',
  //     description: 'Interactive portfolio website with animations',
  //     tags: ['Next.js', 'CSS Animations', 'Responsive Design'],
  //     image: 'https://via.placeholder.com/400x225/FFFFFF/FFA500?text=Portfolio',
  //     githubLink: '#',
  //     liveLink: '#'
  //   }
  // ];
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=225&q=80',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application',
      tags: ['React', 'Firebase', 'Material UI', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=225&q=80',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with animations',
      tags: ['Next.js', 'CSS Animations', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=225&q=80',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/SCSS', level: 85 },
    { name: 'Redux', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'GraphQL', level: 65 },
    { name: 'TypeScript', level: 85 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Variants for staggered text reveal (New)
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger words quickly
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Floating particles (Existing) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100 opacity-30"
            initial={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed w-full bg-white shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-green-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Explore My Work
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                // Added relative and a conditional span for the animated underline
                className={`capitalize relative ${activeSection === item ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-green-500'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {activeSection === item && (
                  <motion.span
                    className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-6 py-3 capitalize ${activeSection === item ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-green-500'}`}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-orange-50 overflow-hidden">
        {/* Background blobs (New) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0],
            scale: [1, 1.1, 1],
            borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 70%", "60% 40% 30% 70%/60% 30% 70% 40%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: 'transform' }} // Performance hint
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, 20, 0, -20, 0],
            scale: [1, 0.9, 1],
            borderRadius: ["40% 70% 60% 30%/70% 40% 30% 60%", "70% 30% 40% 60%/60% 70% 40% 30%", "40% 70% 60% 30%/70% 40% 30% 60%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ willChange: 'transform' }} // Performance hint
        />

        <div className="container mx-auto px-6 z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="md:w-1/2 mb-10 md:mb-0" variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={textVariants} // Applied textVariants here
                initial="hidden"
                animate="visible"
              >
                {"Hi, I'm ".split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
                <motion.span className="text-green-600 inline-block" variants={wordVariants}>Anand Kumar Shaw</motion.span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                React JS Developer
              </motion.h2>
              <motion.p
                className="text-lg mb-8 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I build beautiful, performant web applications with modern technologies.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  // Added styling for gradient border on hover (New)
                  className="relative bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-green-700
                             before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-orange-500 before:to-green-500 before:z-[-1]
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  // Added styling for gradient border on hover (New)
                  className="relative border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50
                             before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-green-500 before:to-orange-500 before:z-[-1]
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    // src="https://via.placeholder.com/400x400/4CAF50/FFFFFF?text=Developer"
                    src={ProfilePic}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-10 -left-10 -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="text-green-200 w-24 h-24 opacity-60" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-orange-400 rounded-full w-16 h-16"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate React developer with approximately 3 years of experience building modern web applications.
                I specialize in creating responsive, accessible, and performant user interfaces.
              </p>
              <p className="text-gray-600 mb-4">
                My approach combines clean code principles with attention to design details, resulting in
                applications that are both technically robust and visually appealing.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me contributing to open-source projects, learning new
                technologies, or sharing knowledge with the developer community.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 bg-green-50 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden" // Added relative group overflow-hidden (New)
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Shine effect (New) */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">3</h4>
                  <p className="text-gray-600">Years Experience</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden" // Added relative group overflow-hidden (New)
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Shine effect (New) */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">3+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden" // Added relative group overflow-hidden (New)
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Shine effect (New) */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">React JS, JavaScript, Node.js</h4>
                  <p className="text-gray-600">Specialization</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden" // Added relative group overflow-hidden (New)
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Shine effect (New) */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">Full Time or, Remote</h4>
                  <p className="text-gray-600">Work Preference</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-md relative group overflow-hidden" // Added relative group overflow-hidden (New)
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                {/* Shine effect (New) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  style={{ willChange: 'transform' }}
                />
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 text-green-600">•</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-green-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition relative group" // Added relative group (New)
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Shine effect (New) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  style={{ willChange: 'transform' }}
                />
                <motion.div
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <motion.a
                      href={project.liveLink}
                      className="text-orange-500 hover:text-orange-700 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="text-gray-500 hover:text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              // Added styling for gradient border on hover (New)
              className="relative bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg
                         before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-green-500 before:to-orange-500 before:z-[-1]
                         before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="text-orange-500 w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 6291312929</span> {/* Replace with your actual phone number */}
                </div>
                <div className="flex items-center">
                  <svg className="text-orange-500 w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>akshaw5999@gmail.com</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <motion.a
                    href="https://github.com/AKSHAW6299"
                    className="bg-white p-3 rounded-full text-gray-700 shadow-md"
                    whileHover={{ y: -5, backgroundColor: "#4CAF50", color: "#fff" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anand-kumar-shaw-507b3b310/"
                    className="bg-white p-3 rounded-full text-gray-700 shadow-md"
                    whileHover={{ y: -5, backgroundColor: "#4CAF50", color: "#fff" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anand-kumar-shaw-507b3b310/"
                    className="bg-white p-3 rounded-full text-gray-700 shadow-md"
                    whileHover={{ y: -5, backgroundColor: "#4CAF50", color: "#fff" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* --- MODIFIED: Added onSubmit handler --- */}
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  // Added styling for gradient border on hover (New)
                  className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg
                             before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-green-500 before:to-orange-500 before:z-[-1]
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Send Message
                </motion.button>
              </form>
              {/* --- END MODIFIED --- */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 md:mb-0">
              <motion.div
                className="text-2xl font-bold text-orange-300 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                Anand Kumar Shaw
              </motion.div>
              <p className="text-green-200">Building exceptional digital experiences</p>
            </div>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* You can add social media icons/links here */}
              <a href="https://www.linkedin.com/in/anand-kumar-shaw-507b3b310/" className="text-green-200 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/AKSHAW6299" className="text-green-200 hover:text-white transition-colors duration-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/anand-kumar-shaw-507b3b310/" className="text-green-200 hover:text-white transition-colors duration-300">
                Twitter
              </a>
            </motion.div>
          </motion.div>
          <motion.p
            className="text-center text-green-300 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Anand. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Home;