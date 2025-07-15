import { motion } from "framer-motion";

interface ExperienceCardProps {
    title: string;
    date: string;
    isDark: boolean;
    children: React.ReactNode;
}

export function ExperienceCard({ title, date, isDark, children }: ExperienceCardProps) {
    return (
        <div className="relative flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pb-6 sm:pb-8 last:pb-0">
            <motion.div
                initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0 }}
                exit={{ opacity: 0 }}
                style={{
                    "--slide-x1": "-50",
                    "--slide-x2": "0",
                    "--slide-y1": "0",
                    "--slide-y2": "0",
                    ...(window.innerWidth < 640
                        ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                        : {})
                } as React.CSSProperties}
                className="flex-shrink-0 w-full sm:w-24 md:w-32 sm:text-right mb-2 sm:mb-0">
                <span className={`font-medium text-sm sm:text-base bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} bg-clip-text text-transparent`}>
                    {date}
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0 }}
                exit={{ opacity: 0 }}
                style={{
                    "--slide-x1": "-50",
                    "--slide-x2": "0",
                    "--slide-y1": "0",
                    "--slide-y2": "0",
                    ...(window.innerWidth < 640
                        ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                        : {})
                } as React.CSSProperties}
                className="relative flex-shrink-0 mt-1 hidden sm:block">
                <div className={`w-4 h-4 rounded-full ml-[-6px] border-2 bg-gradient-to-br ${isDark ? 'from-[#EA4492] to-[#004E9A]' : 'from-[#1CA7EC] to-[#4ADEDE]'} shadow-lg`} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "var(--slide-x1)", y: "var(--slide-y1)" }}
                whileInView={{ opacity: 1, x: "var(--slide-x2)", y: "var(--slide-y2)" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0 }}
                exit={{ opacity: 0 }}
                style={{
                    "--slide-x1": "50",
                    "--slide-x2": "0",
                    "--slide-y1": "0",
                    "--slide-y2": "0",
                    ...(window.innerWidth < 640
                        ? { "--slide-x1": "0", "--slide-x2": "0", "--slide-y1": "50", "--slide-y2": "0" }
                        : {})
                } as React.CSSProperties}
                className="flex-1 min-w-0 sm:ml-4 md:ml-8">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>

                <div className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
}