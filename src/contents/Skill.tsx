import type { ThemeButtonProps } from "../components/ThemeButton"
import { motion } from "framer-motion"
import SkillsOrgChart, { skills } from "../components/SkillOrgChart.js"

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
            <div className={`transition-colors duration-800 flex flex-col align-start gap-5 sm:gap-8`}>
                <div className="max-sm:hidden md:block">
                    <SkillsOrgChart isDark={isDark} />
                </div>
                <div className={`max-sm:block md:hidden flex flex-col gap-4 transition-colors duration-800 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <div className={`rounded-lg shadow-sm border transition-colors duration-800 ${isDark ? 'bg-gray-800 border-gray-700 shadow-gray-700/20' : 'bg-white border-gray-200'
                        }`}>
                        <div className={`border-b-2 py-3 px-4 ${isDark ? 'border-blue-800 bg-blue-900/30' : 'border-blue-100 bg-blue-50'
                            }`}>
                            <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Technical Skills</h2>
                        </div>

                        {/* Programming Languages */}
                        <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical.languages.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 ${isDark
                                            ? 'bg-blue-800/50 text-blue-200 border-blue-700'
                                            : 'bg-blue-100 text-blue-800 border-blue-200'
                                            }`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Frameworks */}
                        <div className="p-4">
                            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical.frameworks.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 ${isDark
                                            ? 'bg-green-800/50 text-green-200 border-green-700'
                                            : 'bg-green-100 text-green-800 border-green-200'
                                            }`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills Section */}
                    <div className={`rounded-lg shadow-sm border transition-colors duration-800 mt-4 ${isDark ? 'bg-gray-800 border-gray-700 shadow-gray-700/20' : 'bg-white border-gray-200'
                        }`}>
                        <div className={`border-b-2 py-3 px-4 ${isDark ? 'border-purple-800 bg-purple-900/30' : 'border-purple-100 bg-purple-50'
                            }`}>
                            <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Soft Skills</h2>
                        </div>

                        <div className="p-4">
                            <div className="flex flex-wrap gap-2">
                                {skills.soft.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-200 ${isDark
                                            ? 'bg-purple-800/50 text-purple-200 border-purple-700'
                                            : 'bg-purple-100 text-purple-800 border-purple-200'
                                            }`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                                viewport={{ once: false, amount: 0 }}
                                exit={{ opacity: 0 }}
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
