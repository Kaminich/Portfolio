import { ExperienceCard } from "../components/ExperienceCard";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

export default function Experience({ isDark }: ThemeButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="px-4 sm:px-6 md:px-8">
            <div className="relative max-w-6xl mx-auto">
                <div className={`absolute left-28 sm:left-32 md:left-36 top-0 w-0.5 h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} hidden sm:block`} />

                <div className="space-y-6 sm:space-y-8">
                    <ExperienceCard
                        title="Frontend Developer Intern"
                        date="Jan 2024 - May 2024"
                        isDark={isDark}
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
                    >
                        <p className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Provided one-on-one tutoring to 3 university students in programming, helping them grasp key concepts and improve their understanding of core programming concepts and successfully navigate coursework.
                        </p>
                    </ExperienceCard>

                    <ExperienceCard
                        title="Student Mentor"
                        date="Aug 2023 - Dec 2023"
                        isDark={isDark}
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