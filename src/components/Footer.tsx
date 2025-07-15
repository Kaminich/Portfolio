import { Github, Mail, MapPin, Calendar, Heart, Linkedin, Download, Facebook } from "lucide-react"
import { ZaloIcon } from "./ZaloIcon"
import { useTheme } from "../hooks/useTheme"

interface FooterLink {
    name: string
    href: string
}

const footerLinks: FooterLink[] = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Features Projects", href: "#projects" },
    { name: "Skills & Technologies", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
]

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { isDark } = useTheme();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
        e.preventDefault()

        const targetId = href.replace('#', '')
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - 50

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <footer
            className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 bg-linear-to-br ${isDark ? 'from-black via-gray-700 to-gray-900' : 'from-gray-50 via-blue-50 to-purple-50 text-gray-900 border-t border-gray-200'
                }`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex max-sm:flex-col md:flex-row max-sm:gap-8 md:flex-wrap lg:justify-center lg:gap-20 mb-8 sm:mb-12">
                    <div className="text-center md:text-left space-y-4 sm:space-y-6" style={{ flex: 1.4 }}>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Connect</h3>
                        <p
                            className={`text-base sm:text-[17px] leading-relaxed mb-4 sm:mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                        >
                            I'm always open to discussing new opportunities, collaborations, and interesting projects.
                        </p>

                        <div className="space-y-3 sm:space-y-4 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:ml-[23%]">
                            <div className="flex items-center justify-center md:justify-start group">
                                <div
                                    className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark ? "bg-gray-800 group-hover:bg-gray-700" : "bg-gray-200 group-hover:bg-gray-300"
                                        }`}
                                >
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <span className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                    caominhnguyen03@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center justify-center md:justify-start group">
                                <div
                                    className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark ? "bg-gray-800 group-hover:bg-gray-700" : "bg-gray-200 group-hover:bg-gray-300"
                                        }`}
                                >
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <span className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                    Ho Chi Minh City, Vietnam
                                </span>
                            </div>

                            <div className="flex items-center justify-center md:justify-start group">
                                <div
                                    className={`p-2 rounded-full mr-3 transition-colors duration-300 ${isDark ? "bg-gray-800 group-hover:bg-gray-700" : "bg-gray-200 group-hover:bg-gray-300"
                                        }`}
                                >
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <span className={`text-sm sm:text-base font-medium ${isDark ? "text-green-300" : "text-green-600"}`}>
                                    Available for new opportunities
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center md:text-left" style={{ flex: 1 }}>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className={`inline-block py-1 px-2 rounded-md transition-all duration-300 text-base sm:text-[17px] ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left flex-1" style={{ flex: 1.2 }}>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect & Follow</h3>

                        <div className="flex justify-center md:justify-start flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <a
                                href="https://facebook.com/caominhnguyen03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 sm:p-3 rounded-full border-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                    ? "border-blue-400 text-blue-400 hover:bg-blue-900/20 focus:ring-blue-400"
                                    : "border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-500"
                                    }`}
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>

                            <a
                                href="https://zalo.me/caominhnguyen03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                    ? "border-[#0068FF] hover:bg-blue-500/10 fill-[#ffffff]/80 hover:fill-[#ffffff]"
                                    : "border-blue-600 hover:bg-blue-600/10 hover:text-white fill-[#0068ff]/80 hover:fill-[#0068ff]"
                                    }`}
                                aria-label="Zalo"
                            >
                                <ZaloIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>

                            <a
                                href="https://github.com/Kaminich"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                    ? "border-white hover:border-white hover:bg-white/10 text-white focus:ring-gray-500"
                                    : "border-gray-600 hover:border-gray-700 hover:bg-black/10 text-black focus:ring-gray-400"
                                    }`}
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>

                            <a
                                href="https://linkedin.com/in/caominhnguyen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 border-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                    ? "border-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-[#0a66c2] focus:ring-blue-500"
                                    : "border-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-[#0a66c2] focus:ring-blue-400"
                                    }`}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className={`rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 text-center transition-all duration-300 border-2 hover:shadow-lg ${isDark
                        ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                        : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Work Together?</h3>
                    <p
                        className={`text-base sm:text-[17px] mb-4 sm:mb-6 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                        Whether you have a project in mind, need consultation, or just want to chat about technology, I'd love to
                        hear from you. Let's build something amazing together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href={
                                typeof window !== "undefined" && window.innerWidth >= 1024
                                    ? "https://mail.google.com/mail/?view=cm&fs=1&to=caominhnguyen03@gmail.com"
                                    : "mailto:caominhnguyen03@gmail.com"
                            }
                            onClick={e => {
                                if (typeof window !== "undefined") {
                                    const isDesktop = window.innerWidth >= 1024;
                                    if (isDesktop) {
                                        return;
                                    }
                                    e.currentTarget.href = "mailto:caominhnguyen03@gmail.com";
                                }
                            }}
                            target="_blank"
                            className={`inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-[17px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                ? "bg-red-600/90 hover:bg-red-600 text-white focus:ring-blue-500"
                                : "bg-red-500/90 hover:bg-red-500 text-white focus:ring-blue-400"
                                }`}
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Get In Touch
                        </a>

                        <a
                            href="/Nguyen-Cao-Minh-CV-SE.pdf"
                            download
                            className={`inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-[17px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark
                                ? "bg-gradient-to-br from-[#EA4492] to-[#004E9A] hover:from-[#ea4492ed] hover:to-[#004d9aed] text-white focus:ring-gray-500"
                                : "bg-gradient-to-br from-[#1CA7EC] to-[#4ADEDE] hover:from-[#1CA7ECed] hover:to-[#4ADEDEed] text-white focus:ring-gray-400"
                                }`}
                        >
                            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>

                <div
                    className={`border-t pt-6 sm:pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                    <p className={`text-xs sm:text-base text-center md:text-left ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        © {currentYear} Cao Minh Nguyen. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-2">
                        <span className={`text-xs sm:text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>Made with</span>
                        <Heart className={`w-3 h-3 sm:w-4 sm:h-4 animate-pulse ${isDark ? "text-red-400" : "text-red-500"}`} />
                        <span className={`text-xs sm:text-base ${isDark ? "text-gray-400" : "text-gray-500"}`}>from Vietnam</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}