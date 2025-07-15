import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

interface TypingAnimationProps {
    text: string;
    speed?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { isDark } = useTheme();

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed]);

    return (
        <span className="text-type">
            {displayText}
            {currentIndex < text.length && <span className={`${isDark ? 'text-white' : 'text-black'} animate-pulse`}>|</span>}
        </span>
    );
};