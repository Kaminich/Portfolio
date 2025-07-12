import { Github, AlertCircle } from "lucide-react";
import { useState } from "react";
import type { ProjectType } from "../contents/Project";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
    project: ProjectType;
    isDark: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => setIsModalOpen(false);

    return (
        <>
            <div
                className={`h-full flex flex-col justify-between rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border transition-all duration-300 hover:transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
            >
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/30 to-transparent' : 'from-white/10 to-transparent'}`}></div>
                </div>

                <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>

                    <p className={`mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border backdrop-blur-sm transition-colors duration-200 ${isDark
                                    ? 'bg-gray-800/60 text-gray-300 border-gray-600/50 hover:bg-gray-700/60'
                                    : 'bg-gray-100/80 text-gray-700 border-gray-300/50 hover:bg-gray-200/80'
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`cursor-pointer flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-300 border text-sm sm:text-base ${isDark
                                ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-200 border-gray-600/50'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                                }`}
                        >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                        <button
                            type="button"
                            onClick={openModal}
                            className="cursor-pointer flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Detail
                        </button>
                    </div>
                </div>
            </div>

            <ProjectModal
                project={project}
                isDark={isDark}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};