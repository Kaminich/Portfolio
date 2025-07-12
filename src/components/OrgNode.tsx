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
                shadow-lg hover:shadow-xl transform hover:scale-105 ${maxW ? `max-w-${maxW}` : ''} ${isRoot
                    ? isDark
                        ? 'border-purple-500 text-white bg-gradient-to-r from-purple-600 to-blue-600'
                        : 'border-purple-400 text-white bg-gradient-to-r from-purple-500 to-blue-500'
                    : isDark
                        ? 'border-gray-600 text-white bg-gray-800 hover:border-gray-700'
                        : 'border-gray-300 text-gray-800 bg-white hover:border-gray-400'
                } ${className}
            `}>
            {children}
        </motion.div>
    );
}