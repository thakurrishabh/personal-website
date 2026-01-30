import { motion } from 'framer-motion';

const ServerIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
);

const DatabaseIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

const CodeIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const objects = [
    { id: 1, type: 'server', size: 60, x: '15%', y: '25%', color: '#94a3b8', duration: 6 },
    { id: 2, type: 'database', size: 50, x: '80%', y: '20%', color: '#cbd5e1', duration: 8 },
    { id: 3, type: 'code', size: 40, x: '20%', y: '70%', color: '#94a3b8', duration: 5 },
    { id: 4, type: 'server', size: 55, x: '75%', y: '65%', color: '#cbd5e1', duration: 7 },
    { id: 5, type: 'database', size: 40, x: '50%', y: '15%', color: '#e2e8f0', duration: 9 },
];

const FloatingObjects = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
            {objects.map((obj) => (
                <motion.div
                    key={obj.id}
                    className="absolute"
                    style={{
                        left: obj.x,
                        top: obj.y,
                        color: obj.color,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: obj.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                >
                    {obj.type === 'server' && <ServerIcon size={obj.size} color={obj.color} />}
                    {obj.type === 'database' && <DatabaseIcon size={obj.size} color={obj.color} />}
                    {obj.type === 'code' && <CodeIcon size={obj.size} color={obj.color} />}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingObjects;
