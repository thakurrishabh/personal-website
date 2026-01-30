import { motion } from 'framer-motion';

const StatsCard = () => {
    // Age Calculation
    const age = new Date().getFullYear() - 1997 - (new Date() < new Date(new Date().getFullYear(), 3, 28) ? 1 : 0);

    return (
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 h-full">
            {/* Top Row: Uptime (Long) + Age (Square) */}
            <div className="flex gap-6 min-h-[160px] flex-1">
                {/* Uptime Card - Takes more width */}
                <StatCard
                    cols="grow" // Special case handled by className
                    label="Uptime"
                    value="4y+"
                    subtext="Cloud & SRE Exp."
                    color="bg-[#fdba74]" // Amber
                    labelColor="text-orange-950"
                    delay={0.2}
                    className="flex-[2]"
                />

                {/* Age Card - Compact */}
                <motion.div
                    className="flex-1 bg-slate-200 rounded-[2rem] p-4 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group min-w-[120px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.25 }}
                >
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Age</span>
                    <span className="text-4xl font-black text-slate-700">{age}</span>
                    <div className="mt-2 text-2xl">🇨🇦</div>
                </motion.div>
            </div>

            {/* Bottom Row: Scale (Full Width of column) */}
            <div className="flex-1 min-h-[160px]">
                <StatCard
                    cols="12"
                    label="Scale"
                    value="1k+"
                    subtext="Stores Automated"
                    color="bg-[#6ee7b7]" // Emerald
                    labelColor="text-emerald-950"
                    delay={0.3}
                    className="h-full"
                />
            </div>
        </div>
    );
};

// Adjusted StatCard to accept className and handle flexible sizing
const StatCard = ({ label, value, color, delay, subtext, cols, labelColor = "text-slate-900", className = "" }) => (
    <motion.div
        className={`flex flex-col justify-between p-6 rounded-[2rem] ${color} shadow-lg relative overflow-hidden group ${className} ${cols === '12' ? 'w-full' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, delay }}
    >
        <div className="flex justify-between items-start">
            <span className={`text-xs font-bold uppercase tracking-widest opacity-70 ${labelColor}`}>{label}</span>
        </div>

        <div>
            <span className={`text-5xl font-black block tracking-tighter mb-1 ${labelColor}`}>{value}</span>
            {subtext && <span className={`text-xs font-bold opacity-80 block leading-tight ${labelColor}`}>{subtext}</span>}
        </div>
    </motion.div>
);

export default StatsCard;
