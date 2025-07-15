import { ChevronDown } from "lucide-react";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import { TypingAnimation } from "../components/TypingAnimation";
import { memo } from "react";
import ProfileCard from "../components/ProfileCard";
import { useTheme } from "../hooks/useTheme";

function Hero() {
    const { isDark } = useTheme();

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 max-sm:px-0 sm:px-6 lg:px-8 md:pt-0 max-xl:pt-5 max-xl:pb-16 max-sm:pb-10">
                <div className="flex flex-col xl:flex-row items-center xl:items-start lg:justify-between gap-8 lg:gap-12">

                    <div className="max-sm:hidden flex-1 xl:flex-2 text-left max-lg:flex max-lg:flex-col max-lg:items-start max-lg:w-full xl:mt-5">
                        <h1
                            className={`text-3xl sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[70px] font-bold mb-4 md:mb-6 transition-colors duration-800 tracking-wide leading-tight md:min-h-[155px] lg:min-h-[188px] xl:min-h-[186px] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent ${isDark ? 'hover:from-blue-400 hover:via-purple-400 hover:to-cyan-400' : 'hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600'}`}
                        >
                            <TypingAnimation text="Hi, I'm Nguyen Cao Minh" speed={150} />
                        </h1>

                        <div className="mb-6 md:mb-8">
                            <RotatingText
                                texts={['Mindflow in Code', 'Architect of Logic', 'Dev Perspective', 'Code & Craft']}
                                mainClassName={`px-2 text-xl sm:text-2xl md:text-5xl lg:text-[55px] xl:text-5xl font-bold transition-colors duration-800 ${isDark ? 'text-gray-300' : 'text-gray-700'} overflow-hidden md:min-h-[73px]`}
                                staggerFrom={"first"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={5000}
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-sm mx-auto max-sm:w-full lg:max-w-none xl:mt-4">
                        <ProfileCard
                            avatarUrl="/profile.png"
                            title="Nguyen Cao Minh"
                        />
                    </div>

                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
                </div>
            </div>
        </div>
    );
}

export default memo(Hero);