import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ServerBlade = ({ label, href, isActive, delay, onClick, isMobile = false }) => {
    const handleClick = (e) => {
        if (onClick) {
            onClick();
        }

        if (!href) return;
        // Don't prevent default for external links
        if (href.startsWith('http')) return;

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
            className={`
                relative group flex items-center justify-between px-2 md:px-4 
                bg-gradient-to-b ${isActive ? 'from-indigo-50 to-white' : 'from-slate-50 to-slate-100'} 
                hover:from-white hover:to-white transition-all cursor-pointer flex-shrink-0
                ${isMobile
                    ? 'w-full h-16 border-b border-slate-300 shadow-sm mb-2 rounded-md'
                    : 'h-10 md:h-12 min-w-[80px] md:min-w-[100px] border-r border-slate-300/20'
                }
            `}
            initial={{ opacity: 0, [isMobile ? 'x' : 'y']: -20 }}
            animate={{ opacity: 1, [isMobile ? 'x' : 'y']: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            {/* Rack Handle */}
            <div className={`rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors ${isMobile ? 'w-1.5 h-8' : 'w-1 h-4 md:h-6'}`}></div>

            {/* Label */}
            <span className={`font-mono font-bold tracking-widest ${isActive ? 'text-indigo-600' : 'text-slate-500'} group-hover:text-indigo-500 uppercase ${isMobile ? 'text-sm' : 'text-[10px] md:text-xs'}`}>
                {label}
            </span>

            {/* Status Light */}
            <div className={`rounded-full ${isActive ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-300 group-hover:bg-green-400'} transition-all ${isMobile ? 'w-2.5 h-2.5' : 'w-1.5 h-1.5 md:w-2 md:h-2'}`}></div>

            {/* Mounting Screws */}
            <div className="absolute top-1 left-1 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-slate-300"></div>
            <div className="absolute bottom-1 left-1 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-slate-300"></div>
            <div className="absolute top-1 right-1 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-slate-300"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-slate-300"></div>
        </motion.a>
    );
};

const CdnRackNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'Work', href: '#work' },
        { label: 'Skills', href: '#skills' },
        { label: 'Education', href: '#education' },
        { label: 'Blog', href: 'https://dev.to/thakurrishabh' },
        { label: 'Guitar', href: 'https://www.instagram.com/guitar_symphonies?igsh=MTRmbjFjbjBpZ2k1Mg==' },
        { label: 'Contact', href: 'mailto:rishabh.singh.thakur@gmail.com' },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto z-50 relative">
            {/* Desktop View (md+) - Unchanged */}
            <div className="hidden md:flex w-full h-16 bg-slate-200 rounded-b-xl border-x-4 border-b-4 border-slate-300 shadow-xl items-center justify-center px-2">
                <ServerBlade label="Home" href="#" isActive={activeSection === 'home'} delay={0.1} />
                <ServerBlade label="Work" href="#work" isActive={activeSection === 'work'} delay={0.2} />
                <ServerBlade label="Skills" href="#skills" isActive={activeSection === 'skills'} delay={0.3} />
                <ServerBlade label="Education" href="#education" isActive={activeSection === 'education'} delay={0.4} />

                {/* Dedicated Blog Server */}
                <motion.a
                    href="https://dev.to/thakurrishabh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group h-14 min-w-[120px] flex items-center justify-center bg-slate-800 rounded-md border border-slate-600 shadow-inner cursor-pointer flex-shrink-0"
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

                <ServerBlade label="Contact" href="mailto:rishabh.singh.thakur@gmail.com" isActive={false} delay={0.6} />
                <ServerBlade label="Guitar" href="https://www.instagram.com/guitar_symphonies?igsh=MTRmbjFjbjBpZ2k1Mg==" isActive={false} delay={0.7} />
            </div>

            {/* Mobile View (< md) */}
            <div className="md:hidden fixed top-4 right-4 z-[100]">
                {/* System Access Button (Themed Hamburger) */}
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-12 h-12 bg-slate-800 rounded-md border-2 border-slate-600 shadow-xl flex flex-col items-center justify-center gap-1.5 relative overflow-hidden group cursor-pointer active:scale-95 transition-transform"
                    style={{ pointerEvents: 'auto' }}
                >
                    {/* Metallic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-900/80 pointer-events-none"></div>

                    {/* Server Vents / Lines */}
                    <div className="w-8 h-1 bg-slate-500 rounded-full group-hover:bg-sky-400 transition-colors"></div>
                    <div className="w-8 h-1 bg-slate-500 rounded-full group-hover:bg-sky-400 transition-colors"></div>
                    <div className="w-8 h-1 bg-slate-500 rounded-full group-hover:bg-sky-400 transition-colors"></div>

                    {/* Status LED */}
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.6)]"></div>
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] md:hidden"
                        />

                        {/* Drawer (Right Side) */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[300px] bg-slate-900 border-l border-slate-700 z-[100] md:hidden shadow-2xl overflow-y-auto"
                        >
                            {/* Drawer Header */}
                            <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                <h3 className="font-mono text-sm text-sky-400 tracking-wider font-bold mb-1">RACK_MOUNT_ACCESS</h3>
                                <div className="text-[10px] text-slate-500 font-mono">SYS_ADMIN_CONSOLE</div>
                            </div>

                            {/* Server Blade Stack */}
                            <div className="p-4 flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <ServerBlade
                                        key={item.label}
                                        label={item.label}
                                        href={item.href}
                                        isActive={activeSection === item.label.toLowerCase() || (item.label === 'Home' && activeSection === 'home')}
                                        delay={0.1 + (index * 0.05)}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        isMobile={true}
                                    />
                                ))}
                            </div>

                            {/* Footer Status */}
                            <div className="absolute bottom-0 w-full p-6 bg-slate-800 border-t border-slate-700">
                                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                                    <span>CONNECTION: SECURE</span>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Hanging Cables (Visual Decoration - Desktop Only) */}
            <div className="hidden md:block absolute top-16 left-10 w-[2px] h-12 bg-slate-400/30"></div>
            <div className="hidden md:block absolute top-16 right-10 w-[2px] h-8 bg-slate-400/30"></div>
        </div>
    );
};

export default CdnRackNavigation;
