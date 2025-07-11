import { Moon, Sun } from "lucide-react";
import React from "react";

export interface ThemeButtonProps {
    isDark: boolean;
    onToggleDark?: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ isDark, onToggleDark }) => {

    return (
        <button
            onClick={onToggleDark}
            className={`fixed top-2 right-4 md:right-2 p-2 rounded-full transition-all duration-800 cursor-pointer z-50 ${isDark
                ? 'bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full p-3 shadow-lg text-white hover:bg-white/10'
                : 'bg-yellow-500 backdrop-blur-md border border-white/20 rounded-full p-3 shadow-lg text-white hover:bg-yellow-500/80'
                }`}
            aria-label="Toggle dark mode"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={`absolute inset-0 transition-all duration-800 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                        }`}
                    size={20}
                />
                <Moon
                    className={`absolute inset-0 transition-all duration-800 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                        }`}
                    size={20}
                />
            </div>
        </button>
    );
};

export default ThemeButton;