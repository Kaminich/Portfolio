import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -100, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -100, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-4 right-4 z-50 max-w-sm"
                >
                    <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${type === 'success'
                            ? 'bg-green-200 border-green-200 text-green-800'
                            : 'bg-red-200 border-red-200 text-red-800'
                            }`}
                    >
                        {type === 'success' && (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium flex-1">{message}</span>
                        <button
                            onClick={onClose}
                            className={`p-1 rounded-full transition-colors ${type === 'success'
                                ? 'hover:bg-green-100 text-green-600'
                                : 'hover:bg-red-100 text-red-600'
                                }`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};