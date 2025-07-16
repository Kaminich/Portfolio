import { useEffect, useState } from "react";
import Portfolio from "./Portfolio.tsx";
import { useTheme } from "./hooks/useTheme.tsx";

export default function LoadingScreen() {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [currentText, setCurrentText] = useState<number>(0);
    const { isDark } = useTheme();

    const loadingTexts = [
        "Loading portfolio...",
        "Fetching projects...",
        "Preparing showcase...",
        "Almost there...",
        "Welcome"
    ];

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setCurrentText(4);
                    setTimeout(() => setIsReady(true), 700);
                    return 100;
                }

                const newProgress = prev + Math.random() * 6;

                if (newProgress < 35) {
                    setCurrentText(0);
                } else if (newProgress < 55) {
                    setCurrentText(1);
                } else if (newProgress < 85) {
                    setCurrentText(2);
                } else if (newProgress < 100) {
                    setCurrentText(3);
                }

                return newProgress;
            });
        }, 100);

        return () => {
            clearInterval(progressInterval);
        };
    }, []);

    return isReady ? <Portfolio /> : (
        <div className={`min-h-screen bg-gradient-to-br ${isDark ? 'from-gray-900 via-black to-gray-900' : 'bg-white'} flex items-center justify-center overflow-hidden relative transition-opacity duration-1000 ${progress >= 100 ? 'animate-pulse' : ''}`}>
            {/* Code-like background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-green-400 font-mono text-xs">
                    {'{ developer: "creative", skills: ["react", "typescript", "design"] }'}
                </div>
                <div className="absolute top-32 right-16 text-blue-400 font-mono text-xs">
                    {'const portfolio = () => { return <Amazing /> }'}
                </div>
                <div className="absolute bottom-32 left-20 text-purple-400 font-mono text-xs">
                    {'// Building the future, one line at a time'}
                </div>
                <div className="absolute bottom-16 right-10 text-cyan-400 font-mono text-xs">
                    {'<Portfolio loading={true} />'}
                </div>
            </div>

            {/* Animated grid */}
            <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-white'} opacity-20`}>
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 11.43s linear infinite'
                }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-8 max-w-lg w-full">
                {/* Logo/Initial area */}
                <div className="mb-16">
                    <div className="relative">
                        {/* Animated logo container */}
                        <div className="w-32 h-32 mx-auto mb-8 relative">
                            {/* Outer rotating ring */}
                            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
                            {/* Inner counter-rotating ring */}
                            <div className="absolute inset-3 border-3 border-transparent border-b-cyan-400 border-l-cyan-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.14s' }}></div>
                            {/* Center content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-500 ${progress >= 100 ? 'animate-bounce' : 'animate-pulse'}`}></div>
                                </div>
                            </div>
                        </div>

                        {/* Name/Brand */}
                        <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
                            <span className={`bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent transition-all duration-500 ${progress >= 100 ? 'animate-pulse' : ''}`}>
                                Portfolio
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Loading section */}
                <div className="space-y-8">
                    {/* Current status */}
                    <div className="h-10 flex items-center justify-center">
                        <p className={`${isDark ? 'text-gray-200' : 'text-gray-600'} text-xl font-medium transition-all duration-700 transform ${currentText === 4 ? 'text-cyan-400 text-2xl' : ''}`}>
                            {loadingTexts[currentText]}
                        </p>
                    </div>

                    {/* Progress bar with glow */}
                    <div className="relative">
                        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
                            <div
                                className={`h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 rounded-full transition-all duration-500 ease-out relative shadow-lg ${progress >= 100 ? 'animate-pulse' : ''}`}
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            >
                                <div className="absolute inset-0 bg-white opacity-40 animate-pulse"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Progress stats */}
                        <div className="mt-4 flex justify-between items-center">
                            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm font-mono`}>
                                {progress >= 100 ? 'Ready!' : 'Loading assets...'}
                            </span>
                            <span className={`text-blue-400 text-sm font-mono font-bold ${progress >= 100 ? 'text-cyan-400' : ''}`}>
                                {Math.round(Math.min(progress, 100))}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer hint */}
                <div className="mt-16 opacity-70">
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        {progress >= 100 ? 'Launching portfolio...' : 'Preparing an amazing experience for you...'}
                    </p>
                </div>
            </div>

            {/* Ambient lighting effects */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }}></div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
        </div>
    );
}