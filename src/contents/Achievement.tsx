import { Trophy } from "lucide-react";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

const achievements: string[] = [
    "FPT University Honorable Student - Spring 2025",
    "FPT University Honorable Student - Summer & Fall 2024",
    "IBSTPI Certificate 2023"
];

export default function Achievement({ isDark }: ThemeButtonProps) {
    return (
        <>
            <div
                className={`rounded-2xl shadow-xl p-8 border transition-colors duration-300
                    ${isDark
                        ? "bg-gray-900 border-gray-700"
                        : "bg-white border-gray-100"
                    }`
                }
            >
                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                            key={index}>
                            <div
                                className={`flex items-center p-4 rounded-lg border transition-colors duration-300
                                    ${isDark
                                        ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
                                        : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100"
                                    }`
                                }
                            >
                                <Trophy className={`w-6 h-6 mr-4 shrink-0 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
                                <span className={`font-medium transition-colors duration-300 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                                    {achievement}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}