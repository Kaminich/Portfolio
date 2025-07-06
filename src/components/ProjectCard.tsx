import { AlertCircle, Github } from "lucide-react";

export interface Project {
    title: string;
    duration: string;
    teamSize: string;
    role: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    image: string;
    github: string;
    demo: string;
}

interface ProjectCardProps {
    project: Project;
    isDark: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark }) => {

    return (
        <div className={`rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${isDark
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300'
            }`}>
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/60 to-transparent' : 'from-white/60 to-transparent'
                    }`}></div>
            </div>

            <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {project.title}
                </h3>

                <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-sm rounded-full border backdrop-blur-sm ${isDark
                                ? 'bg-gray-800/60 text-gray-300 border-gray-600/50'
                                : 'bg-gray-100/80 text-gray-700 border-gray-300/50'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <a
                        href={project.github}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${isDark
                            ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-200 border-gray-600/50'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                            }`}
                    >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                    </a>
                    <a
                        href={project.demo}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Detail
                    </a>
                </div>
            </div>
        </div>
    );
};