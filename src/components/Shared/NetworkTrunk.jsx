import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const NetworkTrunk = ({ className, id }) => {
    const { scrollY } = useScroll();
    const [direction, setDirection] = useState('down');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const updateDirection = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY;

            // Only update if significant scroll
            if (Math.abs(diff) > 2) {
                // If scrolling down (diff > 0), flow should be 'down' (Work -> Skills)
                // If scrolling up (diff < 0), flow should be 'up' (Skills -> Work)
                setDirection(diff > 0 ? 'down' : 'up');
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', updateDirection);
        return () => window.removeEventListener('scroll', updateDirection);
    }, [lastScrollY]);

    // Generate a set of "fiber optic" cables
    const cables = Array.from({ length: 8 });

    return (
        <div id={id} className={`absolute h-32 flex justify-center items-center overflow-hidden pointer-events-none z-10 ${className || 'top-0 left-0 right-0'}`}>
            {/* Trunk Container - centered with VPC */}
            <div className="relative w-32 h-full flex justify-between px-2">
                {cables.map((_, i) => (
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

                {/* Connector Nodes (Visuals at top/bottom of trunk) */}
                <div className="absolute -top-1 left-0 right-0 h-2 bg-slate-800/50 blur-[2px]"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-slate-800/50 blur-[2px]"></div>
            </div>

        </div>
    );
};

export default NetworkTrunk;
