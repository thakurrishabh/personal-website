import React from 'react';
import { motion } from 'framer-motion';
import DockerImageCard from './DockerImageCard';

const RegistryRepository = ({ category, index }) => {
    // Sort skills alphabetically
    const sortedSkills = [...category.skills].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <motion.div
            className="w-full mb-8 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {/* Repository Header - Terminal Style */}
            <div className="flex items-center gap-3 mb-4 pl-2 border-l-2 border-slate-700 bg-gradient-to-r from-slate-900/50 to-transparent py-2 px-4 rounded-r-lg">
                <div className="text-teal-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <div className="font-mono text-sm md:text-base text-slate-300">
                    <span className="text-slate-500">root/</span>
                    <span className="font-bold text-teal-400">{category.id}</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700 rounded bg-slate-900 uppercase">
                        {category.title}
                    </span>
                    <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-mono text-emerald-500 border border-emerald-900/30 rounded bg-emerald-950/30">
                        PUBLIC
                    </span>
                </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
                {sortedSkills.map((skill, idx) => (
                    <DockerImageCard key={`${category.id}-${idx}`} skill={skill} index={idx} />
                ))}
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-800/50 mt-8 mb-2"></div>
        </motion.div>
    );
};

export default RegistryRepository;
