import { motion } from "framer-motion";
import { memo } from "react";
import { useTheme } from "../hooks/useTheme";

function About() {
    const { isDark } = useTheme();

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    <div
                        className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 text-transparent bg-clip-text ${isDark ? "bg-gradient-to-br from-[#EA4492] to-[#004E9A]" : "bg-gradient-to-br from-[#1CA7EC] to-[#4ADEDE]"
                                }`}
                        >
                            3+
                        </div>
                        <div
                            className={`text-sm sm:text-lg lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Years of Coding
                        </div>
                    </div>

                    <div
                        className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 text-transparent bg-clip-text ${isDark ? "bg-gradient-to-br from-[#EA4492] to-[#004E9A]" : "bg-gradient-to-br from-[#1CA7EC] to-[#4ADEDE]"
                                }`}
                        >
                            1
                        </div>
                        <div
                            className={`text-sm sm:text-lg lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Years Of Experience
                        </div>
                    </div>

                    <div
                        className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 text-transparent bg-clip-text ${isDark ? "bg-gradient-to-br from-[#EA4492] to-[#004E9A] text-transparent bg-clip-text" : "bg-gradient-to-br from-[#1CA7EC] to-[#4ADEDE]"
                                }`}
                        >
                            8+
                        </div>
                        <div
                            className={`text-sm sm:text-lg lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Projects Done
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                <div
                    className={`flex-1 lg:max-w-3xl font-semibold text-lg sm:text-xl lg:text-2xl ${isDark ? "text-white" : "text-gray-900"}`}
                >
                    <motion.p
                        initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                        whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-4 sm:mb-6`}
                        style={{
                            "--slide-x1": "-50",
                            "--slide-x2": "0",
                            "--slide-y1": "0",
                            "--slide-y2": "0",
                            ...(window.innerWidth < 640
                                ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                : {})
                        } as React.CSSProperties}
                    >
                        I’m a passionate software engineer with a strong foundation in frontend development (React TypeScript) and backend systems (Java Spring Boot, SAP ABAP).
                        I'm currently pursuing my Bachelor's in Software Engineering at FPT University and have built hands-on experience through internships and impactful real-world projects.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                        whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-4 sm:mb-6`}
                        style={{
                            "--slide-x1": "-50",
                            "--slide-x2": "0",
                            "--slide-y1": "0",
                            "--slide-y2": "0",
                            ...(window.innerWidth < 640
                                ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                : {})
                        } as React.CSSProperties}
                    >
                        I’ve worked with FPT Telecom as a frontend developer intern, where I collaborated with backend teams, integrated RESTful APIs, and built responsive interfaces.
                        As a team lead on projects like OpalWed (a wedding planning platform) and F-Dental (a dental scheduling platform), I handled fullstack tasks — from UI/UX design to database integration and performance optimization.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                        whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-4 sm:mb-6`}
                        style={{
                            "--slide-x1": "-50",
                            "--slide-x2": "0",
                            "--slide-y1": "0",
                            "--slide-y2": "0",
                            ...(window.innerWidth < 640
                                ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                : {})
                        } as React.CSSProperties}
                    >
                        In addition to modern web tech, I also specialize in SAP ABAP, having developed enterprise features like dynamic ALV reports, SmartForms, and real-time budget alerts for asset management systems.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                        whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-4 sm:mb-6`}
                        style={{
                            "--slide-x1": "-50",
                            "--slide-x2": "0",
                            "--slide-y1": "0",
                            "--slide-y2": "0",
                            ...(window.innerWidth < 640
                                ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                : {})
                        } as React.CSSProperties}
                    >
                        I love turning ideas into intuitive digital experiences, learning new tech, and solving problems with clean, scalable code. My goal? Become a senior software engineer who builds meaningful products across modern and enterprise platforms.
                    </motion.p>
                </div>

                <div className="w-full lg:w-auto lg:min-w-[280px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                            whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                                "--slide-x1": "50",
                                "--slide-x2": "0",
                                "--slide-y1": "0",
                                "--slide-y2": "0",
                                ...(window.innerWidth < 640
                                    ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                    : {})
                            } as React.CSSProperties}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-lg`}>
                                Name
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-[17px]`}>
                                Cao Minh Nguyen
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                            whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                                "--slide-x1": "50",
                                "--slide-x2": "0",
                                "--slide-y1": "0",
                                "--slide-y2": "0",
                                ...(window.innerWidth < 640
                                    ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                    : {})
                            } as React.CSSProperties}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-lg`}>
                                Phone
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-[17px]`}>
                                +84 708 605 649
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                            whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                                "--slide-x1": "50",
                                "--slide-x2": "0",
                                "--slide-y1": "0",
                                "--slide-y2": "0",
                                ...(window.innerWidth < 640
                                    ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                    : {})
                            } as React.CSSProperties}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-lg`}>
                                Email
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-[17px]`}>
                                caominhnguyen03@gmail.com
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                            whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                                "--slide-x1": "50",
                                "--slide-x2": "0",
                                "--slide-y1": "0",
                                "--slide-y2": "0",
                                ...(window.innerWidth < 640
                                    ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                                    : {})
                            } as React.CSSProperties}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-lg`}>
                                Location
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-[17px]`}>
                                Ho Chi Minh City, Vietnam
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(About);