import { ProjectCard, type Project } from "../components/ProjectCard";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";

const projects: Project[] = [
    {
        title: "F-Dental - Scheduling Dental Clinic Platform",
        duration: "May 13 - July 20, 2024",
        teamSize: "5 members",
        role: "Frontend Developer",
        description: "A platform for patient to make appointment and clinic to register and manage customer appointments.",
        responsibilities: [
            "Designed and implemented intuitive UI/UX for web application",
            "Defined and structured core user flow and navigation across the platform",
            "Integrated frontend with backend APIs to fetch and display real-time data",
            "Optimized frontend performance for better user experience"
        ],
        technologies: ["HTML/CSS", "React TypeScript", "Java Spring Boot", "PostgreSQL", "JWT", "Render", "Cloudinary", "Gmail"],
        image: "/projects/f-dental.png",
        github: "",
        demo: "https://f-dental.vercel.app/"
    },
    {
        title: "OpalWed - Wedding Planning Platform",
        duration: "Oct 12 - Nov 24, 2024",
        teamSize: "3 members",
        role: "Fullstack Developer - Team Leader",
        description: "A website for wedding planning where customers select products/services for their event.",
        responsibilities: [
            "Led a team of 3 developers in full-stack development",
            "Designed and implemented intuitive UI/UX for web application",
            "Built comprehensive CRUD APIs for admin management",
            "Integrated payment systems and third-party vendor management",
            "Optimized both frontend and backend performance"
        ],
        technologies: ["HTML/CSS", "React TypeScript", "Java Spring Boot", "PostgreSQL", "JWT", "Cloudinary", "Gmail", "PayOS", "Docker"],
        image: "/projects/f-dental.png",
        github: "",
        demo: "https://f-dental.vercel.app/"
    },
    {
        title: "OpalWed - Wedding Planning Platform",
        duration: "Oct 12 - Nov 24, 2024",
        teamSize: "3 members",
        role: "Fullstack Developer - Team Leader",
        description: "A website for wedding planning where customers select products/services for their event.",
        responsibilities: [
            "Led a team of 3 developers in full-stack development",
            "Designed and implemented intuitive UI/UX for web application",
            "Built comprehensive CRUD APIs for admin management",
            "Integrated payment systems and third-party vendor management",
            "Optimized both frontend and backend performance"
        ],
        technologies: ["HTML/CSS", "React TypeScript", "Java Spring Boot", "PostgreSQL", "JWT", "Cloudinary", "Gmail", "PayOS", "Docker"],
        image: "/projects/f-dental.png",
        github: "",
        demo: "https://f-dental.vercel.app/"
    }
];

export default function Project({ isDark }: ThemeButtonProps) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    key={index}>
                    <ProjectCard project={project} isDark={isDark} />
                </motion.div>
            ))}
        </div>
    )
}