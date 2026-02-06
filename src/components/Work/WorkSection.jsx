import { experienceData } from '../../data/experienceData';
import ClusterNode from './ClusterNode';
import NetworkTrunk from '../Shared/NetworkTrunk';
import CloudRouter from '../Shared/CloudRouter';

const WorkSection = () => {
    return (
        <section className="relative w-full min-h-screen pt-0 pb-32 bg-[#0B1120] overflow-hidden" id="work">
            {/* Background Texture - Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none active-grid-pattern"></div>

            {/* 1. Main VPC Connector Channel (The Big Tube) - Perfectly Aligned with Hero */}
            <div className="absolute inset-0 w-[95%] max-w-[1600px] mx-auto border-x-2 border-dashed border-slate-700/30 pointer-events-none z-0"></div>

            {/* 2. Network Trunk (Optical Fiber Connector) */}
            <NetworkTrunk />

            {/* 3. The Work Subnet (Inner Box) */}
            <div className="relative z-10 container mx-auto px-4 pt-32">
                {/* Router - Top Connection Point */}
                <div className="flex justify-center -mb-4 relative z-20">
                    <CloudRouter label="K8S_INGRESS_GW" direction="up" />
                </div>

                <div className="relative w-full max-w-[1400px] mx-auto border border-blue-500/20 bg-slate-900/20 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">

                    {/* Subnet Header */}
                    <div className="absolute top-6 left-6 md:left-8 px-3 py-1 bg-[#0B1120] border border-blue-500/30 rounded-full flex items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-blue-400 font-bold tracking-widest uppercase">
                            SUBNET: experience-cluster (k8s)
                        </span>
                    </div>

                    <div className="text-center mb-16 mt-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3">
                            Workload <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Orchestration</span>
                        </h2>
                        <div className="inline-block px-4 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-mono text-xs">
                            <span className="text-blue-500">$</span> kubectl get nodes --namespace=career
                        </div>
                    </div>

                    {/* Cluster Nodes Timeline */}
                    <div className="max-w-6xl mx-auto space-y-32">
                        {experienceData.map((node, index) => (
                            <ClusterNode key={node.id} node={node} index={index} />
                        ))}
                    </div>
                </div>

                {/* Router - Bottom Connection to Skills */}
                <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20">
                    <CloudRouter label="WORK_GATEWAY" direction="down" />
                </div>
            </div>

            {/* Bottom Trunk Connecting Work to Skills */}
            <NetworkTrunk className="bottom-0 left-0 right-0 h-32 z-0" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default WorkSection;
