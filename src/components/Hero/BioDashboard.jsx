import GiantComputer from './GiantComputer';
import GiantPhone from './GiantPhone';

const BioDashboard = () => {
    return (
        <div className="w-full h-full">
            {/* Phone frame on mobile */}
            <div className="md:hidden">
                <GiantPhone />
            </div>

            {/* Computer frame on desktop */}
            <div className="hidden md:block">
                <GiantComputer />
            </div>
        </div>
    );
};

export default BioDashboard;
