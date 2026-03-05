"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { User, Briefcase, ShieldCheck, HardHat, LayoutDashboard, Settings, LogOut, ChevronRight, Home } from "lucide-react";

export function DashboardSidebar() {
    const pathname = usePathname();

    const roles = [
        { name: "Customer", path: "/dashboard", icon: User },
        { name: "Agent / Staff", path: "/dashboard/agent", icon: Briefcase },
        { name: "Associate", path: "/dashboard/associate", icon: ShieldCheck },
        { name: "Provider", path: "/dashboard/provider", icon: HardHat },
    ];

    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 min-h-screen flex flex-col pt-6 pb-6 sticky top-0 shrink-0">
            {/* Header/Logo */}
            <div className="px-6 mb-10 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors">S</div>
                    <span className="font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">Shiven</span>
                </Link>
            </div>

            {/* Navigation Block */}
            <div className="px-4 mb-10 space-y-1">
                <h3 className="px-3 text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Main Menu</h3>
                <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <Home className="w-4 h-4" />
                    Back to Home
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <LayoutDashboard className="w-4 h-4" />
                    Overview
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                </Link>
            </div>

            {/* Role Switcher */}
            <div className="px-4 flex-1">
                <h3 className="px-3 text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Switch Dashboard Role</h3>
                <div className="space-y-1">
                    {roles.map((role) => {
                        const isActive = pathname === role.path || (role.path !== "/dashboard" && pathname?.startsWith(role.path));

                        return (
                            <Link key={role.path} href={role.path} className="block group">
                                <div className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all ${isActive
                                        ? "bg-blue-600/10 text-blue-400 border border-blue-600/20"
                                        : "text-slate-400 hover:bg-slate-800/50 hover:text-white border border-transparent"
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <role.icon className={`w-4 h-4 ${isActive ? "text-blue-500" : "text-slate-500 group-hover:text-slate-300"}`} />
                                        <span className={`text-sm font-semibold ${isActive ? "text-blue-600" : ""}`}>{role.name}</span>
                                    </div>
                                    {isActive && <ChevronRight className="w-4 h-4 text-blue-600" />}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Footer Profile */}
            <div className="px-4 mt-auto pt-6 border-t border-slate-800">
                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-slate-800 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 shrink-0 border-2 border-slate-700 overflow-hidden group-hover:border-slate-500 transition-colors">
                        <img src="https://i.pravatar.cc/100?u=shiven" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-200 truncate">John Doe</p>
                        <p className="text-xs text-slate-500 truncate">john@shiven.com</p>
                    </div>
                    <LogOut className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors shrink-0" />
                </button>
            </div>
        </aside>
    );
}
