import { useEffect, useState } from "react";
import type { ThemeButtonProps } from "./ThemeButton";

type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'achievements' | 'contact';

const sections: SectionId[] = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];

export function Navbar({ isDark }: ThemeButtonProps) {
    const [activeSection, setActiveSection] = useState<SectionId>('hero');

    const handleScroll = (): void => {
        const scrollPosition = window.scrollY + 100;

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
    }, []);

    const scrollToSection = (sectionId: SectionId): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 85;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className={`backdrop-blur-md border rounded-full px-7 py-3 shadow-lg transition-all duration-800 ${isDark
                ? 'bg-gray-900/80 border-gray-700/50'
                : 'bg-white/10 border-white/20'
                }`}>
                <div className="flex items-center justify-center space-x-8">
                    {sections.map(section => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`relative capitalize font-medium transition-all duration-800 px-4 py-2.5 rounded-full cursor-pointer 
                                ${activeSection === section
                                    ? isDark
                                        ? 'text-white bg-gray-700/50 shadow-md'
                                        : 'text-black bg-white/20 shadow-md'
                                    : isDark
                                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                                        : 'text-black/80 hover:text-black hover:bg-white/10'
                                }`}
                        >
                            {section === 'hero' ? 'Home' : section}
                            {activeSection === section && (
                                <div className={`absolute inset-0 rounded-full animate-pulse ${isDark
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                                    : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                                    }`} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}