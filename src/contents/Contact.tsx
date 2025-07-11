import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeButtonProps {
    isDark: boolean;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const Contact: React.FC<ThemeButtonProps> = ({ isDark }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [focusedField, setFocusedField] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (fieldName: string): void => {
        setFocusedField(fieldName);
    };

    const handleBlur = (): void => {
        setFocusedField('');
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);
            alert('Message sent successfully!');

            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getFloatingLabelClasses = (fieldName: string, hasValue: boolean): string => {
        const isFloating = focusedField === fieldName || hasValue;
        return `absolute left-3 md:left-2 lg:left-3 transition-all duration-300 ease-in-out pointer-events-none ${isFloating
            ? 'top-1 text-md'
            : 'top-10 text-lg md:text-[17px] lg:text-lg'
            } ${isDark ? 'text-gray-400' : 'text-gray-500'}`;
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 animate-fadeIn">
            <div className={`flex-1 p-8 rounded-2xl transition-all duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`text-3xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                    Let's get in touch!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`mb-4 text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }} className={`mb-6 text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                    Feel free to reach out via email or connect with me on GitHub.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Available for freelance work
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Open to collaboration
                        </span>
                    </div>
                </motion.div>
            </div>

            <div className="p-8" style={{ flex: 1.7 }}>
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col md:flex-row gap-4">
                        <div className="relative" style={{ flex: 1.5 }}>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur}
                                required
                                className={`w-full px-4 pt-10 pb-3 text-lg bg-transparent border-0 border-b-2 border-opacity-50 focus:outline-none focus:border-blue-500 focus:border-opacity-100 transition-all duration-300 ${isDark
                                    ? 'border-gray-600 text-gray-100 focus:border-blue-400'
                                    : 'border-gray-300 text-gray-900 focus:border-blue-500'
                                    }`}
                            />
                            <label
                                htmlFor="name"
                                className={getFloatingLabelClasses('name', formData.name.length > 0)}
                            >
                                Your Name *
                            </label>
                        </div>

                        <div className="relative flex-1">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('phone')}
                                onBlur={handleBlur}
                                className={`w-full px-4 pt-10 pb-3 text-lg bg-transparent border-0 border-b-2 border-opacity-50 focus:outline-none focus:border-blue-500 focus:border-opacity-100 transition-all duration-300 ${isDark
                                    ? 'border-gray-600 text-gray-100 focus:border-blue-400'
                                    : 'border-gray-300 text-gray-900 focus:border-blue-500'
                                    }`}
                            />
                            <label
                                htmlFor="phone"
                                className={getFloatingLabelClasses('phone', formData.phone.length > 0)}
                            >
                                Phone Number *
                            </label>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-4 pt-10 pb-3 text-lg bg-transparent border-0 border-b-2 border-opacity-50 focus:outline-none focus:border-blue-500 focus:border-opacity-100 transition-all duration-300 ${isDark
                                ? 'border-gray-600 text-gray-100 focus:border-blue-400'
                                : 'border-gray-300 text-gray-900 focus:border-blue-500'
                                }`}
                        />
                        <label
                            htmlFor="email"
                            className={getFloatingLabelClasses('email', formData.email.length > 0)}
                        >
                            Email Address *
                        </label>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={handleBlur}
                            required
                            rows={6}
                            className={`w-full px-4 pt-10 pb-3 text-lg bg-transparent border-0 border-b-2 border-opacity-50 focus:outline-none focus:border-blue-500 focus:border-opacity-100 resize-none transition-all duration-300 ${isDark
                                ? 'border-gray-600 text-gray-100 focus:border-blue-400'
                                : 'border-gray-300 text-gray-900 focus:border-blue-500'
                                }`}
                        />
                        <label
                            htmlFor="message"
                            className={getFloatingLabelClasses('message', formData.message.length > 0)}
                        >
                            Your Message *
                        </label>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false, amount: 0 }}
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className={`rounded-full flex items-center justify-center gap-3 w-50 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-color duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isDark ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Contact;