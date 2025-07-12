import React from 'react';
import type { ThemeButtonProps } from './ThemeButton';
import CurvedBracket from './CurvedBracket';
import { OrgNode } from './OrgNode';
import { motion } from 'framer-motion'

interface Skill {
    name: string;
    wUp: number;
    wDown: number;
    height: number;
    style: React.CSSProperties;
}

interface SkillsData {
    technical: {
        languages: Skill[];
        frameworks: Skill[];
    };
    soft: Skill[];
}

export const skills: SkillsData = {
    technical: {
        languages: [
            { name: "HTML/CSS", wUp: 32, wDown: 32, height: 112, style: {} },
            { name: "JavaScript", wUp: 32, wDown: 32, height: 112, style: {} },
            { name: "Java", wUp: 32, wDown: 32, height: 112, style: {} },
            { name: "SQL", wUp: 32, wDown: 32, height: 112, style: {} },
            { name: "SAP ABAP", wUp: 32, wDown: 32, height: 112, style: {} }
        ],
        frameworks: [
            { name: "React TypeScript", wUp: 18, wDown: 40, height: 112, style: {} },
            { name: "Spring Boot", wUp: 18, wDown: 40, height: 112, style: {} }
        ]
    },
    soft: [
        { name: "Time Management", wUp: 24, wDown: 100, height: 112, style: {} },
        { name: "Self Learning", wUp: 100, wDown: 50, height: 112, style: { marginRight: 6 } },
        { name: "Team Building", wUp: 100, wDown: 36, height: 112, style: {} },
        { name: "Logical Thinking", wUp: 36, wDown: 38, height: 112, style: {} },
        { name: "Problem Solving", wUp: 40, wDown: 36, height: 112, style: {} }
    ]
};

const SkillsOrgChart: React.FC<ThemeButtonProps> = ({ isDark }) => {

    return (
        <div className={`transition-colors duration-300 ${isDark ? 'border-gray-900' : 'border-gray-50'
            }`}>

            <div className="flex justify-center items-center p-8">
                <div className="orgchart-container">

                    <div className="flex justify-center">
                        <OrgNode isDark={isDark} isRoot={true} slide='down-up'>
                            <span className="text-lg font-bold">Skill</span>
                        </OrgNode>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center">
                        <div className={`h-12 border-1  ${isDark ? 'border-gray-600' : 'border-gray-400'}`}></div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center">
                            <div className={`h-2 w-89.5 lg:w-130 xl:w-177 ml-29 xl:ml-29 border-2 border-b-0 rounded-t-full ${isDark ? 'border-gray-600' : 'border-gray-400'}`}></div>
                        </motion.div>

                        <div className="flex justify-center gap-10 lg:gap-50.5 xl:gap-0 xl:justify-between items-start xl:w-5xl max-w-5xl mx-auto">

                            <div className="flex flex-col items-center">
                                <div className={`h-8 border-1 ${isDark ? 'border-gray-600' : 'border-gray-400'}`}></div>

                                <OrgNode isDark={isDark} slide='down-up'>
                                    <span className="text-base font-semibold">Technical Skill</span>
                                </OrgNode>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: false, amount: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`h-6 border-1 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />

                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: false, amount: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex justify-center">
                                        <div className={`h-2 w-67 mr-2.5 border-2 border-b-0 rounded-t-full ${isDark ? 'border-gray-600' : 'border-gray-400'}`}></div>
                                    </motion.div>

                                    <div className="flex justify-between items-start sm:gap-10 md:gap-25">

                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                                viewport={{ once: false, amount: 0 }}
                                                exit={{ opacity: 0 }}
                                                className={`h-8 border-1 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />

                                            <OrgNode isDark={isDark} slide='down-up'>
                                                <span className="text-sm font-medium">Language</span>
                                            </OrgNode>

                                            <div className="flex flex-col items-center">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8 }}
                                                    viewport={{ once: false, amount: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className={`h-6 border-1 last:mb-0 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />
                                                <div className='relative w-39 flex flex-col items-center'>
                                                    {skills.technical.languages.map((lang, index) => (
                                                        <div key={index} className="mb-4 last:mb-0">
                                                            <OrgNode isDark={isDark} maxW='30' slide='right-left'>
                                                                <span className="text-sm">{lang.name}</span>
                                                            </OrgNode>
                                                            {index < skills.technical.languages.length - 1 && (
                                                                <CurvedBracket height={lang.height} isDark={isDark} className={`absolute left-0`} style={{ top: `calc(var(--spacing) * ${index * 17})` }} widthUp={32} widthDown={32} />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                                viewport={{ once: false, amount: 0 }}
                                                exit={{ opacity: 0 }}
                                                className={`h-8 border-1 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />

                                            <OrgNode isDark={isDark} slide='down-up'>
                                                <span className="text-sm font-medium">Framework</span>
                                            </OrgNode>

                                            <div className="flex flex-col items-center">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8 }}
                                                    viewport={{ once: false, amount: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className={`h-6 border-1 last:mb-0 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />
                                                <div className='relative w-44 flex flex-col items-center'>
                                                    {skills.technical.frameworks.map((framework, index) => (
                                                        <div key={index} className="mb-4 last:mb-0">
                                                            <OrgNode isDark={isDark} slide='right-left'>
                                                                <span className="text-sm">{framework.name}</span>
                                                            </OrgNode>
                                                            {index < skills.technical.frameworks.length - 1 && (
                                                                <CurvedBracket height={framework.height} isDark={isDark} className='absolute left-0' style={{ top: `calc(var(--spacing) * ${index * 17})` }} widthUp={framework.wUp} widthDown={framework.wDown} />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: false, amount: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`h-8 border-1 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />

                                <OrgNode isDark={isDark} slide='down-up'>
                                    <span className="text-base font-semibold">Soft Skill</span>
                                </OrgNode>

                                <div className="flex flex-col items-center">
                                    <div className={`h-6 border-1 last:mb-0 ${isDark ? 'border-gray-600' : 'border-gray-400'}`} />
                                    <div className='relative w-50 flex flex-col items-center'>
                                        {skills.soft.map((skill, index) => (
                                            <div key={index} className="mb-4 last:mb-0" style={skill.style}>
                                                <OrgNode isDark={isDark} slide='right-left'>
                                                    <span className="text-sm">{skill.name}</span>
                                                </OrgNode>
                                                {index < skills.soft.length - 1 && (
                                                    <CurvedBracket height={skill.height} isDark={isDark} className='absolute left-0' style={{ top: `calc(var(--spacing) * ${index * 17})` }} widthUp={skill.wUp} widthDown={skill.wDown} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsOrgChart;