import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DockerImageCard = ({ skill, index }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            className="group relative flex flex-col bg-[#0f172a] border border-slate-800 hover:border-teal-500/50 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:-translate-y-1"
            initial={isMobile ? { opacity: 1, scale: 0.95 } : { opacity: 0, scale: 0.95 }}
            whileInView={isMobile ? undefined : { opacity: 1, scale: 1 }}
            animate={isMobile ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            viewport={isMobile ? undefined : { once: true }}
        >
            {/* Top Status Strip */}
            <div className="h-1 w-full bg-slate-800 group-hover:bg-teal-500 transition-colors duration-300"></div>

            <div className="p-4 flex flex-col h-full relative">
                {/* Background Grid Effect (Subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Header: Icon & Name */}
                <div className="flex items-start justify-between mb-3 z-10">
                    <div className="flex items-center gap-3">
                        {/* Icon Container - High Contrast */}
                        <div className="w-10 h-10 rounded bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-teal-500/30 transition-colors">
                            <img
                                src={`https://cdn.simpleicons.org/${skill.slug}/white`}
                                alt={skill.name}
                                className="w-6 h-6 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-xs font-bold text-white uppercase">{skill.name.charAt(0)}</span>
                        </div>

                        {/* Name & Tag */}
                        <div>
                            <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-teal-400 transition-colors">
                                {skill.name}
                            </h3>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[10px] font-mono text-slate-500">TAG:</span>
                                <span className="text-[10px] font-mono text-teal-500 bg-teal-950/30 px-1 rounded">latest</span>
                            </div>
                        </div>
                    </div>

                    {/* Hash ID (Decoration) */}
                    <div className="text-[9px] font-mono text-slate-600 opacity-60">
                        {Math.random().toString(36).substring(2, 8)}
                    </div>
                </div>

                {/* Info / Stats Row */}
                <div className="mt-auto pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Running</span>
                    </div>
                    <div className="opacity-60">
                        {(Math.random() * 100).toFixed(1)}MB
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DockerImageCard;
