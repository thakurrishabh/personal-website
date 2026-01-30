import { motion } from 'framer-motion';

const GatewayIcon = ({ icon, href, label, color, delay }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
    >
        {/* Connector Line to Edge */}
        <div className="w-8 h-[2px] bg-slate-300 group-hover:bg-slate-400 transition-colors mr-2"></div>

        {/* Icon Container */}
        <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center shadow-md relative z-10 transition-transform group-hover:scale-110`}>
            {icon}
        </div>

        {/* Tooltip Label */}
        <span className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
        </span>
    </motion.a>
);

const EdgeGateways = () => {
    return (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] flex flex-col gap-6 pointer-events-auto z-30">
            {/* GitHub */}
            <GatewayIcon
                href="https://github.com/thakurrishabh"
                label="GitHub (Codebase)"
                color="bg-slate-900"
                delay={1.0}
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
            />
            {/* LinkedIn */}
            <GatewayIcon
                href="https://linkedin.com/in/rishabh-singh-thakur-ba3bb4168"
                label="LinkedIn (Network)"
                color="bg-blue-600"
                delay={1.1}
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
            />
            {/* Email */}
            <GatewayIcon
                href="mailto:rishabh.4082@gmail.com"
                label="Email (Contact)"
                color="bg-red-500"
                delay={1.2}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
            {/* Blog */}
            <GatewayIcon
                href="https://dev.to/thakurrishabh"
                label="Blog (Dev.to)"
                color="bg-slate-800"
                delay={1.3}
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .77-.07 1.1-.22.31-.15.56-.37.74-.68.18-.31.27-.69.27-1.13 0-.48-.12-.9-.37-1.26-.25-.36-.62-.65-1.1-.86zM24 4.5v15c0 .85-.68 1.5-1.5 1.5h-21C.67 21 0 20.35 0 19.5v-15C0 3.65.67 3 1.5 3h21c.83 0 1.5.65 1.5 1.5zM7.76 17.55c.34-.14.64-.34.88-.61.27-.29.47-.64.6-1.04.13-.41.2-.84.2-1.3 0-.54-.08-1.03-.23-1.47-.16-.44-.41-.81-.74-1.11-.34-.31-.77-.52-1.28-.65-.51-.12-1.13-.19-1.85-.19l-2.6.05V19h3.04c.59 0 1.09-.07 1.5-.22.42-.14.81-.35 1.18-.62.37-.28.66-.62.88-1.02.21-.4.32-.87.32-1.39 0-.43-.09-.83-.26-1.19-.18-.37-.44-.69-.79-.95zm4.07 1.53c.12-.13.2-.33.2-.59 0-.25-.07-.46-.2-.6-.13-.13-.32-.2-.59-.2-.25 0-.45.06-.57.19-.13.13-.19.33-.19.59 0 .27.06.47.19.6.13.13.32.19.57.19.27 0 .47-.06.59-.19zm1.75-2.09c.27-.29.4-.66.4-1.11 0-.44-.13-.8-.39-1.09-.26-.29-.63-.43-1.1-.43-.48 0-.85.15-1.11.43-.26.29-.39.65-.39 1.1 0 .44.13.8.39 1.09.26.29.62.43 1.09.43.49 0 .86-.14 1.12-.42zm2.84-2.18c.25.32.37.74.37 1.25 0 .52-.12.93-.37 1.24-.25.31-.63.46-1.14.46-.51 0-.9-.15-1.15-.46-.25-.32-.37-.73-.37-1.25 0-.52.12-.93.37-1.25.26-.31.64-.47 1.16-.47.51 0 .88.16 1.13.48zm-6.28 4.2h1.66v-6.38h-1.66v6.38zm7.39 0h1.66v-6.38h-1.66v6.38z" /></svg>}
            />
        </div>
    );
};

export default EdgeGateways;
