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
        <div className="relative flex items-start gap-2 pb-8 last:pb-0">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }} className="flex-shrink-0 w-32 text-right">
                <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {date}
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex-shrink-0 mt-1">
                <div className={`w-5 h-5 rounded-full border-4 ${isDark ? 'bg-blue-400 border-gray-900' : 'bg-blue-500 border-white'} shadow-lg`} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }} className="flex-1 min-w-0 ml-8">
                <div className="flex items-center gap-2 mb-4">
                    {icon}
                    <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h3>
                </div>

                <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
            viewport={{ once: false, amount: 0.3 }}>
            <div className="relative">
                <div className={`absolute left-36 top-0 w-0.5 h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />

                <div className="space-y-0">
                    <ExperienceCard
                        title="Frontend Developer Intern"
                        date="Jan 2024 - May 2024"
                        isDark={isDark}
                        icon={<Braces className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <ul className={`space-y-1 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            <li className="flex items-start">
                                <span
                                    className={`w-2 h-2 rounded-full mt-2 mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                Collaborated with backend developers to implement responsive web interfaces using ReactJS and TypeScript
                            </li>
                            <li className="flex items-start">
                                <span
                                    className={`w-2 h-2 rounded-full mt-2 mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                Optimized performance and accessibility across multiple browsers and devices
                            </li>
                            <li className="flex items-start">
                                <span
                                    className={`w-2 h-2 rounded-full mt-2 mr-3 shrink-0 transition-all duration-300 ${isDark ? "bg-blue-400 hover:bg-blue-300" : "bg-blue-500 hover:bg-blue-600"}`}
                                />
                                Managed source code using GitHub and gained cielo experience with RESTful APIs
                            </li>
                        </ul>
                    </ExperienceCard>

                    <ExperienceCard
                        title="Programming Tutor"
                        date="May 2024 - Present"
                        isDark={isDark}
                        icon={<Captions className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <p className={`transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Provided one-on-one tutoring to 3 university students in programming, helping them grasp key concepts and improve their understanding of core programming concepts and successfully navigate coursework.
                        </p>
                    </ExperienceCard>

                    <ExperienceCard
                        title="Student Mentor"
                        date="Aug 2023 - Dec 2023"
                        isDark={isDark}
                        icon={<User2 className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />}
                    >
                        <p className={`transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Participated in a student-led mentorship program designed to support and guide freshmen through academic, social, and campus life challenges during their transition into university.
                        </p>
                    </ExperienceCard>
                </div>
            </div>
        </motion.div>
    );
}