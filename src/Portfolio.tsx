import { Download } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ThemeButton from './components/ThemeButton';
import About from './contents/About';
import Experience from './contents/Experience';
import Project from './contents/Project';
import Skill from './contents/Skill';
import Achievement from './contents/Achievement';
import Contact from './contents/Contact';
import { motion } from 'framer-motion';
import Hero from './contents/Hero';
import { useTheme } from './hooks/useTheme';

function Portfolio() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen bg-linear-to-br relative transition-all duration-300 ${isDark ? 'from-black via-gray-700 to-gray-900' : 'from-gray-50 via-blue-50 to-purple-50 border border-white/20'
        }`}
    >
      <Navbar />
      <ThemeButton />

      <section id="hero" className={`xl:h-screen pt-25 px-6 pb-10 relative border-b ${isDark ? 'border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'border-gray-200/60 shadow-[0_8px_12px_rgba(0,0,0,0.15)]'}`}>
        <Hero />
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

          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>About Me</h2>
          <About />
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0 }}

            href="/Nguyen-Cao-Minh-CV-SE.pdf"
            download
            className={`flex items-center justify-center text-[17px] w-50 px-8 py-4 bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A] hover:from-[#ea4492ed] hover:to-[#004d9aed]' : 'from-[#1CA7EC] to-[#4ADEDE] hover:from-[#1CA7ECed] hover:to-[#4ADEDEed]'} text-white rounded-full font-medium transform transition-all duration-300 hover:scale-105 shadow-lg`}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      </section>

      <section
        id="experience"
        className={`py-10 pb-15 px-4 transition-colors duration-500 border-b relative ${isDark ? 'bg-black/30 border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.1)]' : 'bg-gray-50 border-gray-200/60 shadow-[0_8px_12px_rgba(0,0,0,0.15)]'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>Experience</h2>
          <Experience />
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
          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>Featured Projects</h2>
          <Project />
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
          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>Skills & Technologies</h2>
          <Skill />
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
          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>Achievements</h2>
          <Achievement />
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
          <h2 className={`text-4xl md:text-6xl mb-16 mt-4 md:leading-17 font-bold text-center bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>Contact Me</h2>
          <Contact />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;