import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

export default function About({ isDark }: ThemeButtonProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    <div
                        className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-white border border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${isDark ? "text-purple-400" : "text-purple-500"
                                }`}
                        >
                            3+
                        </div>
                        <div
                            className={`text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Years of Coding
                        </div>
                    </div>

                    <div
                        className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-white border border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${isDark ? "text-purple-400" : "text-purple-500"
                                }`}
                        >
                            1
                        </div>
                        <div
                            className={`text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Years Of Experience
                        </div>
                    </div>

                    <div
                        className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300
                        ${isDark
                                ? "bg-gray-800 border border-gray-700 shadow-2xl"
                                : "bg-white border border-gray-200 shadow-xl"
                            }
                    `}
                    >
                        <div
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${isDark ? "text-purple-400" : "text-purple-500"
                                }`}
                        >
                            8+
                        </div>
                        <div
                            className={`text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
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
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed mb-4 sm:mb-6`}
                    >
                        I am a fresher in React and Java, with a specialization in SAP ABAP. I am a highly motivated and curious
                        individual who wants to learn and grow. I take my work seriously, always striving to give my best in every
                        task, and I embrace challenges as opportunities to improve.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`${isDark ? "text-white" : "text-gray-800"} leading-relaxed`}
                    >
                        My long-term objective is to become a senior software engineer who can contribute to impactful projects
                        across different technologies.
                    </motion.p>
                </div>

                <div className="w-full lg:w-auto lg:min-w-[280px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-base`}>
                                Name
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-base`}>
                                Cao Minh Nguyen
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-base`}>
                                Phone
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-base`}>
                                +84 708 605 649
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-base`}>
                                Email
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-base`}>
                                caominhnguyen03@gmail.com
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <label className={`${isDark ? "text-white" : "text-gray-900"} font-bold mb-2 block text-sm sm:text-base`}>
                                Location
                            </label>
                            <p className={`${isDark ? "text-white" : "text-gray-800"} mb-4 sm:mb-6 text-sm sm:text-base`}>
                                Ho Chi Minh City, Vietnam
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}