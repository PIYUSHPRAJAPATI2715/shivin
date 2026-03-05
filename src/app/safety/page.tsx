"use client";

import { motion } from "motion/react";
import { ShieldCheck, AlertTriangle, Eye, Lock, Phone, Mail, Flag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
    {
        icon: ShieldCheck,
        title: "Verified Listings",
        desc: "Every property goes through a 25-point verification process. We check ownership documents, RERA registration, and property legality before activation.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: Eye,
        title: "Fraud Detection",
        desc: "Our AI-powered fraud detection engine monitors suspicious listing patterns and flags anomalies in real time to protect our users.",
        color: "bg-purple-50 text-purple-600",
    },
    {
        icon: Lock,
        title: "Data Protection",
        desc: "Your personal information is encrypted and never sold to third parties. Agents can only contact you if you have expressed interest.",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: Flag,
        title: "Report & Action",
        desc: "Users can report suspicious listings or behavior in one click. Our safety team responds and acts within 24 hours.",
        color: "bg-amber-50 text-amber-600",
    },
];

const tips = [
    "Never pay full advance payment without physically visiting the property.",
    "Always verify ownership documents independently through a registered lawyer.",
    "Be cautious of listings priced significantly below market value.",
    "Do not share OTPs, passwords, or sensitive financial information with agents.",
    "Use Shiven's in-app messaging for all communications to maintain a record.",
    "Report any agent who asks to carry out transactions outside the platform.",
];

export default function SafetyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 mb-6">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Shiven Safety Promise</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-extrabold text-white mb-4 leading-tight">
                        Trust &amp; Safety
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-xl mx-auto text-base">
                        Your security is our top priority. Learn how we protect you and how you can protect yourself on the Shiven platform.
                    </motion.p>
                </div>
            </section>

            {/* Safety Pillars */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${p.color}`}>
                                <p.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base mb-2">{p.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Safety Tips */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold text-slate-900">Tips to Stay Safe</h2>
                        </div>
                        <div className="space-y-3">
                            {tips.map((tip, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4">
                                    <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-sm text-slate-700 leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-rose-50 border border-rose-200 rounded-3xl p-8">
                            <Flag className="w-8 h-8 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Report a Problem</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Encountered a suspicious listing, fraudulent agent, or unsafe behaviour? Our safety team responds within 24 hours.
                            </p>
                            <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl gap-2">
                                <Flag className="w-4 h-4" />
                                Submit a Report
                            </Button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 rounded-3xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-3">Safety Helpline</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Available Monday–Saturday, 9 AM to 8 PM IST.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Safety Hotline</p>
                                        <p className="font-bold text-white">1800-419-9099</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Email</p>
                                        <p className="font-bold text-white">safety@shiven.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
