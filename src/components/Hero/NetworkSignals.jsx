import { motion } from 'framer-motion';

const NetworkSignals = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="relative w-[95%] h-full max-w-[1600px] max-h-[90vh]">
                {/* Define connectivity paths relative to the VPC container size which matches ArchitectureOverlay's max-w-[1600px] */}

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet">
                    {/* Example Flow: Internet Gateway -> VPC -> Subnet */}

                    {/* Path 1: Top ingress (Centered) */}
                    <path id="path1" d="M 800,0 L 800,100 L 800,150" stroke="transparent" fill="none" />
                    <motion.circle r="3" fill="#60A5FA" opacity="0.6">
                        <animateMotion repeatCount="indefinite" dur="3s" keyPoints="0;1" keyTimes="0;1">
                            <mpath href="#path1" />
                        </animateMotion>
                    </motion.circle>

                    {/* Path 2: Subnet outbound radius (Simulating internal traffic) */}
                    <circle cx="800" cy="450" r="400" stroke="rgba(14, 165, 233, 0.05)" strokeDasharray="4 4" fill="none" />

                    {/* Animated blips on the ring */}
                    <motion.circle r="3" fill="#34D399" opacity="0.6">
                        <animateMotion repeatCount="indefinite" dur="12s" path="M 1200,450 A 400,400 0 1,0 400,450 A 400,400 0 1,0 1200,450" />
                    </motion.circle>
                </svg>
            </div>
        </div>
    );
};

export default NetworkSignals;
