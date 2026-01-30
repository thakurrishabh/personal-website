import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleEffects = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate static particles on mount to avoid re-renders causing jumps
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1-4px
            duration: Math.random() * 20 + 10, // 10-30s
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-slate-300 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: 0.2,
                    }}
                    animate={{
                        y: [0, -100], // Drift upwards
                        opacity: [0, 0.2, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleEffects;
