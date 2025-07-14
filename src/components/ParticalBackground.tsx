export const ParticlesBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => {
                const duration = 1 + Math.random() * 2; // Random duration between 1-3s
                const delay = Math.random() * 5; // Random delay up to 5s

                return (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `twinkle ${duration}s infinite ${delay}s`,
                            opacity: Math.random() * 0.5 + 0.2, // Initial random opacity
                        }}
                    />
                );
            })}

            <style>{`
                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.2;
                        filter: brightness(1);
                    }
                    25% {
                        opacity: 0.8;
                        filter: brightness(1.8);
                    }
                    50% {
                        opacity: 0.3;
                        filter: brightness(0.8);
                    }
                    75% {
                        opacity: 1;
                        filter: brightness(2.2);
                    }
                }
            `}</style>
        </div>
    );
};