import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const ComputerScreenContent = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState(0);

    useEffect(() => {
        let frame;
        const animate = (t) => {
            setTime(t / 1000);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    return (
        <div className="absolute inset-6 flex items-center justify-between gap-12 px-8" onMouseMove={handleMouseMove}>
            {/* Toronto Skyline Background - Right 30% */}
            <div className="absolute right-0 top-0 bottom-0 w-[40%] overflow-hidden pointer-events-none -z-10">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-loud-light"
                    style={{ backgroundImage: "url('/toronto-skyline.png')" }}
                ></div>
                {/* Gradient Mask to Fade Left into Dark Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent"></div>
                {/* Gradient Mask Vertical */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
            </div>
            {/* Left Side - Content */}
            <div className="flex-1 flex flex-col justify-center space-y-5">
                {/* Title */}
                <div className="text-slate-400 text-sm font-mono tracking-widest uppercase">
                    AI Cloud Engineer & SRE
                </div>

                {/* Greeting & Name */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-light text-white font-mono">
                        Hello I'm
                    </h2>
                    <div
                        className="relative inline-block cursor-pointer select-none group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Smooth Block Highlight Overlay - Precise Anime Style */}
                        <motion.div
                            className="absolute -inset-x-2 inset-y-0 bg-[#10b981] z-0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
                            style={{ originX: 0 }}
                        />
                        <h1
                            className={`relative z-10 text-5xl font-bold font-mono transition-colors duration-200 leading-tight ${isHovered ? 'text-black' : 'text-emerald-400'}`}
                        >
                            Rishabh Singh<br />Thakur
                        </h1>
                    </div>
                </div>

                {/* Full Summary */}
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg font-mono">
                    Helping businesses leverage AI and cloud infrastructure to automate workflows, reduce operational costs, and accelerate time-to-market.
                    <br /><br />
                    AI Cloud Engineer & SRE with <span className="text-emerald-400 font-semibold">around 5 years</span> of hands-on experience building scalable GCP infrastructure with HL7 FHIR compliance for <span className="text-emerald-400 font-semibold">1000+ SDM stores</span> across Canada. Built <span className="text-emerald-400 font-semibold">3 full stack AI Saas apps</span> with one production grade app with google auth, stripe payments and OWASP security integration.<motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-block w-[3.5px] h-[1.2em] ml-2 translate-y-[0.25em] bg-emerald-400"
                    />
                </p>

                {/* Resume & Socials */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://drive.google.com/file/d/1LsU3qoa8cM3k7Y4TFzyY7UZ6InDJAtS4/view?usp=drive_link"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold text-xs font-mono hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 uppercase tracking-wider"
                    >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        VIEW CV
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {[
                            { href: "https://x.com/rishabh_280497", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                            { href: "https://linkedin.com/in/rishabh-singh-thakur-ba3bb4168", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                            { href: "https://github.com/thakurrishabh", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                            { href: "https://www.youtube.com/@existentialBubble", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
                            { href: "mailto:rishabh.4082@gmail.com", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="p-2.5 bg-emerald-400/5 border border-emerald-400/30 rounded-full text-emerald-400 hover:text-white hover:border-emerald-400 hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Profile Picture with Stats */}
            <div className="flex flex-col items-center gap-6">
                {/* Profile Picture with Cinematic Radial Ripple */}
                <div className="relative flex items-center justify-center">
                    {/* Ripple Continuum - High Intensity Waves */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={`wave-${i}`}
                                className="absolute rounded-full bg-emerald-500/10 border-2 border-emerald-400/40 blur-xl shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                                style={{ width: '288px', height: '288px' }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: 1.1,
                                    opacity: [0, 0.8, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: (i / 15) * 3,
                                    ease: [0.11, 0, 0.5, 0] // Natural wave expansion curve
                                }}
                            />
                        ))}
                    </div>

                    {/* Profile Picture Container */}
                    <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-emerald-400 shadow-[0_0_60px_rgba(16,185,129,0.4)]">
                        <img
                            src="https://zhdgql66cifrjlez.public.blob.vercel-storage.com/profile.jpg"
                            alt="Rishabh Singh Thakur"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
                    </div>

                    {/* Stationary Core Base Aura */}
                    <div className="absolute w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl -z-10" />
                </div>

                {/* Stats - Below Picture */}
                <div className="flex gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedCounter end={5} />
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-mono">Years of<br />experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedCounter end={1} suffix="k+" />
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-mono">Stores<br />Automated</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white font-mono">
                            <AnimatedCounter end={28} />
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-mono text-emerald-400">Years<br />Old</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerScreenContent;
