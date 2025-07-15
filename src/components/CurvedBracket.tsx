import React from "react";
import { motion } from 'framer-motion'

interface CurvedBracketProps {
    height: number;
    isDark: boolean;
    className?: string
    style: React.CSSProperties;
    widthUp: number;
    widthDown: number
}

const CurvedBracket: React.FC<CurvedBracketProps> = ({ height, isDark, className, style, widthUp, widthDown }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0 }}
            exit={{ opacity: 0 }}
            className={className}
            style={style}>
            <svg
                width="30"
                height={height}
                viewBox={`0 0 50 ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={`M${widthUp},0 
                      C0,0 0,0 0,25 
                      L0,${height - 25} 
                      C0,${height} 0,${height} ${widthDown},${height}`}
                    stroke={isDark ? "#FFFFFF" : "#000000"}
                    strokeWidth="3"
                    fill="none"
                />
            </svg>
        </motion.div>
    );
};

export default CurvedBracket;
