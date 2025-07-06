import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

export default function About({ isDark }: ThemeButtonProps) {
    return (
        <>
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex justify-between items-center">
                    <div className={`relative rounded-3xl p-8 sm:p-10 text-center min-w-[280px] sm:min-w-[320px] transition-all duration-300
                        ${isDark
                            ? 'bg-gray-800 border border-gray-700 shadow-2xl'
                            : 'bg-white border border-gray-200 shadow-xl'
                        }
                    `}>
                        <div className={`text-6xl sm:text-7xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-500'
                            }`}>
                            5
                        </div>
                        <div className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            Stakeholders Aligned
                        </div>
                    </div>

                    <div className={`relative rounded-3xl p-8 sm:p-10 text-center min-w-[280px] sm:min-w-[320px] transition-all duration-300
                        ${isDark
                            ? 'bg-gray-800 border border-gray-700 shadow-2xl'
                            : 'bg-white border border-gray-200 shadow-xl'
                        }
                `}>
                        <div className={`text-6xl sm:text-7xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-500'
                            }`}>
                            1
                        </div>
                        <div className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            Years Of Experience
                        </div>
                    </div>

                    <div className={`relative rounded-3xl p-8 sm:p-10 text-center min-w-[280px] sm:min-w-[320px] transition-all duration-300
                        ${isDark
                            ? 'bg-gray-800 border border-gray-700 shadow-2xl'
                            : 'bg-white border border-gray-200 shadow-xl'
                        }
                    `}>
                        <div className={`text-6xl sm:text-7xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-500'
                            }`}>
                            8+
                        </div>
                        <div className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            Projects Done
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex items-start justify-between">
                <div className={`max-w-3xl font-semibold text-2xl ${isDark ? "text-white" : "text-gray-900"}`}>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-6`}>
                        I am a fresher in React and Java, with a specialization in SAP ABAP. I am a highly motivated and curious individual who wants to learn and grow. I take my work seriously, always striving to give my best in every task, and I embrace challenges as opportunities to improve.

                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed`}>
                        My long-term objective is to become a senior software engineer who can contribute to impactful projects across different technologies.
                    </motion.p>
                </div>

                <div>
                    <motion.label
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block`}>
                        Name
                    </motion.label>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} mb-6`}>
                        Cao Minh Nguyen
                    </motion.p>
                    <motion.label
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block`}>
                        Phone
                    </motion.label>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} mb-6`}>
                        +84 708 605 649
                    </motion.p>
                    <motion.label
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block`}>
                        Email
                    </motion.label>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} mb-6`}>
                        caominhnguyen03@gmail.com
                    </motion.p>
                    <motion.label
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block`}>
                        Location
                    </motion.label>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} mb-6`}>
                        Ho Chi Minh City, Vietnam
                    </motion.p>
                </div>
            </div>
        </>
    );
}