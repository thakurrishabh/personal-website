import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PodProject = ({ pod }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            className="group relative bg-slate-900 border border-slate-700/60 rounded-xl p-5 overflow-hidden hover:border-blue-400/50 transition-colors duration-300"
            initial={isMobile ? { opacity: 1, scale: 0.95 } : { opacity: 0, scale: 0.95 }}
            whileInView={isMobile ? undefined : { opacity: 1, scale: 1 }}
            animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
            viewport={isMobile ? undefined : { once: true }}
            whileHover={{ y: -4 }}
        >
            {/* Status Indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                <span className="text-[10px] font-mono text-emerald-400 opacity-60 group-hover:opacity-100 uppercase">Running</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <div className={`flex flex-col ${pod.video ? 'lg:flex-row' : ''} gap-6`}>
                {/* Left/Main Content */}
                <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-1.5 bg-blue-500/10 rounded-lg shrink-0">
                            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-200 transition-colors pr-16">
                            {pod.title}
                        </h3>
                    </div>

                    <ul className="space-y-2 mb-0">
                        {pod.bullets?.map((bullet, idx) => (
                            <li key={idx} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full shrink-0"></span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                        {!pod.bullets && pod.description && (
                            <li className="text-slate-400 text-sm leading-relaxed">{pod.description}</li>
                        )}
                    </ul>
                </div>

                {/* Right Video Screen (Integraded) */}
                {pod.video && (
                    <div className="flex-1 min-w-full md:min-w-[300px] relative z-10 block aspect-video md:aspect-auto">
                        {/* Monitor Frame - Industrial Style */}
                        <div className="relative bg-slate-950/50 rounded-lg p-1.5 border-2 border-slate-700/50 shadow-xl overflow-hidden group/screen h-full flex flex-col">

                            {/* Screen Bezel Branding - Mac Style */}
                            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-widest">VIDEO_OUTPUT</span>
                            </div>

                            {/* Video Content */}
                            <div className="relative flex-1 bg-black group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition-all">
                                {/* Scanline overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none z-20"></div>

                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={pod.video}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                            </div>

                            {/* Bottom Bezel */}
                            <div className="bg-slate-900 h-2 border-t border-slate-800"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Hover Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </motion.div>
    );
};

export default PodProject;
