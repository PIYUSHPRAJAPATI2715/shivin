"use client";

import { motion } from "motion/react";
import { Building2, Users, TrendingUp, DollarSign, ArrowUpRight, PlusCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AgentDashboard() {
    return (
        <div className="space-y-12">
            {/* Portfolio Overview */}
            <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Operational Analytics</p>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-none italic">PERFORMANCE <span className="not-italic text-blue-600">ALPHA</span></h2>
                </div>
                <Button className="h-14 px-8 bg-slate-900 text-white font-bold rounded-2xl shadow-xl flex items-center gap-3">
                    <PlusCircle className="h-5 w-5" /> Initialize New Listing
                </Button>
            </div>

            {/* Agent Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AgentMetric icon={Building2} label="Inventory" value="24" trend="+3 this week" />
                <AgentMetric icon={Users} label="Prospects" value="156" trend="+12% conversion" />
                <AgentMetric icon={DollarSign} label="Pipeline" value="$18.4M" trend="High velocity" />
                <AgentMetric icon={TrendingUp} label="Commission" value="$42.5K" trend="Paid: $38K" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Active Listings Grid */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between px-4">
                        <h3 className="text-xl font-bold text-slate-900">Portfolio Focus</h3>
                        <Button variant="link" className="text-blue-600 text-xs font-bold font-display">View Global Inventory</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ListingAssetCard title="Skyline View Penthouse" location="Lower Parel" status="Active" views="1.2k" />
                        <ListingAssetCard title="Zen Garden Retreat" location="Bandra West" status="Pending" views="840" />
                        <ListingAssetCard title="The Glass House" location="Juhu" status="Sold" views="4.5k" />
                        <ListingAssetCard title="Industrial Loft" location="Wadala" status="Active" views="320" />
                    </div>
                </div>

                {/* Immediate Compliance Tasks */}
                <div className="space-y-8">
                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-900/5 space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">Priority <br /> <span className="text-rose-500">Action Required</span></h3>

                        <div className="space-y-6">
                            <TaskItem icon={AlertCircle} label="KYC Renewal" desc="Identity verification for Client #882 expires in 48h." color="text-rose-500" bg="bg-rose-50" />
                            <TaskItem icon={CheckCircle2} label="Title Deed Sync" desc="Property listing #009 needs digital title attachment." color="text-blue-500" bg="bg-blue-50" />
                            <TaskItem icon={AlertCircle} label="Lead Response" desc="3 premium inquiries pending for more than 4 hours." color="text-amber-500" bg="bg-amber-50" />
                        </div>

                        <Button className="w-full h-14 bg-slate-50 text-slate-900 hover:bg-slate-100 rounded-2xl font-black uppercase tracking-widest text-[10px]">
                            Batch Process Tasks
                        </Button>
                    </div>

                    <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Shiven Prime Status</p>
                        <h4 className="text-xl font-bold leading-tight">Elite Agent status achieved. You have 4 referral slots open.</h4>
                        <Button className="w-full h-12 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold border-none">Invite Associate</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AgentMetric({ icon: Icon, label, value, trend }: any) {
    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5">
            <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-800">
                    <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-tight">{trend}</p>
            </div>
            <p className="text-3xl font-black text-slate-900 mb-1">{value}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
        </div>
    );
}

function ListingAssetCard({ title, location, status, views }: any) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 group hover:shadow-2xl hover:shadow-slate-900/5 transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    status === "Active" ? "bg-green-50 text-green-600" :
                        status === "Pending" ? "bg-amber-50 text-amber-600" :
                            "bg-blue-50 text-blue-600"
                )}>
                    {status}
                </div>
                <div className="flex items-center gap-1 text-slate-300 text-[10px] font-bold">
                    <TrendingUp className="h-3 w-3" /> {views}
                </div>
            </div>
            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
            <p className="text-xs text-slate-400 font-medium">{location}</p>
        </div>
    );
}

function TaskItem({ icon: Icon, label, desc, color, bg }: any) {
    return (
        <div className="flex items-start gap-4">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", bg, color)}>
                <Icon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
                <p className="text-sm font-bold text-slate-900 leading-none">{label}</p>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
