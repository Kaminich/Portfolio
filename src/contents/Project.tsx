import { ProjectCard } from "../components/ProjectCard";
import type { ThemeButtonProps } from "../components/ThemeButton";
import { motion } from "framer-motion";
import logo_OpalWed from "../assets/OpalWed/logo.png"
import about_OpalWed from "../assets/OpalWed/about.png";
import cart_OpalWed from "../assets/OpalWed/cart.png";
import concept_OpalWed from "../assets/OpalWed/concept.png";
import costume_OpalWed from "../assets/OpalWed/costume.png";
import dashboard_OpalWed from "../assets/OpalWed/dashboard.png";
import flower_OpalWed from "../assets/OpalWed/flower.png";
import home_OpalWed from "../assets/OpalWed/home.png";
import info_OpalWed from "../assets/OpalWed/info.png";
import invitation_OpalWed from "../assets/OpalWed/invitation.png";
import makeup_OpalWed from "../assets/OpalWed/makeup.png";
import modal_OpalWed from "../assets/OpalWed/modal.png";
import order_OpalWed from "../assets/OpalWed/order.png";
import order_sum_OpalWed from "../assets/OpalWed/order_sum.png";
import photo_OpalWed from "../assets/OpalWed/photo.png";
import revenue_OpalWed from "../assets/OpalWed/revenue.png";
import service_OpalWed from "../assets/OpalWed/service.png";

export interface ProjectType {
    title: string;
    duration: string;
    teamSize: string;
    role: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    image: string;
    images?: string[];
    github: string;
    demoVideo?: string;
}

const projects: ProjectType[] = [
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
        image: logo_OpalWed,
        images: [home_OpalWed, about_OpalWed, service_OpalWed, info_OpalWed, costume_OpalWed, modal_OpalWed, cart_OpalWed, makeup_OpalWed, concept_OpalWed, flower_OpalWed, photo_OpalWed, invitation_OpalWed, order_sum_OpalWed, dashboard_OpalWed, revenue_OpalWed, order_OpalWed],
        github: "",
        demoVideo: "https://www.youtube.com/embed/iXHQSND8Rgo"
    },
    {
        title: "Fi Arch - Assets Under Construction Management",
        duration: "Jan 13 - May 06, 2025",
        teamSize: "5 members",
        role: "ABAP Developer",
        description: "A project capstone about manage asset under construction.",
        responsibilities: [
            "Designed dynamic SQL queries to extract period-based cost data from SAP standard tables, populating customized ALV reports with drill-down capability for each period (1–13).",
            "Integrated ALV grid with functional buttons for email sending (as Excel attachments) and SmartForm printing, and implemented double-click events on asset code cells to navigate to detailed asset information.",
            "Developed custom Dynpro screens hosting ALV outputs, toolbar buttons, and implemented modal dialogs for displaying in-depth asset master details.",
            "Identified and implemented relevant BAdI and Implicit Enhancements (e.g., in MIGO and FB50) to trigger real-time budget threshold alerts (e.g., 90% asset completion or budget exceedance), with automated email notifications and visual warnings."
        ],
        technologies: ["ABAP", "ALV", "BAPI", "SmartForm", "BAdI", "Implicit Enhancements", "SAP GUI"],
        image: "/projects/f-dental.png",
        github: "",
        demoVideo: "https://www.youtube.com/embed/5JHkVtwhDTM"
    }
];

export default function Project({ isDark }: ThemeButtonProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            key={index}
                            className="w-full">
                            <ProjectCard project={project} isDark={isDark} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}