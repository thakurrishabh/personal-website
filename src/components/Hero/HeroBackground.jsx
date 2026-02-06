import CloudLayer from './CloudLayer';
import NetworkSignals from './NetworkSignals';
import ParticleEffects from './ParticleEffects';
import ArchitectureOverlay from './ArchitectureOverlay';
import FloatingObjects from './FloatingObjects';
import CdnRackNavigation from './CdnRackNavigation';

const HeroBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-100 to-white">
            {/* Top Navigation - Fixed at the top, above everything */}
            <div className="absolute top-0 left-0 w-full z-[100] pointer-events-auto flex justify-center">
                <CdnRackNavigation />
            </div>

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
