"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    User, Briefcase, ShieldCheck, HardHat,
    LayoutDashboard, Bell, Settings, LogOut,
    ChevronRight, Search, Menu, X
} from "lucide-react";
import { CustomerDashboard } from "@/components/dashboard/CustomerDashboard";
import { AgentDashboard } from "@/components/dashboard/AgentDashboard";
import { AssociateDashboard } from "@/components/dashboard/AssociateDashboard";
import { ServiceProviderDashboard } from "@/components/dashboard/ServiceProviderDashboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "customer" | "agent" | "associate" | "provider";

export default function DashboardPage() {
    const [role, setRole] = useState<Role>("customer");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const roles: { id: Role; label: string; icon: any }[] = [
        { id: "customer", label: "Customer", icon: User },
        { id: "agent", label: "Agent / Staff", icon: Briefcase },
        { id: "associate", label: "Associate", icon: ShieldCheck },
        { id: "provider", label: "Provider", icon: HardHat },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white transition-transform duration-300 lg:relative lg:translate-x-0",
                !isSidebarOpen && "-translate-x-full lg:w-20"
            )}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-10">
                        <div className={cn("flex items-center gap-3", !isSidebarOpen && "lg:hidden")}>
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black italic">S</div>
                            <span className="text-xl font-bold tracking-tight">Shiven Nexus</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <nav className="flex-1 space-y-2">
                        <SidebarItem icon={LayoutDashboard} label="Overview" active={true} collapsed={!isSidebarOpen} />
                        <SidebarItem icon={Bell} label="Notifications" collapsed={!isSidebarOpen} badge="3" />
                        <SidebarItem icon={Settings} label="Governance" collapsed={!isSidebarOpen} />
                    </nav>

                    <div className="pt-6 border-t border-slate-800 space-y-4">
                        {/* Role Toggler for Demo */}
                        <div className={cn("p-4 bg-slate-800/50 rounded-2xl", !isSidebarOpen && "lg:hidden")}>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Switch Identity</p>
                            <div className="grid grid-cols-1 gap-2">
                                {roles.map(r => (
                                    <button
                                        key={r.id}
                                        onClick={() => setRole(r.id)}
                                        className={cn(
                                            "flex items-center gap-3 p-2 rounded-xl text-xs font-bold transition-all",
                                            role === r.id ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                                        )}
                                    >
                                        <r.icon className="h-4 w-4" />
                                        <span>{r.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <SidebarItem icon={LogOut} label="Terminate" collapsed={!isSidebarOpen} className="text-rose-400" />
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Dashboard Header */}
                <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="h-5 w-5" />
                        </Button>
                        <h1 className="text-xl font-bold text-slate-900 capitalize">{role} Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-slate-50 rounded-2xl px-4 py-2 border border-slate-100">
                            <Search className="h-4 w-4 text-slate-400 mr-2" />
                            <input type="text" placeholder="Global command..." className="bg-transparent text-sm focus:outline-none w-48 font-medium" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-lg">
                            <div className="w-full h-full rounded-[9px] bg-white overflow-hidden">
                                <img src="https://i.pravatar.cc/100?u=shiven" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={role}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {role === "customer" && <CustomerDashboard />}
                            {role === "agent" && <AgentDashboard />}
                            {role === "associate" && <AssociateDashboard />}
                            {role === "provider" && <ServiceProviderDashboard />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active, collapsed, badge, className }: any) {
    return (
        <button className={cn(
            "flex items-center gap-4 w-full p-4 rounded-2xl transition-all group",
            active ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "text-slate-400 hover:text-white hover:bg-slate-800",
            className
        )}>
            <Icon className={cn("h-5 w-5", !active && "group-hover:scale-110 transition-transform")} />
            {!collapsed && (
                <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-tight">{label}</span>
                    {badge && <span className="bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">{badge}</span>}
                </div>
            )}
        </button>
    );
}
