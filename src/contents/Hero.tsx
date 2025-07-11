import { Facebook, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { TypingAnimation } from "../components/TypingAnimation";
import { ZaloIcon } from "../components/ZaloIcon";

export default function Hero({ isDark }: ThemeButtonProps) {
    return (
        <div className="max-w-4xl mx-auto text-center xl:mt-[-60px]">
            <img src="/profile.png" className="w-50 h-50 mx-auto mb-8 rounded-full" alt="KM" />
            <h1
                className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-800 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}
            >
                <TypingAnimation text="Nguyen Cao Minh" speed={150} />
            </h1>
            <RotatingText
                texts={['Software Engineer', 'ABAP Developer', 'Fullstack Developer']}
                mainClassName="px-2 sm:px-2 md:px-3 text-xl md:text-2xl mb-8 transition-colors duration-800 ${isDark ? 'text-gray-300' : 'text-gray-700' overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                staggerFrom={"first"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
            />
            <div className="flex gap-4 justify-center mb-8">
                <a
                    href="https://www.facebook.com/caominh.nguyen.338"
                    className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105 overflow-hidden hover:w-[7.25rem] ${isDark
                        ? 'border-[#0866FF]/90 bg-[#0866FF]/90 text-white/80 hover:bg-[#0866FF] hover:shadow-[#0866FF]/25 hover:text-white'
                        : 'border-[#0866FF] text-[#0866FF] hover:bg-[#0866FF] hover:shadow-[#0866FF]/25 hover:text-white'
                        }`}
                >
                    <Facebook className="w-6 h-6 z-10 transition-transform duration-300 group-hover:-translate-x-8" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-sm transition-all duration-300 group-hover:opacity-100 ml-3">
                        Facebook
                    </span>
                </a>
                <a
                    href="mailto:caominhnguyen03@gmail.com"
                    className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105 overflow-hidden hover:w-[5.5rem] ${isDark
                        ? 'border-red-600/90 bg-red-600/90 text-white/80 hover:bg-red-600 hover:shadow-red-600/25 hover:text-white'
                        : 'border-red-600 text-red-600 hover:bg-red-500 hover:shadow-red-600/25 hover:text-white'
                        }`}
                >
                    <Mail className="w-6 h-6 z-10 transition-transform duration-300 group-hover:-translate-x-4" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-sm transition-all duration-300 group-hover:opacity-100 ml-3.5">
                        Mail
                    </span>
                </a>
                <a
                    href="https://zalo.me/0708605649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105 overflow-hidden hover:w-[5.5rem] ${isDark
                        ? 'border-[#0068FF] text-white/80 bg-[#0068FF] hover:bg-blue-500/90 hover:text-white fill-[#ffffff]/80 hover:fill-[#ffffff]'
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 fill-[#0068ff] hover:fill-white'
                        }`}
                >
                    <ZaloIcon className="w-8 h-8 z-10 transition-transform duration-300 group-hover:-translate-x-4.5" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-sm transition-all duration-300 group-hover:opacity-100 ml-4">
                        Zalo
                    </span>
                </a>
                <a
                    href="https://github.com/Kaminich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105 overflow-hidden hover:w-[6.5rem] ${isDark
                        ? 'text-gray-800 bg-white/80 hover:bg-white hover:text-black'
                        : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                        }`}
                >
                    <Github className="w-6 h-6 z-10 transition-transform duration-300 group-hover:-translate-x-5.5" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-sm transition-all duration-300 group-hover:opacity-100 ml-4">
                        GitHub
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/cao-minh-nguyen-0476a4364/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-300 hover:scale-105 overflow-hidden hover:w-[7rem] ${isDark
                        ? 'border-[#0a66c2] bg-[#0a66c2] text-white/80 hover:bg-blue-500 hover:text-white'
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700'
                        }`}
                >
                    <Linkedin className="w-6 h-6 z-10 transition-transform duration-300 group-hover:-translate-x-7" />
                    <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-sm transition-all duration-300 group-hover:opacity-100 ml-4">
                        LinkedIn
                    </span>
                </a>
            </div>
            <div className="mt-16 animate-bounce absolute right-0 left-0 xl:bottom-5 md:bottom-10">
                <ChevronDown className={`w-8 h-8 mx-auto ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
        </div>
    );
}