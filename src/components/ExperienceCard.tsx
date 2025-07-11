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
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-shrink-0 w-full sm:w-24 md:w-32 sm:text-right mb-2 sm:mb-0">
                <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {date}
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex-shrink-0 mt-1 hidden sm:block">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ml-[-8.5px] border-3 sm:border-4 ${isDark ? 'bg-blue-400 border-gray-900' : 'bg-blue-500 border-white'} shadow-lg`} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
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