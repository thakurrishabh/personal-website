import CloudRouter from '../Shared/CloudRouter';
import NetworkTrunk from '../Shared/NetworkTrunk';
import RegistryRepository from './RegistryRepository';
import { skillsData } from '../../data/skillsData';

const SkillsSection = () => {
    return (
        <section className="relative w-full min-h-screen py-32 bg-[#020617] overflow-hidden" id="skills">
            {/* 1. Background Atmosphere */}
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(to right, #0f766e 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                }}
            ></div>

            {/* Main Trunk Line */}
            <div className="absolute inset-0 w-[95%] max-w-[1600px] mx-auto border-x border-dashed border-teal-900/30 pointer-events-none z-0"></div>
            <NetworkTrunk />

            {/* 2. Main Content Container - The "Subnet" */}
            <div className="relative z-10 container mx-auto px-4">

                {/* Router Connection (Top) */}
                <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 z-30">
                    <CloudRouter label="SKILLS_GATEWAY" direction="down" />
                </div>

                {/* Subnet Box */}
                <div className="relative w-full max-w-[1600px] mx-auto min-h-[800px] bg-[#020617]/80 backdrop-blur-sm border border-teal-900/50 rounded-lg p-6 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(15,118,110,0.05)]">

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-teal-500/30 rounded-tl-xl pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-teal-500/30 rounded-tr-xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-teal-500/30 rounded-bl-xl pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-teal-500/30 rounded-br-xl pointer-events-none"></div>

                    {/* Subnet Label */}
                    <div className="absolute top-6 left-8 flex items-center gap-3 px-4 py-1 bg-teal-950/30 border border-teal-800/50 rounded-full">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                        <span className="font-mono text-xs text-teal-400 font-bold tracking-widest uppercase">
                            SUBNET: skills-registry
                        </span>
                    </div>

                    {/* Header Section */}
                    <div className="text-center mb-20 mt-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase font-mono">
                            SKILL <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">REGISTRY</span>
                        </h2>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 border border-white/10 rounded font-mono text-sm text-slate-400">
                            <span className="text-teal-500">$</span>
                            <span>docker images --format "table {'{{.Repository}}\\t{{.Tag}}'}"</span>
                        </div>
                    </div>

                    {/* Repositories List */}
                    <div className="max-w-7xl mx-auto space-y-4">
                        {skillsData.map((category, index) => (
                            <RegistryRepository key={category.id} category={category} index={index} />
                        ))}
                    </div>

                    {/* Footer / Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 py-2 px-6 bg-[#0B1120] border-t border-teal-900/30 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                        <div>Status: Online</div>
                        <div>Region: us-east-1</div>
                        <div>Uptime: 99.99%</div>
                    </div>

                </div>

                {/* Router Connection (Bottom) - Outside Subnet Box to avoid overflow clipping */}
                <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 z-30">
                    <CloudRouter label="REGISTRY_GATEWAY" direction="down" />
                </div>

                {/* Bottom Trunk Connecting Skills to Education - Aligned with Gateway */}
                <NetworkTrunk className="top-full left-0 right-0 h-32 z-0" />
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default SkillsSection;
