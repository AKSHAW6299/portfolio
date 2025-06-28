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
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
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
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Modified Shine effect: continuous with faster repeat on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%', opacity: 0.3 }} // Subtle opacity when not hovered
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }} // Continuous subtle shine
                    whileHover={{ opacity: 1, transition: { ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 0.5 } }} // More pronounced and faster on hover
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">3</h4>
                  <p className="text-gray-600">Years Experience</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Modified Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%', opacity: 0.3 }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    whileHover={{ opacity: 1, transition: { ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 0.5 } }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">{projects.length}+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Modified Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%', opacity: 0.3 }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    whileHover={{ opacity: 1, transition: { ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 0.5 } }}
                    style={{ willChange: 'transform' }}
                  />
                  <h4 className="font-semibold text-lg mb-2">React JS, JavaScript, Node.js</h4>
                  <p className="text-gray-600">Specialization</p>
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {/* Modified Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%', opacity: 0.3 }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    whileHover={{ opacity: 1, transition: { ease: "linear", duration: 0.8, repeat: Infinity, repeatDelay: 0.5 } }}
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
                className="bg-white p-6 rounded-xl shadow-md relative group overflow-hidden"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                {/* Shine effect (Existing) */}
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
                    className="h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    // New: Gradient flow on hover
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundImage: 'linear-gradient(to right, #fb923c, #fb923c 50%, #22c55e 50%, #22c55e)',
                    }}
                    whileHover={{
                      backgroundPosition: '-100% 0', // Shifts the gradient
                      transition: {
                        duration: 1.5,
                        ease: "linear",
                        repeat: Infinity,
                      },
                    }}
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