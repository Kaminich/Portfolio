import { motion } from 'framer-motion'
import type React from 'react';

interface OrgNodeProps {
    children: React.ReactNode;
    className?: string;
    isRoot?: boolean;
    maxW?: string;
    isDark: boolean;
    slide: 'right-left' | 'down-up'
}

export const OrgNode: React.FC<OrgNodeProps> = ({ children, className = "", isRoot = false, maxW, isDark, slide }) => {
    return (
        <motion.div
            initial={slide == 'down-up' ? { opacity: 0, y: 10 } : { opacity: 0, x: 10 }}
            whileInView={slide == 'down-up' ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0 }}
            exit={{ opacity: 0 }}
            className={`
                relative px-6 py-3 rounded-xl border-2 transition-all duration-300 font-medium text-center min-w-30 
                shadow-lg hover:shadow-xl transform hover:scale-105 z-50 ${maxW ? `max-w-${maxW}` : ''} ${isRoot
                    ? isDark
                        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:border-white'
                        : 'bg-gradient-to-br from-white to-gray-50 text-gray-800 hover:border-black'
                    : isDark
                        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:border-white'
                        : 'bg-gradient-to-br from-white to-gray-50 text-gray-800 hover:border-black'
                } ${className}
            `}>
            {children}
        </motion.div>
    );
}