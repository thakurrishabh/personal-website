import MobileScreenContent from './MobileScreenContent';
import DesktopScreenContent from './DesktopScreenContent';

const ComputerScreenContent = () => {
    return (
        <div className="w-full h-full">
            {/* Mobile Implementation */}
            <div className="block md:hidden w-full h-full">
                <MobileScreenContent />
            </div>

            {/* Desktop Implementation */}
            <div className="hidden md:block w-full h-full">
                <DesktopScreenContent />
            </div>
        </div>
    );
};

export default ComputerScreenContent;
