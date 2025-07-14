import { User, Briefcase, Award, Download, MessageCircle, FolderOpen, Star } from 'lucide-react';
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
      className={`min-h-screen bg-linear-to-br relative transition-all duration-300 ${isDark ? 'from-black via-gray-700 to-gray-900' : 'from-gray-50 via-blue-50 to-purple-50 border border-white/20'
        }`}
    >
      <Navbar isDark={isDark} />
      <ThemeButton isDark={isDark} onToggleDark={toggleDarkMode} />

      <section id="hero" className={`xl:h-screen pt-25 px-6 pb-10 relative border-b ${isDark ? 'border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'border-gray-200/60 shadow-[0_8px_12px_rgba(0,0,0,0.15)]'}`}>
        <Hero isDark={isDark} />
      </section>

      <section
        id="about"
        className={`py-10 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-white border-gray-200/60 shadow-[0_8px_12px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <User className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>About Me</h2>
          </div>
          <About isDark={isDark} />
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0 }}

            href="/Nguyen-Cao-Minh-CV-SE.pdf"
            download
            className={`flex items-center justify-center w-50 px-8 py-3 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-gray-600 to-black'} text-white rounded-full font-medium hover:text-white transform transition-all duration-300 hover:scale-105 hover:bg-black/30/70 shadow-lg z-99`}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      </section>

      <section
        id="experience"
        className={`py-10 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-gray-50 border-gray-200/60 shadow-[0_8px_12px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Briefcase className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>Experience</h2>
          </div>
          <Experience isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="projects"
        className={`py-10 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-white border-gray-200/80 shadow-[0_0_12px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <FolderOpen className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>Featured Projects</h2>
          </div>
          <Project isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="skills"
        className={`py-10 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-gray-50 border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Star className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>Skills & Technologies</h2>
          </div>
          <Skill isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="achievements"
        className={`py-10 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-white border-gray-200/60 shadow-[0_0_10px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <Award className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>Achievements</h2>
          </div>
          <Achievement isDark={isDark} />
        </motion.div>
      </section>

      <section
        id="contact"
        className={`py-10 px-4 transition-colors duration-500 ${isDark ? 'bg-black/30' : 'bg-white'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 px-6 py-4 rounded-full shadow-lg w-max transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-800'
              }`}
          >
            <MessageCircle className={`w-6 h-6 mr-4 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-600'}`}>Contact Me</h2>
          </div>
          <Contact isDark={isDark} />
        </motion.div>
      </section>

      <Footer isDark={isDark} />
    </div>
  );
}

export default Portfolio;