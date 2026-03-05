"use client";

import { motion } from "motion/react";
import { Heart, Clock, Eye, MessageSquare, ArrowRight, MapPin, Building2, ShieldCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomerDashboard() {
    return (
        <div className="max-w-7xl mx-auto space-y-8 p-6 md:p-8">
            {/* Welcome Banner */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                    <Building2 className="w-64 h-64 text-blue-500" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Bonjour, Alex.</h2>
                    <p className="text-slate-300 font-medium max-w-xl text-base leading-relaxed">
                        Your property hunt is 65% complete. We found 3 new listings matching your "Luxury Apartment" criteria in Mumbai.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 group">
                            View New Matches <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard icon={Heart} label="Shortlisted" value="12" desc="Properties saved" color="rose" />
                <MetricCard icon={Clock} label="Waitlist" value="2" desc="Active inquiries" color="amber" />
                <MetricCard icon={Eye} label="Impressions" value="48" desc="Listings viewed" color="blue" />
                <MetricCard icon={MessageSquare} label="Convos" value="3" desc="Direct chats" color="emerald" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">Recent Activity</h3>
                        <Button variant="ghost" className="text-blue-600 text-sm font-semibold hover:bg-blue-50">View All</Button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: "Price Drop Alert", desc: "Altia Residences dropped by ₹2.5L", time: "2h ago", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
                            { title: "Inspection Scheduled", desc: "Confirmed for Saturday, 11:00 AM", time: "5h ago", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
                            { title: "Identity Verified", desc: "L3 Verification completed successfully", time: "1d ago", icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-50" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:border-blue-100 hover:shadow-sm transition-all sm:flex-row flex-col sm:items-center items-start">
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", item.bg, item.color)}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                                </div>
                                <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neighborhood Insight */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUpIcon />
                            <p className="text-xs font-black uppercase tracking-widest text-blue-600">Market Intel</p>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900 leading-snug">
                            BKC, Mumbai is seeing <br /> <span className="text-blue-600">8% appreciation</span> this quarter.
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Based on your activity, we suggest looking at upcoming projects in North BKC for better rental yields.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                            Download Area Report
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrendingUpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    )
}

function MetricCard({ icon: Icon, label, value, desc, color }: any) {
    const colors: any = {
        rose: "bg-rose-50 text-rose-600",
        amber: "bg-amber-50 text-amber-600",
        blue: "bg-blue-50 text-blue-600",
        emerald: "bg-emerald-50 text-emerald-600"
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", colors[color])}>
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 leading-none">{value}</h3>
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900 mb-0.5">{label}</p>
                <p className="text-xs font-medium text-slate-500">{desc}</p>
            </div>
        </div>
    );
}
