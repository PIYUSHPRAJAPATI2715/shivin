"use client";

import { motion } from "motion/react";
import { Heart, Clock, Eye, MessageSquare, ArrowRight, MapPin, Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomerDashboard() {
    return (
        <div className="space-y-12">
            {/* Welcome Banner */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-2xl shadow-slate-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                    <Building2 className="w-64 h-64 text-blue-600" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Bonjour, Alex.</h2>
                    <p className="text-slate-500 font-medium max-w-xl text-lg leading-relaxed">
                        Your property hunt is 65% complete. We found 3 new listings matching your "Luxury Apartment" criteria in Mumbai.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button className="h-12 px-8 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 group">
                            View New Matches <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <MetricCard icon={Heart} label="Shortlisted" value="12" desc="Properties saved" color="rose" />
                <MetricCard icon={Clock} label="Waitlist" value="2" desc="Active inquiries" color="amber" />
                <MetricCard icon={Eye} label="Impressions" value="48" desc="Listings viewed" color="blue" />
                <MetricCard icon={MessageSquare} label="Convos" value="3" desc="Direct chats" color="emerald" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Recent Activity */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 pl-4">Chronicle</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Price Drop", desc: "Altia Residences dropped by $25k", time: "2h ago", icon: Building2 },
                            { title: "Inspection Scheduled", desc: "Confirmed for Saturday, 11:00 AM", time: "5h ago", icon: Clock },
                            { title: "Verified Identity", desc: "L3 Verification completed successfully", time: "1d ago", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between group hover:border-blue-200 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                                        <p className="text-[10px] font-medium text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neighborhood Insight */}
                <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative flex flex-col justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">Market Intel</p>
                        <h3 className="text-2xl font-bold tracking-tight mb-4 leading-snug">BKC, Mumbai is seeing <br /> <span className="text-blue-400 italic">8% appreciation</span> this quarter.</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Based on your activity, we suggest looking at projects in North BKC for better rental yields.</p>
                    </div>
                    <div className="mt-12 pt-10 border-t border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-slate-300">Live Market Feed</span>
                        </div>
                        <Button variant="link" className="text-blue-400 text-xs font-bold p-0">Download Report</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, desc, color }: any) {
    const colors: any = {
        rose: "bg-rose-50 text-rose-600 shadow-rose-100",
        amber: "bg-amber-50 text-amber-600 shadow-amber-100",
        blue: "bg-blue-50 text-blue-600 shadow-blue-100",
        emerald: "bg-emerald-50 text-emerald-600 shadow-emerald-100"
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5 group"
        >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", colors[color])}>
                <Icon className="h-6 w-6" />
            </div>
            <p className="text-4xl font-black text-slate-900 leading-none mb-2">{value}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
            <p className="text-[10px] font-medium text-slate-300">{desc}</p>
        </motion.div>
    );
}
