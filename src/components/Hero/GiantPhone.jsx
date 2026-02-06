import { motion } from 'framer-motion';
import ComputerScreenContent from './ComputerScreenContent';

const GiantPhone = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <motion.div
                className="relative w-full max-w-[400px] aspect-[9/19.5]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Phone Body */}
                <div className="relative w-full h-full">
                    {/* Phone Frame/Bezel */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] shadow-2xl border-[10px] border-slate-900">
                        {/* Top Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

                        {/* Screen Area */}
                        <div className="absolute inset-3 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[1.75rem] overflow-hidden">
                            {/* Screen Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                            {/* Actual Content */}
                            <ComputerScreenContent />
                        </div>

                        {/* Power Button */}
                        <div className="absolute right-0 top-24 w-1 h-12 bg-slate-700 rounded-l-sm"></div>

                        {/* Volume Buttons */}
                        <div className="absolute left-0 top-20 w-1 h-8 bg-slate-700 rounded-r-sm"></div>
                        <div className="absolute left-0 top-32 w-1 h-8 bg-slate-700 rounded-r-sm"></div>
                    </div>

                    {/* Phone Shadow */}
                    <div className="absolute inset-0 rounded-[2.5rem] shadow-2xl -z-10"></div>
                </div>

                {/* Floating Sparkles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full"
                        style={{
                            left: `${15 + i * 30}%`,
                            top: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default GiantPhone;
