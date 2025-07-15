import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderOpen, Award, Star, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'achievements' | 'contact';

const sections: SectionId[] = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];

const sectionIcons = {
    hero: Home,
    about: User,
    experience: Briefcase,
    projects: FolderOpen,
    skills: Star,
    achievements: Award,
    contact: MessageCircle
};

export function Navbar() {
    const [activeSection, setActiveSection] = useState<SectionId>('hero');
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const { isDark } = useTheme();

    const handleScroll = (): void => {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';

        setIsVisible(scrollDirection === 'up' || scrollY < 100);
        setLastScrollY(scrollY);

        const scrollPosition = scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (sectionId: SectionId): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const motionProps = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.nav
                        {...motionProps}
                        className="fixed hidden md:block top-4 left-1/2 transform -translate-x-1/2 z-90"
                    >
                        <div className={`backdrop-blur-md border rounded-full px-4 md:px-5 lg:px-7 py-2 md:py-2.5 lg:py-3 shadow-lg transition-all duration-800 ${isDark
                            ? 'bg-gray-900/80 border-gray-700/50'
                            : 'bg-white/10 border-white/20'
                            }`}>
                            <div className="flex items-center justify-center space-x-3 md:space-x-3 lg:space-x-5 xl:space-x-8">
                                {sections.map(section => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`relative capitalize font-medium text-[18px] transition-all duration-800 px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5 rounded-full cursor-pointer text-sm md:text-sm lg:text-base
                                            ${activeSection === section
                                                ? isDark
                                                    ? 'text-white shadow-md'
                                                    : 'text-black shadow-md'
                                                : isDark
                                                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                                                    : 'text-black/80 hover:text-black hover:bg-white/10'
                                            }`}
                                    >
                                        {section === 'hero' ? 'Home' : section}
                                        {activeSection === section && (
                                            <div className={`absolute inset-0 rounded-full ${isDark
                                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                                                : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                                                }`} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.nav
                        {...motionProps}
                        className="fixed md:hidden top-4 left-1/4 transform -translate-x-1/4 z-50"
                    >
                        <div className={`backdrop-blur-md border rounded-full px-3 py-2 shadow-lg transition-all duration-300 ${isDark
                            ? 'bg-gray-900/90 border-gray-700/50'
                            : 'bg-white/90 border-white/30'
                            }`}>
                            <div className="flex items-center justify-center space-x-1">
                                {sections.map(section => {
                                    const IconComponent = sectionIcons[section];
                                    return (
                                        <button
                                            key={section}
                                            onClick={() => scrollToSection(section)}
                                            className={`relative transition-all duration-300 p-2.5 rounded-full cursor-pointer
                        ${activeSection === section
                                                    ? isDark
                                                        ? 'text-white bg-gray-700/70 shadow-md'
                                                        : 'text-black bg-white/70 shadow-md'
                                                    : isDark
                                                        ? 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                                                        : 'text-black/60 hover:text-black hover:bg-white/30'
                                                }`}
                                        >
                                            <IconComponent size={18} />
                                            {activeSection === section && (
                                                <div className={`absolute inset-0 rounded-full animate-pulse ${isDark
                                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                                                    : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                                                    }`} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}