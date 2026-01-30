import { motion } from 'framer-motion';

const SummaryPanel = () => {
    return (
        <motion.div
            className="col-span-12 md:col-span-7 relative bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-sm border border-white/50 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <div className="mb-4">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase">
                    System Logs
                </span>
            </div>

            <div className="prose prose-slate prose-lg max-w-none">
                <p className="font-medium text-slate-700 leading-relaxed mb-4">
                    Helping businesses leverage <span className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">AI</span> and <span className="text-sky-600 font-bold bg-sky-50 px-1 rounded">cloud infrastructure</span> to automate workflows, reduce operational costs, and accelerate time-to-market.
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                    Cloud Engineer & SRE with <span className="font-semibold text-slate-800">4+ years</span> of hands-on experience building scalable GCP infrastructure for <span className="font-semibold text-slate-800">1000+ SDM stores</span> across Canada.
                </p>
                <p className="text-slate-500 text-sm">
                    Currently available for projects involving AI integration, cloud engineering, automation, and full-stack AI applications.
                </p>
            </div>
        </motion.div>
    );
};

export default SummaryPanel;
