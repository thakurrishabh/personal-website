import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BioDashboard from './BioDashboard';
import CdnRackNavigation from './CdnRackNavigation';
import CloudRouter from '../Shared/CloudRouter';

const ArchitectureOverlay = () => {
    const [direction, setDirection] = useState('down');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setDirection('up');
            } else {
                setDirection('down');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            {/* Top Navigation Rack (Fixed to Top of Screen) */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl pointer-events-auto">
                <CdnRackNavigation />
            </div>

            {/* VPC Container */}
            <motion.div
                className="relative w-[95%] max-w-[1600px] h-full max-h-[92vh] mt-0 border-x-2 border-t-2 border-b-0 border-dashed border-slate-300 rounded-t-3xl rounded-b-none bg-slate-50/5 backdrop-blur-[1px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                {/* VPC Label */}
                <div className="absolute -top-3 left-8 px-2 bg-[#F7F7F7] text-slate-400 text-xs font-mono font-semibold tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    VPC: production-portfolio
                </div>

                {/* Interior Grid/Texture (Optional) */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Subnet Container (Centered with more padding from VPC) */}
                <div className="absolute inset-0 flex items-center justify-center pt-20 pb-20 px-8">
                    <motion.div
                        className="relative w-full max-w-[1400px] h-fit border border-blue-200/40 bg-blue-50/5 rounded-2xl shadow-sm pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Subnet Label */}
                        <div className="absolute -top-3 left-6 px-2 bg-transparent backdrop-blur-md text-blue-400 text-xs font-mono font-semibold tracking-wider flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                            SUBNET: bio-layer (ca-toronto-on-1a)
                        </div>

                        {/* Dashboard Placement Area */}
                        <div className="w-full relative p-4" id="bio-dashboard-container">
                            <BioDashboard />
                        </div>

                        {/* Core Router - Bottom Edge (Centered on Border) */}
                        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 translate-y-1/2 z-[60] pointer-events-auto flex flex-col items-center">
                            <CloudRouter label="BIO_ROUTER" direction="down" />

                            {/* Egress Traffic Trunk - Full Visual */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-48 w-32 -z-10 overflow-visible pointer-events-none">
                                {/* Trunk Container */}
                                <div className="relative w-full h-full flex justify-between px-2">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="relative w-[2px] h-full bg-slate-800/20 rounded-full overflow-hidden">
                                            {/* Static dim line */}
                                            <div className="absolute inset-0 bg-blue-900/10"></div>

                                            {/* Animated Signal */}
                                            <motion.div
                                                className="absolute left-0 right-0 h-10 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                                                animate={{
                                                    y: direction === 'down' ? ['-100%', '300%'] : ['300%', '-100%'],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 1.5 + Math.random(),
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: Math.random() * 2
                                                }}
                                            />
                                        </div>
                                    ))}

                                    {/* Connector Nodes */}
                                    <div className="absolute -top-1 left-0 right-0 h-2 bg-slate-800/50 blur-[2px]"></div>
                                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-slate-800/50 blur-[2px]"></div>
                                </div>

                                {/* Trunk Label */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                                    <div className="bg-slate-950/80 border border-slate-700/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-blue-500/80 tracking-widest flex items-center gap-1.5 shadow-lg">
                                        {direction === 'down' ? (
                                            <>
                                                LINK_ACT <span className="animate-pulse">▲</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="animate-pulse">▼</span> LINK_EST
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ArchitectureOverlay;
