import { educationData } from '../../data/educationData';
import CloudRouter from '../Shared/CloudRouter';
import NetworkTrunk from '../Shared/NetworkTrunk';
import { motion } from 'framer-motion';

// --- FLOATING BACKGROUND ELEMENTS ---
const FloatingTechIcons = () => {
    const icons = [
        { id: 1, type: 'database', x: '10%', y: '15%', size: 50, duration: 8 },
        { id: 2, type: 'lock', x: '85%', y: '25%', size: 40, duration: 6 },
        { id: 3, type: 'folder', x: '15%', y: '75%', size: 45, duration: 7 },
        { id: 4, type: 'database', x: '80%', y: '70%', size: 35, duration: 9 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {icons.map((icon) => (
                <motion.div
                    key={icon.id}
                    className="absolute text-blue-400"
                    style={{ left: icon.x, top: icon.y }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {icon.type === 'database' && (
                        <svg width={icon.size} height={icon.size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                    )}
                    {icon.type === 'lock' && (
                        <svg width={icon.size} height={icon.size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    )}
                    {icon.type === 'folder' && (
                        <svg width={icon.size} height={icon.size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

// Circuit Pattern Background
const CircuitPattern = () => (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#3b82f6" />
                <circle cx="90" cy="90" r="2" fill="#8b5cf6" />
                <line x1="10" y1="10" x2="50" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="50" stroke="#3b82f6" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="90" y2="90" stroke="#8b5cf6" strokeWidth="0.5" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
);


// --- EDUCATION: DATABASE SERVER RACK ---
const DatabaseServer = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring" }}
            className="group relative"
        >
            {/* Server Rack Container */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-2 border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">

                {/* Server Rack Top Bar */}
                <div className="h-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-blue-500/30 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 uppercase tracking-wider ml-auto">ID: {data.id}</span>
                </div>

                {/* Server Content */}
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        {/* Database Icon */}
                        <div className="relative">
                            <div className="relative w-12 h-12 bg-blue-500/10 rounded-lg border border-blue-500/30 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{data.school}</h3>
                            <div className="text-sm text-slate-300 mb-3">{data.degree}</div>

                            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                                <span>{data.period}</span>
                                <span>•</span>
                                <span>{data.location}</span>
                            </div>

                            {data.desc && (
                                <div className="mt-3 text-xs text-slate-400 leading-relaxed border-l-2 border-blue-500/30 pl-3">
                                    {data.desc}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Data Flow Indicator (Static) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            </div>
        </motion.div>
    );
};


// --- CERTIFICATES: SECURITY VAULT WITH HOLOGRAPHIC DISPLAY ---
const SecurityVault = ({ data, index }) => {
    return (
        <motion.a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            className="group block relative"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Holographic Card */}
            <div className="relative bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-purple-950/30 border border-purple-500/30 rounded-xl p-5 overflow-hidden hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">

                {/* Holographic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/5 to-transparent" />

                {/* Lock Icon */}
                <div className="relative mb-4">
                    <div className="relative w-10 h-10 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-tight mb-2">{data.name}</h4>
                <div className="text-xs text-slate-400 mb-3">{data.issuingOrg}</div>

                <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-purple-400">{data.date}</span>
                    <div className="flex items-center gap-1 text-emerald-400">
                        <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                        <span>VERIFIED</span>
                    </div>
                </div>

                {/* Hexagon Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <svg viewBox="0 0 100 100" className="text-purple-400">
                        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="1" />
                        <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </div>
        </motion.a>
    );
};


// --- PERSONAL ATTRIBUTES: COMPACT CARDS WITH EMOJIS ---
const PersonalAttribute = ({ title, items, emoji, color, index }) => {
    const colors = {
        orange: { border: "border-orange-500/30", text: "text-orange-400", bg: "bg-orange-500/10" },
        cyan: { border: "border-cyan-500/30", text: "text-cyan-400", bg: "bg-cyan-500/10" },
        pink: { border: "border-pink-500/30", text: "text-pink-400", bg: "bg-pink-500/10" },
    };
    const theme = colors[color];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className={`relative bg-gradient-to-br from-slate-900/50 to-slate-950/50 border ${theme.border} rounded-lg p-4 hover:border-opacity-60 transition-all duration-300`}>

                {/* Header with Emoji */}
                <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${theme.bg} rounded-lg border ${theme.border} flex items-center justify-center text-xl`}>
                        {emoji}
                    </div>
                    <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.text}`}>{title}</h4>
                </div>

                {/* Items as Inline Tags */}
                <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-2.5 py-1 rounded text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Storage Bucket Pattern (Subtle Indicator) */}
                <div className="absolute top-2 right-2 opacity-10">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className={theme.text}>
                        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>

                {/* Metadata Footer */}
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-600">
                    <span>ITEMS: {items.length}</span>
                    <span className="uppercase">{color}_bucket</span>
                </div>
            </div>
        </motion.div>
    );
};


const EducationSection = () => {
    return (
        <section className="relative w-full min-h-screen pt-0 pb-32 bg-[#0B1120] overflow-hidden" id="education">
            {/* Background Elements */}
            <FloatingTechIcons />
            <CircuitPattern />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none active-grid-pattern"></div>

            {/* VPC Connector */}
            <div className="absolute inset-0 w-[95%] max-w-[1600px] mx-auto border-x-2 border-dashed border-slate-700/30 pointer-events-none z-0"></div>

            <NetworkTrunk />

            <div className="relative z-10 container mx-auto px-4 pt-32">
                {/* Router */}
                <div className="flex justify-center -mb-4 relative z-20">
                    <CloudRouter label="KNOWLEDGE_GATEWAY" direction="up" />
                </div>

                {/* Subnet Container */}
                <div className="relative w-full max-w-[1400px] mx-auto border border-blue-500/20 bg-slate-900/20 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">

                    {/* Subnet Header */}
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-[#0B1120] border border-blue-500/30 rounded-full flex items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-[10px] font-mono text-blue-400 font-bold tracking-widest uppercase">
                            SUBNET: data-persistence-layer
                        </span>
                    </div>

                    {/* Title */}
                    <div className="text-center mb-16 mt-8">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3">
                            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Infrastructure</span>
                        </h2>
                        <div className="inline-block px-4 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-mono text-xs">
                            <span className="text-blue-500">$</span> aws rds describe-instances --region career
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* LEFT: Education & Certificates */}
                        <div className="lg:col-span-7 space-y-12">

                            {/* Education Database Servers */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Education</h3>
                                </div>

                                <div className="space-y-4">
                                    {educationData.education.map((edu, idx) => (
                                        <DatabaseServer key={edu.id} data={edu} index={idx} />
                                    ))}
                                </div>
                            </div>

                            {/* Security Vaults */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Certifications</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {educationData.certificates.map((cert, idx) => (
                                        <SecurityVault key={cert.id} data={cert} index={idx} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Personal Attributes */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Personal</h3>
                                </div>

                                <div className="space-y-4">
                                    <PersonalAttribute
                                        title="Soft Skills"
                                        items={educationData.softSkills}
                                        emoji="💡"
                                        color="orange"
                                        index={0}
                                    />

                                    <PersonalAttribute
                                        title="Languages"
                                        items={educationData.languages}
                                        emoji="🌍"
                                        color="cyan"
                                        index={1}
                                    />

                                    <PersonalAttribute
                                        title="Hobbies"
                                        items={educationData.hobbies}
                                        emoji="🎸"
                                        color="pink"
                                        index={2}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default EducationSection;
