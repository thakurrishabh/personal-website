import { motion } from 'framer-motion';
import PodProject from './PodProject';

// SimpleIcons slug mapping helper
// SimpleIcons slug mapping helper
const getTechSlug = (tech) => {
    const map = {
        'C++': 'cplusplus',
        'C#': 'csharp',
        '.NET': 'dotnet',
        'Node.js': 'nodedotjs',
        'React': 'react',
        'Vue': 'vue',
        'Angular': 'angular',
        'Python': 'python',
        'GCP': 'googlecloud',
        'AWS': 'amazonaws',
        'Azure': 'azure',
        'Docker': 'docker',
        'Kubernetes': 'kubernetes',
        'K8s': 'kubernetes',
        'GitLab': 'gitlab',
        'GitLab CI': 'gitlab',
        'Ansible': 'ansible',
        'Terraform': 'terraform',
        'Prometheus': 'prometheus',
        'Grafana': 'grafana',
        'MySQL': 'mysql',
        'PostgreSQL': 'postgresql',
        'Redis': 'redis',
        'Mongo': 'mongodb',
        'Flutter': 'flutter',
        'Firebase': 'firebase',
        'Supabase': 'supabase',
        'Stripe': 'stripe',
        'OpenAI': 'openai',
        'OpenAI API': 'openai',
        'Gemini': 'googlegemini',
        'Gemini API': 'googlegemini',
        'Gemini Voice': 'googlegemini',
        'Claude': 'anthropic',
        'Claude Code': 'anthropic',
        'Vercel': 'vercel',
        'Netlify': 'netlify',
        'Linux': 'linux',
        'Ubuntu': 'ubuntu',
        'Bash': 'gnubash',
        'Shell': 'gnubash',
        'Scripting': 'gnubash',
        'Nginx': 'nginx',
        'Istio': 'istio',
        'Helm': 'helm',
        'Figma': 'figma',
        'Tailwind': 'tailwindcss',
        'HTML': 'html5',
        'CSS': 'css3',
        'JavaScript': 'javascript',
        'TypeScript': 'typescript',
        'Flask': 'flask',
        'Bootstrap': 'bootstrap',
        'Azure AD': 'microsoftazure',
        'FFmpeg': 'ffmpeg',
        'Daytona': 'docker', // Proxy
        'Lovable': 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=128', // Official Logo via Favicon
        'Lovable.dev': 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=128',
        'Manim': 'python', // Fallback
        'Workload Identity': 'googlecloud',
        'CloudSQL': 'googlecloud',
        'PubSub': 'googlecloud',
        'Cloud Functions': 'googlecloud',
        'Secret Manager': 'googlecloud',
        'MIG Runners': 'gitlab',
        'Kubevirt': 'kubernetes', // Proxy
        'Legacy Migration': 'ibm', // generic
        'Pilot Leadership': 'crowdsource', // generic
        'Jsonnet': 'json',
        'RenderMuseAI': 'robot', // Custom
        'Imagen': 'googlegemini', // Using Gemini logo as requested
        'GPT-4o': 'openai',
        'GPT-4o-mini TTS': 'openai',
        'Cloud Run': 'googlecloud',
        'API': 'postman', // Or bruno, swagger
        'CICD': 'githubactions', // Or gitlab
        'IBM MQ': 'ibm',
        'VPC': 'googlecloud',
        'DNS': 'cloudflare', // or googlecloud
        'GitHub Copilot': 'githubcopilot',
        'Microsoft Playwright': 'playwright',
        'Playwright': 'playwright'
    };

    // Default to lowercase if not found, handle spaces
    return map[tech] || tech.toLowerCase().replace(/\s+/g, '');
};

const TechBadge = ({ tech }) => {
    const slug = getTechSlug(tech);
    const isUrl = slug.startsWith('http');

    // Use slug as URL if valid http link, otherwise use SimpleIcons
    const iconUrl = isUrl ? slug : `https://cdn.simpleicons.org/${slug}/3b82f6`;

    return (
        <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-sm group-hover:border-blue-500/50 transition-colors">
                <img
                    src={iconUrl}
                    alt={tech}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}
                />
                {/* Fallback Text if Image Fails */}
                <span className="hidden text-[10px] font-bold text-slate-500 uppercase">{tech.charAt(0)}</span>
            </div>
            <span className="text-xs font-medium text-slate-400 group-hover:text-blue-300 transition-colors hidden md:block">{tech}</span>
        </div>
    );
};


const ClusterNode = ({ node, index }) => {
    // Aggregate unique skills from Node and all Pods
    const allSkills = new Set(node.skills || []);
    if (node.pods) {
        node.pods.forEach(pod => {
            if (pod.metrics) {
                pod.metrics.forEach(skill => allSkills.add(skill));
            }
        });
    }
    const uniqueSkills = Array.from(allSkills);

    return (
        <motion.div
            className="relative md:ml-[25%]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Timeline Connector Line (Left side) */}
            <div className={`absolute -left-[30px] md:-left-[41px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent z-0 ${index === 0 ? 'top-10' : ''}`}></div>

            {/* Sticky Timeline Dot */}
            <div className="absolute -left-[38px] md:-left-[49px] top-0 bottom-0 z-20 pointer-events-none">
                <div className="sticky top-36">
                    <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-8">

                {/* Node Metadata (Left Sidebar) */}
                <div className="md:w-[22%] md:absolute md:right-[calc(100%+60px)] md:top-0 md:h-full md:text-right pt-6 w-full text-left flex flex-col">
                    <div className="sticky top-32">
                        <div className="inline-block px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-xs font-mono text-blue-300 mb-2">
                            {node.period}
                        </div>
                        <h2 className="text-xl font-black text-slate-100 tracking-tight leading-tight mb-1">
                            {node.role}
                        </h2>
                        <div className="text-slate-400 font-medium text-sm mt-1">
                            {node.company}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 font-mono uppercase tracking-widest mb-8">{node.location}</div>

                        {/* Aggregated Skills - Grid Box */}
                        {uniqueSkills.length > 0 && (
                            <div className="flex flex-col gap-3 md:items-end mt-4">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Stack Components</h4>
                                <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 grid grid-cols-1 xl:grid-cols-2 gap-3 w-full md:w-[280px] backdrop-blur-sm shadow-inner">
                                    {uniqueSkills.map(skill => (
                                        <div key={skill} className="flex justify-start">
                                            <TechBadge tech={skill} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Node Container (Visual Representation) */}
                <div className="flex-[1.5] w-full mt-4 md:mt-0">
                    <div className="relative bg-slate-950/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-1 shadow-2xl overflow-hidden">
                        {/* Server Rack Header */}
                        <div className="h-8 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 justify-between">
                            <span className="text-[10px] font-mono text-slate-500">{node.id} :: {node.status}</span>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                            </div>
                        </div>

                        {/* Pods Grid inside Node */}
                        <div className="p-4 grid grid-cols-1 gap-6">
                            {node.pods.map((pod) => (
                                <div key={pod.id} className="relative">
                                    <div className="w-full">
                                        <PodProject pod={pod} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Node Footer Decoration */}
                        <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ClusterNode;
