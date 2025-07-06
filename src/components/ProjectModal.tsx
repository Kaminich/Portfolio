import React from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageUrl?: string;
    techStack?: string[];
    projectLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    imageUrl,
    techStack,
    projectLink,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded mb-4"
                    />
                )}
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                {techStack && techStack.length > 0 && (
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-1">Tech Stack:</h3>
                        <ul className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <li
                                    key={tech}
                                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;