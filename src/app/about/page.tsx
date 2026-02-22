"use client";

import { motion } from "motion/react";
import { Building2, Users, Target, Award, ArrowRight, ShieldCheck, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Immersive Hero Header */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Corporate"
                        className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-md mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Our Legacy & Vision</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic leading-none"
                    >
                        SHIVEN <br />
                        <span className="text-blue-500">EXCELLENCE</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto"
                    >
                        Redefining the architecture of real estate transactions through transparency, technology, and trust.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-50 rounded-full -z-10" />
                        <span className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            We believe every door <br />
                            opens a <span className="underline decoration-blue-500 underline-offset-8">new chapter</span>.
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            Founded in 2010, Shiven Real Estate emerged from a simple observation: the journey to finding a home was filled with friction and uncertainty. We set out to build a platform that prioritizes the human experience.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Uncompromising property verification standards",
                                "Transparent pricing with no hidden broker costs",
                                "AI-powered match-making for faster occupancy",
                                "Dedicated legal support for every transaction"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    <p className="text-slate-800 font-bold text-sm tracking-tight">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="space-y-6 pt-12">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6199f7a096?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Property" />
                            </div>
                            <div className="bg-blue-600 rounded-[2rem] p-8 text-white">
                                <p className="text-4xl font-black mb-1">15+</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years Experience</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
                                <p className="text-4xl font-black mb-1">1M+</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Active Users</p>
                            </div>
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1600607687940-4e2ade3316d6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Property" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="py-32 bg-slate-50">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-20 tracking-tight leading-tight">Driven by <span className="text-blue-600">Core Values</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Absolute Integrity",
                                desc: "We operate with radical transparency in every transaction, ensuring both sides have complete information.",
                                color: "bg-blue-500"
                            },
                            {
                                icon: Heart,
                                title: "Human Centric",
                                desc: "Behind every listing is a person, a family, or an entrepreneur. We never forget the human element.",
                                color: "bg-indigo-500"
                            },
                            {
                                icon: Target,
                                title: "Precision Tech",
                                desc: "We leverage data science to provide the most accurate property valuations and neighborhood insights.",
                                color: "bg-slate-900"
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${value.color} text-white flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`}>
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-24 container px-4 md:px-6">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                    </div>

                    <div className="flex-1 space-y-8 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                            Join the <br />
                            <span className="text-blue-500 italic">Shiven Revolution</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl">
                            We&apos;re always looking for brilliant minds to join our journey in transforming the real estate landscape.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/careers">
                                <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-bold group">
                                    View Openings <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl border-slate-700 text-white hover:bg-white/10 font-bold">
                                    Partner With Us
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 relative z-10 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden border-2 border-slate-800">
                                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : i === 3 ? '1519085360753-af0119f7cbe7' : '1580489167471-23055828849c'}?q=80&w=1000&auto=format&fit=crop`} className="w-full h-full object-cover" alt="Team" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
