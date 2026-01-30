import { motion } from 'framer-motion';

const CloudRouter = ({ label, direction = 'down' }) => {
    // Generate ports
    const ports = Array.from({ length: 12 });

    return (
        <div className="relative w-64 h-8 bg-slate-900 border border-slate-700 rounded-sm flex items-center justify-between px-2 shadow-lg z-20">
            {/* Rack Ears */}
            <div className="absolute -left-2 top-0 bottom-0 w-2 bg-slate-800 border border-slate-700 rounded-l-sm flex flex-col justify-between py-1 px-0.5">
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <div className="absolute -right-2 top-0 bottom-0 w-2 bg-slate-800 border border-slate-700 rounded-r-sm flex flex-col justify-between py-1 px-0.5">
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>

            {/* Router Face */}
            <div className="flex items-center gap-2">
                <div className="text-[10px] font-mono text-slate-500 font-bold tracking-tighter">{label}</div>

                {/* Status Light */}
                <div className={`w-1.5 h-1.5 rounded-full ${direction === 'down' ? 'bg-green-500 animate-pulse' : 'bg-blue-500 animate-pulse'} shadow-[0_0_5px_rgba(34,197,94,0.5)]`}></div>
            </div>

            {/* Ethernet Ports */}
            <div className="flex gap-[2px]">
                {ports.map((_, i) => (
                    <div key={i} className="w-2.5 h-3 bg-slate-800 border border-slate-600 rounded-[1px] relative overflow-hidden">
                        {/* Blinky Lights - Randomly placed */}
                        <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[1px] flex gap-[1px]">
                            <div className={`w-[1px] h-[1px] rounded-full ${Math.random() > 0.5 ? 'bg-green-400 animate-ping' : 'bg-slate-600'}`}></div>
                            <div className={`w-[1px] h-[1px] rounded-full ${Math.random() > 0.5 ? 'bg-orange-400' : 'bg-slate-600'}`}></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CloudRouter;
