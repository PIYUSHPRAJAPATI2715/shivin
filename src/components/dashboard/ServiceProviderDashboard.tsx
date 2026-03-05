"use client";

import { motion } from "motion/react";
import { HardHat, Wrench, Calendar, Star, DollarSign, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceProviderDashboard() {
    return (
        <div className="max-w-7xl mx-auto space-y-8 p-6 md:p-8">
            {/* Service Metrics Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceStat icon={Calendar} label="Bookings" value="08" desc="Scheduled this week" color="indigo" />
                <ServiceStat icon={Star} label="Rating" value="4.9" desc="From 128 reviews" color="amber" />
                <ServiceStat icon={DollarSign} label="Earnings" value="$5.2K" desc="Settlement pending" color="emerald" />
                <ServiceStat icon={Wrench} label="Projects" value="12" desc="Currently in progress" color="blue" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job Queue */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 border-b border-transparent pb-1">Assignment Queue</h3>
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            {["Today", "This Week", "Archive"].map(tab => (
                                <button key={tab} className={cn(
                                    "px-4 py-1.5 text-xs font-bold rounded-lg transition-all",
                                    tab === "Today" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
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
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6 relative overflow-hidden shadow-xl">
                        <div className="absolute -bottom-10 -right-10 opacity-10">
                            <Wrench className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Expert Verification</p>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">🛠️</div>
                                <div>
                                    <h4 className="text-xl font-bold tracking-tight">Apex Engineering</h4>
                                    <p className="text-xs text-slate-400">Civil & Structural Experts</p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                                    <span className="text-slate-400">License ID</span>
                                    <span>SH-992-ALPHA</span>
                                </div>
                                <div className="flex items-center justify-between text-xs font-bold border-b border-white/5 pb-2">
                                    <span className="text-slate-400">Service Coverage</span>
                                    <span>Multi-City (Elite)</span>
                                </div>
                            </div>
                            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold rounded-xl shadow-lg shadow-blue-500/20">
                                Update Equipment List
                            </Button>
                        </div>
                    </div>

                    {/* Support Nexus */}
                    <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex items-center justify-between group cursor-pointer hover:bg-amber-100 transition-colors shadow-sm">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">Shiven Support</p>
                            <p className="font-bold text-slate-900">Dedicated Concierge</p>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
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
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", colors[color])}>
                    <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900 leading-none">{value}</p>
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900 mb-0.5">{label}</p>
                <p className="text-xs font-medium text-slate-500">{desc}</p>
            </div>
        </div>
    );
}

function JobCard({ title, location, time, priority, client }: any) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-200 hover:shadow-sm transition-all group shadow-sm">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all shrink-0">
                    <MapPin className="h-5 w-5" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={cn(
                            "text-[10px] font-bold px-2 py-0.5 rounded-md",
                            priority === "High" ? "bg-rose-50 text-rose-600" :
                                priority === "Normal" ? "bg-blue-50 text-blue-600" :
                                    "bg-slate-100 text-slate-600"
                        )}>{priority}</span>
                        <span className="text-xs font-semibold text-slate-400">{client}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{location}</p>
                </div>
            </div>
            <div className="flex flex-col sm:items-end gap-3 mt-2 sm:mt-0">
                <div className="text-left sm:text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Window</p>
                    <p className="text-sm font-bold text-slate-900">{time}</p>
                </div>
                <Button variant="outline" className="h-10 px-5 rounded-lg border-slate-200 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all">
                    Start Mission
                </Button>
            </div>
        </div>
    );
}
