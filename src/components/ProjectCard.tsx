import { Github, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ProjectType } from "../contents/Project";
import { ProjectModal } from "./ProjectModal";
import { motion } from "framer-motion"

interface ProjectCardProps {
    project: ProjectType;
    isDark: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleTechs, setVisibleTechs] = useState<string[]>([]);
    const [hasOverflow, setHasOverflow] = useState<boolean>(false);

    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => setIsModalOpen(false);

    const calculateVisibleTechs = (): void => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const containerWidth = container.offsetWidth;

        // Create temporary elements to measure
        const tempContainer = document.createElement('div');
        tempContainer.style.cssText = `
            position: absolute;
            visibility: hidden;
            width: ${containerWidth}px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;`;

        document.body.appendChild(tempContainer);

        const tempElements: HTMLSpanElement[] = [];
        let currentLineHeight: number = 0;
        let lineCount: number = 0;
        let lastVisibleIndex: number = -1;

        for (let i = 0; i < project.technologies.length; i++) {
            const tech = project.technologies[i];
            const span = document.createElement('span');
            span.textContent = tech;
            span.className = `px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border backdrop-blur-sm transition-colors duration-200 ${isDark
                ? 'bg-gray-800/60 text-gray-300 border-gray-600/50'
                : 'bg-gray-100/80 text-gray-700 border-gray-300/50'
                }`;

            tempContainer.appendChild(span);
            tempElements.push(span);

            // Check if we've moved to a new line
            if (span.offsetTop > currentLineHeight) {
                lineCount++;
                currentLineHeight = span.offsetTop;

                // If we're on the third line, stop here
                if (lineCount >= 2) {
                    break;
                }
            }

            lastVisibleIndex = i;
        }

        document.body.removeChild(tempContainer);

        // Set the visible technologies
        const visible = project.technologies.slice(0, lastVisibleIndex + 1);
        setVisibleTechs(visible);
        setHasOverflow(lastVisibleIndex < project.technologies.length - 1);
    };

    useEffect(() => {
        calculateVisibleTechs();

        const handleResize = () => {
            calculateVisibleTechs();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [project.technologies]);

    return (
        <>
            <div
                className={`h-full flex flex-col justify-between rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border transition-all duration-300 hover:transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
            >
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative sm:h-32 md:h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/30 to-transparent' : 'from-white/10 to-transparent'}`}></div>
                </motion.div>

                <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        ref={containerRef}
                        className="flex flex-wrap gap-1.5 sm:gap-2 mb-4"
                    >
                        {visibleTechs.map((tech, index) => (
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
                        {hasOverflow && (
                            <span
                                className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border backdrop-blur-sm cursor-pointer transition-colors duration-200 ${isDark
                                    ? 'bg-blue-800/60 text-blue-300 border-blue-600/50 hover:bg-blue-700/60'
                                    : 'bg-blue-100/80 text-blue-700 border-blue-300/50 hover:bg-blue-200/80'
                                    }`}
                                title={`${project.technologies.length - visibleTechs.length} more technologies`}
                            >
                                +{project.technologies.length - visibleTechs.length} more
                            </span>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
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
                    </motion.div>
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