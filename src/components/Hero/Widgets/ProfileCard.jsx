import { motion } from 'framer-motion';

const ProfileCard = () => {
    return (
        <motion.div
            className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-[2rem] bg-indigo-600 text-white p-0 shadow-2xl flex group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] -mr-16 -mt-16 opacity-60 pointer-events-none"></div>

            {/* Left Side: Content (60%) */}
            <div className="w-[60%] p-8 flex flex-col justify-between relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-[pulse_2s_infinite]"></div>
                        <span className="text-xs font-bold tracking-widest text-indigo-200 uppercase">System Online</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 leading-[0.9]">
                        Rishabh Singh<br />Thakur
                    </h1>
                    <p className="text-xl text-indigo-200 font-medium tracking-wide mt-2">AI Cloud Engineer & SRE</p>

                    {/* Location Metaphor */}
                    <div className="flex items-center gap-2 mt-4 text-xs font-mono text-indigo-300/80 bg-indigo-950/30 w-fit px-3 py-1.5 rounded-md border border-indigo-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Region: <span className="text-white font-bold">ca-central-1</span> (Toronto)</span>
                    </div>
                </div>

                <div className="mt-6">
                    {/* Download CV Button */}
                    <a
                        href="https://drive.google.com/file/d/1LsU3qoa8cM3k7Y4TFzyY7UZ6InDJAtS4/view?usp=drive_link"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Resume
                    </a>
                </div>
            </div>

            {/* Right Side: Monitor Profile (40%) */}
            <div className="w-[40%] bg-indigo-800/50 relative h-full flex items-center justify-center p-4">
                <motion.div
                    className="relative w-full aspect-[4/3] flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Monitor Bezel */}
                    <div className="w-full flex-1 bg-slate-800 rounded-lg p-2 shadow-2xl border border-slate-700 relative z-10">
                        {/* Screen */}
                        <div className="w-full h-full bg-slate-950 rounded overflow-hidden relative group">
                            <img
                                src="https://zhdgql66cifrjlez.public.blob.vercel-storage.com/profile.jpg"
                                alt="Rishabh Singh Thakur"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Reflection/Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                            {/* Scanline */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent w-full h-[20%] -translate-y-[150%] animate-[scan_4s_ease-in-out_infinite] pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Monitor Stand Neck */}
                    <div className="w-1/3 h-4 bg-slate-700 shadow-md relative z-0 -mt-1"></div>

                    {/* Monitor Base */}
                    <div className="w-1/2 h-2 bg-slate-800 rounded-full shadow-lg relative z-0"></div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
