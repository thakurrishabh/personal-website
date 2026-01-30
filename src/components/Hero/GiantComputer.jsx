import { motion } from 'framer-motion';
import ComputerScreenContent from './ComputerScreenContent';

const GiantComputer = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <motion.div
                className="relative w-full max-w-5xl aspect-[3/2]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Computer Body */}
                <div className="relative w-full h-full">
                    {/* Main Monitor Casing */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-300 rounded-[3rem] shadow-2xl border-8 border-slate-400">
                        {/* Inner Bezel */}
                        <div className="absolute inset-4 bg-slate-800 rounded-[2rem] shadow-inner">
                            {/* Screen Area - This is where content will go */}
                            <div className="absolute inset-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden">
                                {/* Screen Glare */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                                {/* Actual Content */}
                                <ComputerScreenContent />
                            </div>
                        </div>

                        {/* Decorative Vents on Top */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-2 h-4 bg-slate-600 rounded-full"></div>
                            ))}
                        </div>

                        {/* Power Button */}
                        <motion.div
                            className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                            <motion.div
                                className="absolute inset-0 rounded-full bg-green-400"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Status LEDs */}
                        <div className="absolute bottom-8 left-8 flex gap-3">
                            <motion.div
                                className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div
                                className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            />
                            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 opacity-30" />
                        </div>
                    </div>

                    {/* Monitor Stand */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-3xl shadow-xl">
                        {/* Stand Neck */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-400 rounded-t-lg"></div>
                    </div>

                    {/* Monitor Base */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-6 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full shadow-2xl">
                        {/* Base Details */}
                        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                </div>

                {/* Floating Particles/Sparkles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
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

export default GiantComputer;
