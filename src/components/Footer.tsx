import { Github, Mail, MapPin, Calendar, Heart, Linkedin, Download, Facebook } from "lucide-react";
import type { ThemeButtonProps } from "./ThemeButton";
import { ZaloIcon } from "./ZaloIcon";

interface FooterLink {
    name: string;
    href: string;
}

const footerLinks: FooterLink[] = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
];

export function Footer({ isDark }: ThemeButtonProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`
            w-full py-16 px-4 transition-all duration-300
            ${isDark
                ? 'bg-gray-900 text-white border-t border-gray-800'
                : 'bg-gray-50 text-gray-900 border-t border-gray-200'
            }
        `}>
            <div className="max-w-6xl mx-auto">
                <div className="flex gap-20 mb-12">

                    <div className="text-center md:text-left space-y-6" style={{ flex: 1.6 }}>
                        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                        <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            I'm always open to discussing new opportunities, collaborations, and interesting projects.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start group">
                                <div className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark
                                    ? 'bg-gray-800 group-hover:bg-gray-700'
                                    : 'bg-gray-200 group-hover:bg-gray-300'
                                    }`}>
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    caominhnguyen03@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center justify-center md:justify-start group">
                                <div className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark
                                    ? 'bg-gray-800 group-hover:bg-gray-700'
                                    : 'bg-gray-200 group-hover:bg-gray-300'
                                    }`}>
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    Ho Chi Minh City, Vietnam
                                </span>
                            </div>

                            <div className="flex items-center justify-center md:justify-start group">
                                <div className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark
                                    ? 'bg-gray-800 group-hover:bg-gray-700'
                                    : 'bg-gray-200 group-hover:bg-gray-300'
                                    }`}>
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <span className={`text-sm font-medium ${isDark ? 'text-green-300' : 'text-green-600'
                                    }`}>
                                    Available for new opportunities
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`
                                                inline-block py-1 px-2 rounded-md transition-all duration-300
                                                ${isDark
                                                ? 'text-gray-300 hover:text-white'
                                                : 'text-gray-600 hover:text-gray-900'
                                            }
                                            `}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl font-bold mb-6">Connect & Follow</h3>

                        <div className="flex justify-center md:justify-start space-x-4 mb-6">
                            <a
                                href="https://facebook.com/caominhnguyen03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        p-3 rounded-full border-2 transition-all duration-300 transform hover:scale-110 
                                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                                        ${isDark
                                        ? 'border-blue-400 text-blue-400 hover:bg-blue-900/20 focus:ring-blue-400'
                                        : 'border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-500'
                                    }
                                    `}
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a
                                href="https://zalo.me/caominhnguyen03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2
                                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                                        ${isDark
                                        ? 'border-[#0068FF] hover:bg-blue-500/10 fill-[#ffffff]/80 hover:fill-[#ffffff]'
                                        : 'border-blue-600 hover:bg-blue-600/10 hover:text-white fill-[#0068ff]/80 hover:fill-[#0068ff]'
                                    }
                                        }
                                    `}
                                aria-label="Zalo"
                            >
                                <ZaloIcon className="w-5 h-5" />
                            </a>

                            <a
                                href="https://github.com/Kaminich"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2
                                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                                        ${isDark
                                        ? 'border-white hover:border-white hover:bg-white/10 text-white focus:ring-gray-500'
                                        : 'border-gray-600 hover:border-gray-700 hover:bg-black/10 text-black focus:ring-gray-400'
                                    }
                                    `}
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>

                            <a
                                href="https://linkedin.com/in/caominhnguyen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                        p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2
                                        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                                        ${isDark
                                        ? 'border-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-[#0a66c2] focus:ring-blue-500'
                                        : 'border-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-[#0a66c2] focus:ring-blue-400'
                                    }
                                    `}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`
                        rounded-xl p-8 mb-8 text-center transition-all duration-300 
                        border-2 hover:shadow-lg
                        ${isDark
                        ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }
                    `}>
                    <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                    <p className={`text-base mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Whether you have a project in mind, need consultation, or just want to chat about technology,
                        I'd love to hear from you. Let's build something amazing together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:caominhnguyen03@gmail.com"
                            className={`
                                    inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold
                                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    ${isDark
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400'
                                }
                                `}
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Get In Touch
                        </a>

                        <a
                            href="/Nguyen-Cao-Minh-CV-SE.pdf"
                            download
                            className={`
                                    inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold
                                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    ${isDark
                                    ? 'bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500'
                                    : 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-400'
                                }
                                `}
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>

                <div className={`
                        border-t pt-8 flex flex-col md:flex-row justify-between items-center
                        ${isDark ? 'border-gray-700' : 'border-gray-200'}
                    `}>
                    <p className={`text-sm mb-4 md:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        © {currentYear} Cao Minh Nguyen. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-2">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            Made with
                        </span>
                        <Heart className={`w-4 h-4 animate-pulse ${isDark ? 'text-red-400' : 'text-red-500'
                            }`} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            from Vietnam
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}