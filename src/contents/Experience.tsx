import { Braces, Captions, User2 } from "lucide-react";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

interface ExperienceCardProps {
    title: string;
    date: string;
    isDark: boolean;
    children: React.ReactNode;
    icon: React.ReactNode;
}

function ExperienceCard({ title, date, isDark, children, icon }: ExperienceCardProps) {
    return (
        <div className="relative flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pb-6 sm:pb-8 last:pb-0">
            {/* Date - Top on mobile, left on desktop */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-shrink-0 w-full sm:w-24 md:w-32 sm:text-right mb-2 sm:mb-0">
                <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {date}
                </span>
            </motion.div>

            {/* Timeline dot - Hidden on mobile, visible on desktop */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex-shrink-0 mt-1 hidden sm:block">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ml-[-8.5px] border-3 sm:border-4 ${isDark ? 'bg-blue-400 border-gray-900' : 'bg-blue-500 border-white'} shadow-lg`} />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 min-w-0 sm:ml-4 md:ml-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0">
                        {icon}
                    </div>
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h3>
                </div>

                <div className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

export default function Experience({ isDark }: ThemeButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="px-4 sm:px-6 md:px-8">
            <div className="relative max-w-6xl mx-auto">
                {/* Timeline line - Hidden on mobile, visible on desktop */}
                <div className={`absolute left-28 sm:left-32 md:left-36 top-0 w-0.5 h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} hidden sm:block`} />

                <div className="space-y-6 sm:space-y-8">
                    <ExperienceCard
                        title="Frontend Developer Intern"
                        date="Jan 2024 - May 2024"
                        isDark={isDark}
                        icon={<Braces className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <ul className={`space-y-2 sm:space-y-3 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            <li className="flex items-start">
                                <span
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 mr-2 sm:mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                <span className="text-sm sm:text-base leading-relaxed">
                                    Collaborated with backend developers to implement responsive web interfaces using ReactJS and TypeScript
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 mr-2 sm:mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                <span className="text-sm sm:text-base leading-relaxed">
                                    Optimized performance and accessibility across multiple browsers and devices
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 mr-2 sm:mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                <span className="text-sm sm:text-base leading-relaxed">
                                    Managed source code using GitHub and gained experience with RESTful APIs
                                </span>
                            </li>
                        </ul>
                    </ExperienceCard>

                    <ExperienceCard
                        title="Programming Tutor"
                        date="May 2024 - Present"
                        isDark={isDark}
                        icon={<Captions className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <p className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Provided one-on-one tutoring to 3 university students in programming, helping them grasp key concepts and improve their understanding of core programming concepts and successfully navigate coursework.
                        </p>
                    </ExperienceCard>

                    <ExperienceCard
                        title="Student Mentor"
                        date="Aug 2023 - Dec 2023"
                        isDark={isDark}
                        icon={<User2 className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <p className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Participated in a student-led mentorship program designed to support and guide freshmen through academic, social, and campus life challenges during their transition into university.
                        </p>
                    </ExperienceCard>
                </div>
            </div>
        </motion.div>
    );
}