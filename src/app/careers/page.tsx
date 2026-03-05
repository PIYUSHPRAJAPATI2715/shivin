"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock, Briefcase, Zap, Heart, Users, Globe, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
    {
        title: "Senior Frontend Engineer",
        dept: "Engineering",
        location: "Bangalore / Remote",
        type: "Full-time",
        icon: Code,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Product Manager – Growth",
        dept: "Product",
        location: "Mumbai",
        type: "Full-time",
        icon: TrendingUp,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Real Estate Partnership Lead",
        dept: "Business Development",
        location: "Delhi / Hybrid",
        type: "Full-time",
        icon: Users,
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "UX Designer – Mobile First",
        dept: "Design",
        location: "Remote",
        type: "Full-time",
        icon: Zap,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Content Strategist – Real Estate",
        dept: "Marketing",
        location: "Mumbai / Remote",
        type: "Full-time",
        icon: Globe,
        color: "bg-rose-50 text-rose-600",
    },
];

const perks = [
    { icon: Heart, title: "Health First", desc: "Full medical, dental & vision coverage for you and your family." },
    { icon: Globe, title: "Remote Friendly", desc: "Work from anywhere. We trust our team to get things done." },
    { icon: Zap, title: "Fast Growth", desc: "Rapid career advancement with clear, transparent growth paths." },
    { icon: Briefcase, title: "Stock Options", desc: "Be an owner. Every full-time employee gets ESOPs from Day 1." },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative bg-slate-950 pt-24 pb-40 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
                        alt="Team"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-slate-950" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-6"
                    >
                        <Briefcase className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Join the Team</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
                    >
                        Build the Future of<br />
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Real Estate
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg max-w-xl mx-auto mb-8"
                    >
                        We&apos;re a team of builders, dreamers, and domain experts. Come reshape how billions of people find their homes.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold">
                            See Open Roles <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="h-12 px-8 rounded-xl border-slate-700 text-white hover:bg-white/10 font-bold">
                            Life at Shiven
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Perks */}
            <section className="container mx-auto px-4 -mt-20 mb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {perks.map((perk, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-900/10 border border-slate-100 text-center group hover:-translate-y-1 transition-transform"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                                <perk.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{perk.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Culture */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-4">Our Culture</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                We build trust<br />
                                <span className="underline decoration-blue-500 underline-offset-4">every single day</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                At Shiven, we live by radical transparency. No useless process, no politics — just great work that impacts millions of users.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["200+ Team Members", "6 Cities", "4.8★ Glassdoor", "Series B Funded"].map((s, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                                        <p className="font-bold text-slate-900">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1580489167471-23055828849c?q=80&w=800&auto=format&fit=crop",
                            ].map((src, i) => (
                                <div key={i} className={`rounded-2xl overflow-hidden shadow-md ${i === 1 ? "mt-6" : i === 2 ? "-mt-6" : ""}`}>
                                    <img src={src} alt="Team" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section className="container mx-auto px-4 py-24">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">We are always looking for passionate individuals. Even if you don&apos;t see a role that fits, do reach out.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {openings.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${job.color}`}>
                                    <job.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-3 mt-1">
                                        <span className="text-xs text-slate-500 font-medium">{job.dept}</span>
                                        <div className="h-1 w-1 bg-slate-300 rounded-full" />
                                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                                        <div className="h-1 w-1 bg-slate-300 rounded-full" />
                                        <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                                    </div>
                                </div>
                            </div>
                            <Button className="bg-slate-900 hover:bg-blue-600 text-white rounded-xl transition-colors gap-2 shrink-0">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-500 mb-4">Don&apos;t see a role for you?</p>
                    <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 gap-2">
                        Send a General Application <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
