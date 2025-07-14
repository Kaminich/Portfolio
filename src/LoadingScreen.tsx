import { useEffect, useState } from "react";
import SplitText from "./components/SplitText.tsx";
import Portfolio from "./Portfolio.tsx";

export default function LoadingScreen() {
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    return isReady ? <Portfolio /> : (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-black via-gray-700 to-gray-900 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
                <SplitText
                    text="Welcome to My Portfolio"
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center letter-spacing-2 sm:letter-spacing-5 lg:letter-spacing-10 text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-tight sm:leading-tight md:leading-normal px-2 sm:px-4"
                    delay={200}
                    duration={1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px sm:-75px lg:-100px"
                    textAlign="center"
                />
            </div>
        </div>
    );
}