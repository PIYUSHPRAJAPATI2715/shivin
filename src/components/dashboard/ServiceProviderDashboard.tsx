"use client";

import { motion } from "motion/react";
import { HardHat, Wrench, Calendar, Star, DollarSign, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceProviderDashboard() {
    return (
        <div className="space-y-12">
            {/* Service Metrics Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <ServiceStat icon={Calendar} label="Bookings" value="08" desc="Scheduled this week" color="indigo" />
                <ServiceStat icon={Star} label="Rating" value="4.9" desc="From 128 reviews" color="amber" />
                <ServiceStat icon={DollarSign} label="Earnings" value="$5.2K" desc="Settlement pending" color="emerald" />
                <ServiceStat icon={Wrench} label="Projects" value="12" desc="Currently in progress" color="blue" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Job Queue */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Assignment Queue</h3>
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            {["Today", "This Week", "Archive"].map(tab => (
                                <button key={tab} className={cn(
                                    "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                    tab === "Today" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                                )}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <JobCard
                            title="Structural Audit - Phase 1"
                            location="Oberoi Esquire, Goregaon"
                            time="02:00 PM"
                            priority="High"
                            client="Premium Owner"
                        />
                        <JobCard
                            title="Electrical Sanity Check"
                            location="Lodha World Towers"
                            time="04:30 PM"
                            priority="Normal"
                            client="Agent Verified"
                        />
                        <JobCard
                            title="HVAC Maintenance"
                            location="Piramal Aranya"
                            time="Tomorrow"
                            priority="Low"
                            client="Associate Lead"
                        />
                    </div>
                </div>

                {/* Professional Identity */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-slate-900 rounded-[3rem] p-10 text-white space-y-8 relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 opacity-10">
                            <Wrench className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6">Expert Verification</p>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-4xl">🛠️</div>
                                <div>
                                    <h4 className="text-xl font-bold tracking-tight">Apex Engineering</h4>
                                    <p className="text-xs text-slate-400">Civil & Structural Experts</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                                    <span className="text-slate-500">License ID</span>
                                    <span>SH-992-ALPHA</span>
                                </div>
                                <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                                    <span className="text-slate-500">Service Coverage</span>
                                    <span>Multi-City (Elite)</span>
                                </div>
                            </div>
                            <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl shadow-blue-500/20">
                                Update Equipment List
                            </Button>
                        </div>
                    </div>

                    {/* Support Nexus */}
                    <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex items-center justify-between group cursor-pointer hover:bg-amber-100 transition-colors">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">Shiven Support</p>
                            <p className="font-bold text-slate-900">Dedicated Concierge</p>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                            <ArrowRight className="h-4 w-4 text-amber-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceStat({ icon: Icon, label, value, desc, color }: any) {
    const colors: any = {
        indigo: "bg-indigo-50 text-indigo-600",
        amber: "bg-amber-50 text-amber-600",
        emerald: "bg-emerald-50 text-emerald-600",
        blue: "bg-blue-50 text-blue-600"
    };

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5 transition-transform hover:scale-[1.02]">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", colors[color])}>
                <Icon className="h-6 w-6" />
            </div>
            <p className="text-4xl font-black text-slate-900 leading-none mb-2">{value}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 uppercase mb-1">{label}</p>
            <p className="text-[10px] font-medium text-slate-300">{desc}</p>
        </div>
    );
}

function JobCard({ title, location, time, priority, client }: any) {
    return (
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 transition-all group">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all shrink-0">
                    <MapPin className="h-5 w-5" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                            "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
                            priority === "High" ? "bg-rose-50 text-rose-600" :
                                priority === "Normal" ? "bg-blue-50 text-blue-600" :
                                    "bg-slate-100 text-slate-500"
                        )}>{priority} PRIORITY</span>
                        <span className="text-[10px] font-bold text-slate-300">{client}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">{title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{location}</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="text-left md:text-right">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Window</p>
                    <p className="text-sm font-bold text-slate-900">{time}</p>
                </div>
                <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-200 text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                    Start Mission
                </Button>
            </div>
        </div>
    );
}
