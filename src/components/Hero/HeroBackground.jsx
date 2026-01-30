import CloudLayer from './CloudLayer';
import NetworkSignals from './NetworkSignals';
import ParticleEffects from './ParticleEffects';
import ArchitectureOverlay from './ArchitectureOverlay';
import FloatingObjects from './FloatingObjects';

const HeroBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-100 to-white">
            {/* Bio Subnet Focus - Hero Background (V3: Sky & Servers) */}

            {/* 1. Cloud Layer (Deepest) */}
            <CloudLayer />

            {/* 2. Floating Objects (Servers/Databases in the sky) */}
            <FloatingObjects />

            {/* 3. Architecture Overlay (VPC + Subnet Structure) */}
            <ArchitectureOverlay />

            {/* 4. Network Signals (Connecting components) */}
            <NetworkSignals />

            {/* 5. Particle Effects (Overlay) */}
            <ParticleEffects />

            {/* NOTE: Bio Dashboard will now live inside ArchitectureOverlay's slot or overlaid here */}
        </div>
    );
};

export default HeroBackground;
