"use client";

import { motion } from "motion/react";
import { ShieldCheck, Eye, Lock, Clock, AlertCircle, Mail } from "lucide-react";

const sections = [
    {
        icon: Eye,
        title: "Information We Collect",
        content: [
            "Personal identification information (name, email, phone number) provided during registration.",
            "Property search preferences, saved listings, and inquiry history.",
            "Device and usage data including IP address, browser type, and pages visited.",
            "Payment information processed securely through our certified payment gateway (we do not store card details).",
        ],
    },
    {
        icon: Lock,
        title: "How We Use Your Information",
        content: [
            "To personalise your property search and recommendation experience.",
            "To connect you with relevant agents, brokers, or property owners.",
            "To send you transactional communications and, with consent, marketing updates.",
            "To analyse and improve the functionality and safety of our platform.",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Data Security",
        content: [
            "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
            "We conduct quarterly security audits and annual penetration testing.",
            "Access to user data is restricted to authorized personnel on a need-to-know basis.",
            "We are ISO 27001 certified and compliant with India's Personal Data Protection Bill.",
        ],
    },
    {
        icon: AlertCircle,
        title: "Your Rights",
        content: [
            "Right to access the personal data we hold about you at any time.",
            "Right to correct inaccurate or outdated information in your profile.",
            "Right to request deletion of your account and associated data.",
            "Right to withdraw consent for marketing communications via your account settings.",
        ],
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-6">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Your Privacy Matters</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-extrabold text-white mb-4">
                        Privacy Policy
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-xl mx-auto text-base">
                        We are committed to protecting your personal information. This policy explains what data we collect, how we use it, and the controls you have.
                    </motion.p>
                    <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Last updated: March 1, 2026</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="space-y-6">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <section.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 mt-8 text-white">
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">Have a Privacy Question?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Our Data Protection Officer is available to answer any questions about your personal data.
                            </p>
                            <p className="text-blue-400 font-semibold text-sm">privacy@shiven.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
