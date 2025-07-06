import { Code, BookOpen, User, Briefcase, Award, Download, MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import ThemeButton from './components/ThemeButton';
import About from './contents/About';
import Experience from './contents/Experience';
import Project from './contents/Project';
import Skill from './contents/Skill';
import Achievement from './contents/Achievement';
import Contact from './contents/Contact';
import { motion } from 'framer-motion';
import Hero from './contents/Hero';

function Portfolio() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 relative transition-all duration-300 ${isDark ? 'from-gray-900 via-gray-800 to-black' : 'bg-white/10 border border-white/20'
        }`}
    >
      <Navbar isDark={isDark} />
      <ThemeButton isDark={isDark} onToggleDark={toggleDarkMode} />

      <section id="hero" className="h-screen flex items-center justify-center pt-40 px-4 pb-10">
        <Hero isDark={isDark} />
      </section>

      <section
        id="about"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <User className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">About Me</h2>
          </div>
          <About isDark={isDark} />
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0 }}
            href="/Nguyen-Cao-Minh-CV-SE.pdf"
            download
            className="flex items-center justify-center w-50 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full font-medium hover:text-white transform transition-all duration-300 hover:scale-105 hover:bg-gray-900/70 shadow-lg z-99"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      </section>

      <section
        id="experience"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Briefcase className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">Experience</h2>
          </div>
          <Experience isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="projects"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Code className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">Featured Projects</h2>
          </div>
          <Project isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="skills"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <BookOpen className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">Skills & Technologies</h2>
          </div>
          <Skill isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="achievements"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Award className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">Achievements</h2>
          </div>
          <Achievement isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="contact"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <MessageCircle className="w-6 h-6 mr-4" />
            <h2 className="text-md font-bold">Contact Me</h2>
          </div>
          <Contact isDark={isDark} />
        </motion.div>
      </section>

      <Footer isDark={isDark} />
    </div>
  );
}

export default Portfolio;