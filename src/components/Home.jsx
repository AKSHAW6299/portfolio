import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePic from '../images/Profile_PIC2.jpg' // Ensure this path is correct

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll handler
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

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    alert('Thank you for your message! I will get back to you soon.'); // Your alert message
    event.target.reset(); // Resets all form fields
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, product management, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=337&q=80',
      githubLink: 'https://github.com/yourusername/ecommerce-platform', // Replace with actual link
      liveLink: 'https://ecommerce-demo.vercel.app/' // Replace with actual link
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application built for teams. Includes drag-and-drop functionality and user roles.',
      tags: ['React', 'Firebase', 'Material UI', 'TypeScript', 'Firestore'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=337&q=80',
      githubLink: 'https://github.com/yourusername/task-manager', // Replace with actual link
      liveLink: 'https://task-manager-demo.netlify.app/' // Replace with actual link
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'An interactive and animated personal portfolio website built to showcase projects and skills using modern web technologies.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=337&q=80',
      githubLink: 'https://github.com/yourusername/portfolio-website', // Replace with actual link
      liveLink: 'https://your-portfolio-live.vercel.app/' // Replace with actual link
    },
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
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 70 },
    { name: 'Express.js', level: 75 },
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

  // New: Typewriter effect variant
  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%", // Animate width to simulate typing
      transition: {
        duration: 2,
        ease: "linear",
        delay: 0.8, // Start after "Hi, I'm Anand Kumar Shaw"
      },
    },
  };

  // New: Button pulse variant
  const buttonPulse = {
    scale: [1, 1.02, 1],
    boxShadow: ["0 4px 10px rgba(0,0,0,0.1)", "0 6px 15px rgba(0,0,0,0.15)", "0 4px 10px rgba(0,0,0,0.1)"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2, // Slightly staggered pulse
    },
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
        {/* Background blobs (Existing) */}
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
                variants={textVariants}
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
              {/* Typewriter effect for h2 */}
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 overflow-hidden whitespace-nowrap border-r-4 border-r-orange-500 pr-2"
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
              >
                React JS Developer
                <motion.span // Blinking cursor
                  className="inline-block w-1 h-8 md:h-10 bg-orange-500 ml-1"
                  animate={{ opacity: [0, 1, 1, 0, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                />
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
                  className="relative bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-green-700
                                 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-orange-500 before:to-green-500 before:z-[-1]
                                 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={buttonPulse} // Apply continuous pulse
                >
                  View My Work
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="relative border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50
                                 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-green-500 before:to-orange-500 before:z-[-1]
                                 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={buttonPulse} // Apply continuous pulse
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                {/* Main Profile Image */}
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.img
                    src={ProfilePic}
                    alt="Developer"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                {/* Rotating SVG element */}
                <motion.div
                  className="absolute -top-10 -left-10 -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="text-green-300 w-24 h-24 opacity-80" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </motion.div>

                {/* Second rotating element (opposite direction) */}
                <motion.div
                  className="absolute -bottom-12 -right-12 -z-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="text-blue-300 w-32 h-32 opacity-60" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </motion.div>

                {/* Pulsing orange dot */}
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full w-16 h-16 shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating particles */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full bg-white/80 ${i % 2 ? 'w-2 h-2' : 'w-3 h-3'}`}
                    style={{
                      top: `${Math.random() * 30 + 5}%`,
                      left: `${Math.random() * 30 + 5}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl -z-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-100 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-100 rounded-full opacity-70 blur-xl"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mr-3"></span>
                    Who I Am
                  </h3>

                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      I'm a <span className="font-semibold text-gray-800">passionate React developer</span> with <span className="font-semibold text-orange-500">3 years</span> of experience building modern, scalable web applications. I specialize in creating responsive, accessible, and high-performance user interfaces that deliver exceptional user experiences.
                    </p>

                    <p className="leading-relaxed">
                      My approach combines <span className="font-semibold text-gray-800">clean code principles</span> with an eye for <span className="font-semibold text-gray-800">design aesthetics</span>, resulting in applications that are both technically robust and visually stunning.
                    </p>

                    <p className="leading-relaxed">
                      Beyond coding, I'm an active contributor to <span className="font-semibold text-green-500">open-source projects</span> and enjoy sharing knowledge through tech blogs and community forums. I thrive in collaborative environments and am always eager to learn and adopt new technologies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats Cards */}
            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Years Experience",
                    value: "3",
                    description: "Building web applications",
                    icon: "📅",
                    color: "bg-gradient-to-br from-orange-100 to-orange-50",
                    border: "border-l-4 border-orange-500"
                  },
                  {
                    title: "Projects Completed",
                    value: `${projects.length}+`,
                    description: "Across various industries",
                    icon: "🚀",
                    color: "bg-gradient-to-br from-blue-100 to-blue-50",
                    border: "border-l-4 border-blue-500"
                  },
                  {
                    title: "Specialization",
                    value: "MERN Stack",
                    description: "React, Node, Express, MongoDB",
                    icon: "⚡",
                    color: "bg-gradient-to-br from-purple-100 to-purple-50",
                    border: "border-l-4 border-purple-500"
                  },
                  {
                    title: "Work Preference",
                    value: "Remote",
                    description: "Open to full-time positions",
                    icon: "🌍",
                    color: "bg-gradient-to-br from-green-100 to-green-50",
                    border: "border-l-4 border-green-500"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${stat.color} ${stat.border} relative overflow-hidden group`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      {stat.icon}
                    </div>

                    <div className="relative z-10">
                      <div className="text-3xl font-bold mb-2 text-gray-800">{stat.value}</div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-700">{stat.title}</h4>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>

              {/* Additional call to action */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-orange-500 to-green-500 p-6 rounded-xl text-white shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <div className="text-2xl mr-4">💡</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Looking for a skilled developer?</h4>
                    <p className="text-sm opacity-90">I'm currently available for new opportunities and would love to discuss how I can contribute to your team.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Core Tech Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Technologies I work with daily and master continuously</p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "JavaScript", level: 95, icon: "JS", color: "from-yellow-400 to-yellow-600" },
              { name: "React JS", level: 90, icon: "⚛️", color: "from-blue-400 to-blue-600" },
              { name: "Node.js", level: 88, icon: "🟢", color: "from-green-500 to-green-700" },
              { name: "Express.js", level: 85, icon: "🚀", color: "from-gray-400 to-gray-600" },
              { name: "SQL & MongoDB", level: 82, icon: "🗃️", color: "from-emerald-400 to-emerald-600" },
              { name: "Next.js", level: 87, icon: "⏭️", color: "from-black to-gray-700" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 -z-0`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />

                <div className="flex items-center mb-4 z-10 relative">
                  <div className="text-3xl mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 z-10 relative overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
                    whileHover={{
                      backgroundPosition: ['0%', '100%', '0%'],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                </div>

                <div className="flex justify-between mt-3 text-sm font-medium text-gray-600 z-10 relative">
                  <span>Basic</span>
                  <span className="flex items-center">
                    <span className="mr-1">{skill.level}%</span>
                    {skill.level > 85 ? "Expert" : skill.level > 70 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 italic">"The skill levels represent my confidence and experience with each technology."</p>
          </motion.div>
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Shine effect (Existing) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  style={{ willChange: 'transform' }}
                />
                <motion.div
                  className="h-48 overflow-hidden"
                  style={{ perspective: 1000 }} // For 3D transforms
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500"
                    // New: Parallax effect on image
                    whileHover={{
                      scale: 1.1,
                      rotateX: 5,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    style={{ transformOrigin: 'center center' }}
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
                  {/* New: Overlay with links */}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.liveLink}
                      className="text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      GitHub
                    </motion.a>
                  </motion.div>
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                  {/* You can add more social media links here */}
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
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    whileFocus={{ borderColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    whileFocus={{ borderColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)' }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    whileFocus={{ borderColor: '#22c55e', boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)' }}
                  ></motion.textarea>
                </div>
                <motion.button
                  type="submit"
                  className="relative bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg
                             before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-lg before:bg-gradient-to-r before:from-green-500 before:to-orange-500 before:z-[-1]
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", rotate: [0, 5, -5, 5, 0] }} // Wiggle effect
                  transition={{ rotate: { duration: 0.3, ease: "easeInOut" } }} // Specific transition for rotate
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Anand Kumar Shaw. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <motion.a
              href="https://linkedin.com/in/yourprofile" // Replace with actual LinkedIn
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/AKSHAW6299"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;