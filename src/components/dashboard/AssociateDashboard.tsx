"use client";

import { motion } from "motion/react";
import { Handshake, Network, Globe, PieChart, ArrowUpRight, Award, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AssociateDashboard() {
    return (
        <div className="space-y-12">
            {/* Network Overview */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Network className="w-80 h-80 text-blue-400" />
                </div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-md">
                            <Handshake className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Global Associate Elite</span>
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter italic">NEXUS <span className="text-blue-500 not-italic">NETWORK</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">You are among the top 5% of strategic associates. Your network has generated $4.2M in volume this quarter.</p>
                        <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/20">
                            Expand Network <Zap className="ml-2 h-4 w-4 fill-white" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Active Nodes", val: "142", icon: Globe },
                            { label: "Revenue Share", val: "15%", icon: PieChart },
                            { label: "Rank", val: "Platinum", icon: Award },
                            { label: "Trust Score", val: "99.8", icon: ShieldCheck }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <stat.icon className="h-5 w-5 text-blue-400 mb-4" />
                                <p className="text-2xl font-black tracking-tight">{stat.val}</p>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Lead Pipeline */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-slate-900">Affiliate Pipeline</h3>
                    <div className="space-y-4">
                        <PipelineRow name="Luxe Ventures" type="Corporate" volume="$1.2M" status="Streaming" color="blue" />
                        <PipelineRow name="Prime Estates" type="Brokerage" volume="$850K" status="Ready" color="emerald" />
                        <PipelineRow name="Horizon Capital" type="Investment" volume="$2.1M" status="Negotiating" color="amber" />
                    </div>
                    <Button variant="outline" className="w-full h-14 border-slate-100 text-slate-900 font-bold rounded-2xl">Manage All Affiliates</Button>
                </div>

                {/* Opportunity Alerts */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-slate-900">Global Opportunities</h3>
                    <div className="bg-white rounded-[3rem] border border-slate-100 p-10 space-y-8 shadow-2xl shadow-slate-900/5">
                        {[
                            { title: "Commercial Hub Expansion", city: "London, UK", bounty: "2.5% Bonus", tag: "High Priority" },
                            { title: "Beachfront Portfolio", city: "Dubai, UAE", bounty: "Exclusive Rights", tag: "Limited" }
                        ].map((opp, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{opp.tag}</span>
                                        <div className="h-1 w-1 rounded-full bg-slate-300" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{opp.city}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{opp.title}</h4>
                                    <p className="text-xs font-bold text-amber-600">{opp.bounty}</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <ArrowUpRight className="h-5 w-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PipelineRow({ name, type, volume, status, color }: any) {
    const colors: any = {
        blue: "bg-blue-500",
        emerald: "bg-emerald-500",
        amber: "bg-amber-500"
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between hover:shadow-xl hover:shadow-slate-900/5 transition-all">
            <div className="flex items-center gap-4">
                <div className={cn("w-2 h-10 rounded-full", colors[color])} />
                <div>
                    <p className="text-sm font-bold text-slate-900">{name}</p>
                    <p className="text-[10px] font-medium text-slate-400">{type}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-black text-slate-900">{volume}</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-tight">{status}</p>
            </div>
        </div>
    );
}
