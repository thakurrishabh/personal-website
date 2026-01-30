import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';

// Icons
const DockerIcon = () => (
    <svg className="w-5 h-5 text-blue-400 opacity-80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.185m5.892 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 11.29c.065.245.137.49.207.737l.069.246c.119.418.232.818.04 1.258a1.347 1.347 0 01-.19.31c-.398.53-.9.99-1.488 1.365a12.158 12.158 0 01-1.742.921c-5.226 2.05-10.92 2.05-16.146 0a12.062 12.062 0 01-1.748-.921 10.662 10.662 0 01-1.482-1.365c-.06-.068-.122-.178-.19-.31-.192-.44-.079-.84.04-1.258l.068-.246c.07-.247.143-.492.208-.738a1.95 1.95 0 011.88-1.42 1.48 1.48 0 01.385.051c.646.168 1.31.282 1.986.338l.02.002c.07.006.14.01.21.018l.836.059c.07.005.14.01.213.012l.848.04c.068.003.136.006.205.006l.872.02h.676c.264 0 .528 0 .792-.01l.668-.01.872-.02c.069 0 .137-.003.205-.006l.848-.04c.072-.002.143-.007.213-.012l.836-.059c.07-.008.14-.012.21-.018l.02-.002c.676-.056 1.34-.17 1.986-.338a1.48 1.48 0 01.386-.05 1.95 1.95 0 011.879 1.42z" />
    </svg>
);

// Minimalist Tech Badge
const TechBadge = ({ skill, index }) => {
    return (
        <motion.div
            className="flex items-center gap-2.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all duration-200 group/pill cursor-default"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
        >
            {/* Icon */}
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center opacity-80 group-hover/pill:opacity-100 transition-opacity">
                <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/white`}
                    alt={skill.name}
                    className="w-full h-full object-contain filter brightness-200"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                {/* Fallback Text */}
                <span className="hidden text-[10px] font-bold text-white uppercase">{skill.name.charAt(0)}</span>
            </div>

            {/* Name */}
            <span className="text-sm font-sans text-slate-200 group-hover/pill:text-white font-medium tracking-tight truncate transition-colors">
                {skill.name}
            </span>
        </motion.div>
    );
};

// Modern Posh Repository Card
const RepositoryModule = ({ category, index }) => {
    // Sort skills alphabetically
    const sortedSkills = [...category.skills].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <motion.div
            className="relative flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {/* Card Container: Clean, Matte, Deep Charcoal */}
            <div className="flex-1 bg-[#151E32] rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/20 flex flex-col group">

                {/* Header: High Contrast & Professional */}
                <div className="px-6 py-5 border-b border-slate-800 bg-[#1A243C]">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <DockerIcon />
                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                                {category.title}
                            </h3>
                        </div>
                        {/* ID Badge */}
                        <div className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
                            ID: {String(index + 1).padStart(2, '0')}
                        </div>
                    </div>

                    {/* Repository Path */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400/80">
                        <span className="text-slate-500">repo:</span>
                        <span>library/{category.id}</span>
                    </div>
                </div>

                {/* Content: Clean Grid of Chips */}
                <div className="p-6 bg-[#151E32] flex-1">
                    <div className="grid grid-cols-2 gap-3">
                        {sortedSkills.map((skill, idx) => (
                            <TechBadge key={`${category.id}-${idx}`} skill={skill} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Subtle Footer */}
                <div className="px-6 py-3 bg-[#11192b] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{sortedSkills.length} verified packages</span>
                    <div className="flex gap-1.5 opacity-50">
                        <span className="block w-1 h-1 rounded-full bg-slate-500"></span>
                        <span className="block w-1 h-1 rounded-full bg-slate-500"></span>
                        <span className="block w-1 h-1 rounded-full bg-slate-500"></span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkillEngine = () => {
    return (
        <div className="w-full py-4">
            <div className="max-w-7xl mx-auto">
                {/* A Clean Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <RepositoryModule key={category.id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillEngine;
