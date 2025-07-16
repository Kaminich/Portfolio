import { Facebook, Mail, Github, Linkedin } from 'lucide-react';
import React from 'react';
import { ZaloIcon } from './ZaloIcon';
import { useTheme } from '../hooks/useTheme';

interface ProfileCardProps {
    title: string;
    avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    avatarUrl,
    title,
}) => {
    const { isDark } = useTheme();

    return (
        <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />

            {/* Main card */}
            <div className={`relative h-full flex flex-col items-center justify-center text-center p-8 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-[1.02] ${isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                }`}>

                <div className="relative mb-5 group/avatar">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover/avatar:opacity-50 transition duration-500" />
                    <img
                        src={avatarUrl}
                        className="relative w-40 h-40 object-cover rounded-full border-1 border-white dark:border-gray-600 shadow-lg transition-transform duration-500 group-hover/avatar:scale-105"
                        alt={'Kaminich'}
                    />
                </div>

                <p className={`hidden max-sm:block text-center text-2xl font-bold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{title}</p>

                <div className={`mb-3 w-full border-1 ${isDark ? 'border-gray-300/20' : 'border-gray-600'}`} />

                <div className="mb-6 w-full">
                    <p className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Specializes in
                    </p>
                    <div className="space-y-2 text-left">
                        {['Software Engineer', 'ABAP Developer', 'Fullstack Developer'].map((spec, index) => (
                            <div key={index} className={`px-4 rounded-full text-md font-medium transition-all duration-800 hover:scale-105 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {spec}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mb-3 w-full border-1 ${isDark ? 'border-gray-300/20' : 'border-gray-600'}`} />

                <div className="w-full">
                    <p className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Connect with me
                    </p>
                    <div className="flex justify-around gap-2">
                        <a
                            href="https://www.facebook.com/caominh.nguyen.338"
                            className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-500 hover:scale-105 overflow-hidden hover:w-[7.25rem] ${isDark
                                ? 'border-[#0866FF]/90 bg-[#0866FF]/90 text-white/80 hover:bg-[#0866FF] hover:shadow-[#0866FF]/25 hover:text-white'
                                : 'border-[#0866FF] text-[#0866FF] hover:bg-[#0866FF] hover:shadow-[#0866FF]/25 hover:text-white'
                                }`}
                        >
                            <Facebook className="w-6 h-6 z-10 transition-transform duration-450 group-hover:-translate-x-8" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-[15px] transition-all duration-500 group-hover:opacity-100 ml-3">
                                Facebook
                            </span>
                        </a>
                        <a
                            href={
                                typeof window !== "undefined" && window.innerWidth >= 1024
                                    ? "https://mail.google.com/mail/?view=cm&fs=1&to=caominhnguyen03@gmail.com"
                                    : "mailto:caominhnguyen03@gmail.com"
                            }
                            onClick={e => {
                                if (typeof window !== "undefined") {
                                    const isDesktop = window.innerWidth >= 1024;
                                    if (isDesktop) {
                                        return;
                                    }
                                    e.currentTarget.href = "mailto:caominhnguyen03@gmail.com";
                                }
                            }}
                            target="_blank"
                            className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-500 hover:scale-105 overflow-hidden hover:w-[5.5rem] ${isDark
                                ? 'border-red-600/90 bg-red-600/90 text-white/80 hover:bg-red-600 hover:shadow-red-600/25 hover:text-white'
                                : 'border-red-600 text-red-600 hover:bg-red-500 hover:shadow-red-600/25 hover:text-white'
                                }`}
                        >
                            <Mail className="w-6 h-6 z-10 transition-transform duration-500 group-hover:-translate-x-4" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-[15px] transition-all duration-500 group-hover:opacity-100 ml-3.5">
                                Mail
                            </span>
                        </a>
                        <a
                            href="https://zalo.me/0708605649"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-500 hover:scale-105 overflow-hidden hover:w-[5.5rem] ${isDark
                                ? 'border-[#0068FF] text-white/80 bg-[#0068FF] hover:bg-blue-500/90 hover:text-white fill-[#ffffff]/80 hover:fill-[#ffffff]'
                                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700 fill-[#0068ff] hover:fill-white'
                                }`}
                        >
                            <ZaloIcon className="w-8 h-8 z-10 transition-transform duration-500 group-hover:-translate-x-4.5" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-[15px] transition-all duration-500 group-hover:opacity-100 ml-4">
                                Zalo
                            </span>
                        </a>
                        <a
                            href="https://github.com/Kaminich"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-500 hover:scale-105 overflow-hidden hover:w-[6.5rem] ${isDark
                                ? 'text-gray-800 bg-white/80 hover:bg-white hover:text-black'
                                : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            <Github className="w-6 h-6 z-10 transition-transform duration-500 group-hover:-translate-x-5.5" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-[15px] transition-all duration-500 group-hover:opacity-100 ml-4">
                                GitHub
                            </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cao-minh-nguyen-0476a4364/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative flex items-center justify-center w-12 h-12 border-2 rounded-full font-medium transform transition-all duration-500 hover:scale-105 overflow-hidden hover:w-[7rem] ${isDark
                                ? 'border-[#0a66c2] bg-[#0a66c2] text-white/80 hover:bg-blue-500 hover:text-white'
                                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-700'
                                }`}
                        >
                            <Linkedin className="w-6 h-6 z-10 transition-transform duration-500 group-hover:-translate-x-7" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 whitespace-nowrap text-[15px] transition-all duration-500 group-hover:opacity-100 ml-4">
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;