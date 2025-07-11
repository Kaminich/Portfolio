import { useEffect, useState } from "react";

interface TypingAnimationProps {
    text: string;
    speed?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

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
        <span>
            {displayText}
            {currentIndex < text.length && <span className="animate-pulse">|</span>}
        </span>
    );
};