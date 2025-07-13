import { FileText, Play, X, Calendar, Users, User, CheckCircle, ExternalLink, Github, Image } from "lucide-react";
import { useState, useEffect } from "react";
import type { ProjectType } from "../contents/Project";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Tab {
    id: string;
    label: string;
    icon: React.ReactNode;
}

type TabId = 'overview' | 'pictures' | 'demo';

interface ProjectModalProps {
    project: ProjectType;
    isDark: boolean;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isDark, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<TabId>('overview');
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [shouldRender, setShouldRender] = useState<boolean>(false);

    const tabs: Tab[] = [
        { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
        { id: 'pictures', label: 'Pictures', icon: <Image className="w-4 h-4" /> },
        { id: 'demo', label: 'Demo Video', icon: <Play className="w-4 h-4" /> }
    ];

    const handleEscapse = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            document.addEventListener('keydown', handleEscapse);

            setTimeout(() => {
                setIsAnimating(true);
            }, 10);

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);

                document.removeEventListener('keydown', handleEscapse);
            };
        } else {
            setIsAnimating(false);

            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => {
            onClose();
        }, 10);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!shouldRender) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleBackdropClick}
        >
            <div
                className={`w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl transition-all duration-300 ease-out transform overflow-hidden ${isAnimating
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                    } ${isDark ? 'bg-gray-900' : 'bg-white'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-lg transition-colors ${isDark
                            ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className={`flex border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    {tabs.map((tab: Tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabId)}
                            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === tab.id
                                ? `border-b-2 border-blue-600 ${isDark ? 'text-blue-400 bg-gray-800/50' : 'text-blue-600 bg-blue-50/50'}`
                                : `${isDark ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'}`
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                    {activeTab === 'overview' && (
                        <div>
                            <div className="relative h-64 sm:h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/30 to-transparent' : 'from-white/10 to-transparent'
                                    }`}></div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Project Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Calendar className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                                            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                Duration
                                            </span>
                                        </div>
                                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {project.duration}
                                        </p>
                                    </div>

                                    <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Users className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                Team Size
                                            </span>
                                        </div>
                                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {project.teamSize}
                                        </p>
                                    </div>

                                    <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <User className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                                            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                Role
                                            </span>
                                        </div>
                                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {project.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className={`tex</li>t-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Description
                                    </h3>
                                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                <div>
                                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Key Responsibilities
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.responsibilities.map((responsibility, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {responsibility}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1.5 text-sm rounded-full border backdrop-blur-sm transition-colors duration-200 ${isDark
                                                    ? 'bg-gray-800/60 text-gray-300 border-gray-600/50'
                                                    : 'bg-gray-100/80 text-gray-700 border-gray-300/50'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'pictures' && (
                        <div className="p-6">
                            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Project Gallery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Main Project Image */}
                                <div className="md:col-span-2">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} - Main`}
                                        className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                                    />
                                </div>

                                <PhotoProvider>
                                    {project.images && project.images.length > 0 ? (
                                        project.images.map((img, index) => (
                                            <PhotoView key={index} src={img}>
                                                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                                    <img
                                                        src={img}
                                                        alt={`${project.title} - ${index + 1}`}
                                                        className="w-full h-48 object-cover hover:scale-10</div>5 transition-transform duration-300 cursor-pointer"
                                                    />
                                                </div>
                                            </PhotoView>
                                        ))
                                    ) : (
                                        <div className="md:col-span-2 text-center py-12">
                                            <Image className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                                            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                No additional images available
                                            </p>
                                            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                                Only the main project image is available for viewing
                                            </p>
                                        </div>
                                    )}
                                </PhotoProvider>
                            </div>
                        </div>
                    )}

                    {activeTab === 'demo' && (
                        <div className="p-6 flex flex-col items-center">
                            {project.demoVideo ? (
                                <div className="aspect-video rounded-lg overflow-hidden shadow-lg w-full max-w-4xl xl:h-[380px]">
                                    <iframe
                                        src={project.demoVideo}
                                        title={`${project.title} Demo`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Play className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                                    <p className={`text-lg mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        No demo video available
                                    </p>
                                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        Check out the live demo instead
                                    </p>
                                    <a
                                        href={'project.demo'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Open Live Demo
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className={`flex items-start justify-end space-x-3 py-3 pr-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'
                    }`}>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 border cursor-pointer ${isDark
                            ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-200 border-gray-600/50'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                            }`}
                    >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};