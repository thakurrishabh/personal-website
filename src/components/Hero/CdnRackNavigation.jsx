import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ServerBlade = ({ label, href, isActive, delay }) => {
    const handleClick = (e) => {
        if (!href) return;
        e.preventDefault();
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.a
            href={href}
            onClick={handleClick}
            className={`relative group h-12 min-w-[100px] flex items-center justify-between px-4 border-r border-slate-300/20 bg-gradient-to-b ${isActive ? 'from-indigo-50 to-white' : 'from-slate-50 to-slate-100'} hover:from-white hover:to-white transition-all cursor-pointer`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            {/* Rack Handle */}
            <div className="w-1 h-6 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></div>

            {/* Label */}
            <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-indigo-600' : 'text-slate-500'} group-hover:text-indigo-500 uppercase`}>
                {label}
            </span>

            {/* Status Light */}
            <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-300 group-hover:bg-green-400'} transition-all`}></div>

            {/* Mounting Screws */}
            <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-slate-300"></div>
        </motion.a>
    );
};

const CdnRackNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['work', 'skills', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(current || 'home');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Rack Enclosure */}
            <div className="w-full h-16 bg-slate-200 rounded-b-xl border-x-4 border-b-4 border-slate-300 shadow-xl flex items-center justify-center gap-[1px] px-2 overflow-hidden">
                <ServerBlade label="Home" href="#" isActive={activeSection === 'home'} delay={0.1} />
                <ServerBlade label="Work" href="#work" isActive={activeSection === 'work'} delay={0.2} />
                <ServerBlade label="Skills" href="#skills" isActive={activeSection === 'skills'} delay={0.3} />
                <ServerBlade label="Education" href="#education" isActive={activeSection === 'education'} delay={0.4} />

                {/* Dedicated Blog Server */}
                <motion.a
                    href="https://dev.to/thakurrishabh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group h-14 min-w-[120px] mx-2 flex items-center justify-center bg-slate-800 rounded-md border border-slate-600 shadow-inner cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-sky-500/50"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 font-mono mb-1">CDN NODE</span>
                        <span className="text-sm font-bold text-white tracking-widest">BLOG</span>
                    </div>
                    {/* Blinking Activity Light */}
                    <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></div>
                </motion.a>

                {/* Contact - Linked to Email */}
                <motion.a
                    href="mailto:rishabh.singh.thakur@gmail.com"
                    className={`relative group h-12 min-w-[100px] flex items-center justify-between px-4 border-r border-slate-300/20 bg-gradient-to-b from-slate-50 to-slate-100 hover:from-white hover:to-white transition-all cursor-pointer`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {/* Rack Handle */}
                    <div className="w-1 h-6 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors"></div>

                    {/* Label */}
                    <span className={`text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-indigo-500 uppercase`}>
                        Contact
                    </span>

                    {/* Status Light */}
                    <div className={`w-2 h-2 rounded-full bg-slate-300 group-hover:bg-green-400 transition-all`}></div>

                    {/* Mounting Screws */}
                    <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-slate-300"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-slate-300"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-slate-300"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-slate-300"></div>
                </motion.a>

                {/* Guitar / Music Node - Standout (Sunburst Finish) */}
                <motion.a
                    href="https://www.instagram.com/guitar_symphonies?igsh=MTRmbjFjbjBpZ2k1Mg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group h-12 min-w-[100px] flex items-center justify-between px-4 border-l border-slate-300/20 bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 hover:from-amber-600 hover:to-orange-700 transition-all cursor-pointer overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    {/* Rack Handle (Brass/Gold look) */}
                    <div className="w-1 h-6 rounded-full bg-slate-800/80 group-hover:bg-yellow-400 transition-colors border border-white/10"></div>

                    {/* Label Group */}
                    <div className="flex flex-col items-center">
                        <span className="text-[8px] text-amber-200/60 font-mono tracking-wider mb-0.5">IG_LINK</span>
                        <span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-amber-100 drop-shadow-md">
                            Guitar
                        </span>
                    </div>

                    {/* Status Light - Recording/Live */}
                    <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                    </div>

                    {/* Decorative Screws (Darker for Contrast) */}
                    <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-slate-900/50"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-slate-900/50"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-slate-900/50"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-slate-900/50"></div>
                </motion.a>
            </div>

            {/* Hanging Cables (Visual Decoration) */}
            <div className="absolute top-16 left-10 w-[2px] h-12 bg-slate-400/30"></div>
            <div className="absolute top-16 right-10 w-[2px] h-8 bg-slate-400/30"></div>
        </div>
    );
};

export default CdnRackNavigation;
