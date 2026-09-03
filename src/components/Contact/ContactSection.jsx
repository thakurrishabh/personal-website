import { motion } from 'framer-motion';
import { useState } from 'react';
import CloudRouter from '../Shared/CloudRouter';
import NetworkTrunk from '../Shared/NetworkTrunk';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const ContactSection = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!ACCESS_KEY) {
            setStatus('error');
            setError('Form is not wired yet. Add VITE_WEB3FORMS_ACCESS_KEY in Vercel.');
            return;
        }

        const form = e.target;
        const payload = {
            access_key: ACCESS_KEY,
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value || 'Website contact',
            message: form.message.value,
            from_name: 'rishabh-singh-thakur.vercel.app',
        };

        setStatus('sending');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('sent');
                form.reset();
            } else {
                setStatus('error');
                setError(data.message || 'Send failed. Try email instead.');
            }
        } catch {
            setStatus('error');
            setError('Network error. Try email instead.');
        }
    };

    return (
        <section className="relative w-full min-h-[80vh] pt-0 pb-32 bg-[#0B1120] overflow-hidden" id="contact">
            <NetworkTrunk />

            <div className="relative z-10 container mx-auto px-4 pt-24">
                <div className="flex justify-center -mb-4 relative z-20">
                    <CloudRouter label="INGRESS_GATEWAY" direction="up" />
                </div>

                <div className="relative w-full max-w-[1400px] mx-auto border border-emerald-500/20 bg-slate-900/20 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">
                    <div className="absolute top-6 left-6 md:left-8 px-3 py-1 bg-[#0B1120] border border-emerald-500/30 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">
                            SUBNET: inbound-mail
                        </span>
                    </div>

                    <div className="text-center mb-12 mt-14">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-3">
                            Open a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">ticket</span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                            Recruiter, collab, or project — this lands in my inbox.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-4 space-y-4">
                            <a
                                href="mailto:rishabh.4082@gmail.com"
                                className="block bg-slate-900/70 border border-slate-700/60 rounded-xl p-5 hover:border-emerald-400/50 transition-colors"
                            >
                                <div className="text-[10px] font-mono text-emerald-400 tracking-widest mb-1">SMTP</div>
                                <div className="text-white font-semibold">rishabh.4082@gmail.com</div>
                            </a>
                            <a
                                href="https://linkedin.com/in/rishabh-singh-thakur-ba3bb4168"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-slate-900/70 border border-slate-700/60 rounded-xl p-5 hover:border-sky-400/50 transition-colors"
                            >
                                <div className="text-[10px] font-mono text-sky-400 tracking-widest mb-1">LINKEDIN</div>
                                <div className="text-white font-semibold">rishabh-singh-thakur</div>
                            </a>
                            <a
                                href="https://github.com/thakurrishabh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-slate-900/70 border border-slate-700/60 rounded-xl p-5 hover:border-slate-400/50 transition-colors"
                            >
                                <div className="text-[10px] font-mono text-slate-400 tracking-widest mb-1">GITHUB</div>
                                <div className="text-white font-semibold">thakurrishabh</div>
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Name</span>
                                    <input required name="name" type="text" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-400" />
                                </label>
                                <label className="block">
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email</span>
                                    <input required name="email" type="email" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-400" />
                                </label>
                            </div>
                            <label className="block">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Subject</span>
                                <input name="subject" type="text" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-400" />
                            </label>
                            <label className="block">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Message</span>
                                <textarea required name="message" rows="6" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-400 resize-y" />
                            </label>
                            <button type="submit" disabled={status === 'sending'} className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 disabled:opacity-60 transition-colors">
                                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send message'}
                            </button>
                            {status === 'sent' && (
                                <p className="text-emerald-400 text-sm font-medium">Message delivered. I will reply from email.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-rose-400 text-sm">{error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
