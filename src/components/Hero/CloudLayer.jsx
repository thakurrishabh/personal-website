import { motion } from 'framer-motion';

// Using simple SVG shapes for clouds instead of just blurred divs for better "fluffy" look
const CloudSVG = ({ width, height, opacity }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 100 60"
        fill="white"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M10 40 Q25 40 30 30 Q35 10 55 15 Q75 5 85 25 Q95 25 95 40 Q100 60 70 60 L20 60 Q0 60 10 40 Z" />
    </svg>
);

const clouds = [
    { id: 1, width: 300, height: 180, x: '5%', y: '10%', opacity: 0.6, duration: 45, delay: 0 },
    { id: 2, width: 200, height: 120, x: '75%', y: '15%', opacity: 0.5, duration: 50, delay: 2 },
    { id: 3, width: 400, height: 240, x: '40%', y: '60%', opacity: 0.4, duration: 60, delay: 5 },
    { id: 4, width: 180, height: 100, x: '85%', y: '70%', opacity: 0.7, duration: 40, delay: 1 },
    { id: 5, width: 250, height: 150, x: '10%', y: '80%', opacity: 0.55, duration: 55, delay: 3 },
];

const CloudLayer = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {clouds.map((cloud) => (
                <motion.div
                    key={cloud.id}
                    className="absolute drop-shadow-lg"
                    style={{
                        left: cloud.x,
                        top: cloud.y,
                    }}
                    animate={{
                        x: [0, 40, 0],
                    }}
                    transition={{
                        duration: cloud.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: cloud.delay,
                    }}
                >
                    <CloudSVG width={cloud.width} height={cloud.height} opacity={cloud.opacity} />
                </motion.div>
            ))}
        </div>
    );
};

export default CloudLayer;
