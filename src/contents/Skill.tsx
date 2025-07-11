import type { ThemeButtonProps } from "../components/ThemeButton"
import { motion } from "framer-motion"
import SkillsOrgChart from "../components/SkillOrgChart.js"

const favouriteTools = [
    { name: "Visual Studio Code", image: "/vscode.png" },
    { name: "IntelliJ Ultimate", image: "/IntelliJ.png" },
    { name: "Postgre SQL", image: "/postgre.png" },
    { name: "Figma", image: "/figma.png" },
    { name: "Chat GPT", image: "/chatgpt.png" },
    { name: "Git", image: "/git.png" },
    { name: "Claude AI", image: "/claude.png" },
    { name: "GitHub", image: "/github.png" },
    { name: "Grok", image: "/grok.png" },
    { name: "Source Tree", image: "/srctree.png" },
    { name: "Postman", image: "/postman.svg" },
    { name: "SAP Logon", image: "/sap.png" },
    { name: "SQL Server Management Studio", image: "/ssms.png" },
    { name: "Google Docs", image: "/doc.png" },
]

export default function Skill({ isDark }: ThemeButtonProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className={`transition-colors duration-300 flex flex-col align-start gap-5 sm:gap-8`}>
                <SkillsOrgChart isDark={isDark} />
                <div style={{ flex: 1 }}>
                    <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                        Favourite Tools
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                        {favouriteTools.map((tool) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                                key={tool.name}
                            >
                                <div
                                    className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer ${isDark
                                        ? "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                                        : "bg-gray-50 border border-gray-200 hover:bg-white"
                                        }`}
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 sm:mb-3 flex items-center justify-center">
                                        <img
                                            src={tool.image || "/placeholder.svg"}
                                            alt={tool.name}
                                            className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-110"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none"
                                                const next = e.currentTarget.nextElementSibling as HTMLElement | null
                                                if (next) {
                                                    next.style.display = "block"
                                                }
                                            }}
                                        />
                                        <div
                                            className={`w-full h-full rounded-lg flex items-center justify-center text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hidden`}
                                        >
                                            {tool.name.charAt(0)}
                                        </div>
                                    </div>
                                    <span
                                        className={`text-xs sm:text-sm font-medium text-center line-clamp-1 ${isDark ? "text-gray-200" : "text-gray-700"}`}
                                    >
                                        {tool.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
