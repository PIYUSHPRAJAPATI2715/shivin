"use client";

import { useState } from "react";
import { Search, Bell, Plus, MapPin, Edit3, Trash2, Home, TrendingUp, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgentDashboard() {
    const [activeTab, setActiveTab] = useState("Active");

    const tabs = ["Active", "Pending", "Closed"];

    const stats = [
        { label: "Total Properties", count: 200, icon: Home, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "Active Listings", count: 86, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100" },
        { label: "Total Leads", count: 64, icon: Users, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Upcoming Bookings", count: 4, icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" }
    ];

    const properties = [
        {
            id: 1,
            title: "Tamarind Ville",
            location: "Noida Sector 82",
            type: "Flats / Apartments",
            price: "₹ 55 Lakh",
            isActive: true,
            status: "Active",
            views: 1240,
            leads: 12,
            img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "Supertech Cape Town",
            location: "Noida Sector 74",
            type: "Flats / Apartments",
            price: "₹ 75 Lakh",
            isActive: true,
            status: "Active",
            views: 890,
            leads: 8,
            img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "Jaypee Greens",
            location: "Noida Sector 128",
            type: "Villas",
            price: "₹ 1.2 Cr",
            isActive: false,
            status: "Pending",
            views: 450,
            leads: 2,
            img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Agent Performance</h2>
                    <p className="text-slate-500 text-sm mt-1">Here is what's happening with your properties today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2 bg-white">
                        <Bell className="w-4 h-4 text-slate-600" />
                        Notifications
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1 font-bold">3</span>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                        <Plus className="w-4 h-4" />
                        Add New Property
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.bg}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.count}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Tabs & Search */}
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search properties..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>

                {/* Property Data Grid / List */}
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                        {properties.filter(p => activeTab === 'Active' ? p.isActive : !p.isActive).map((prop) => (
                            <div key={prop.id} className="group flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                                {/* Thumbnail */}
                                <div className="w-full md:w-64 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden relative">
                                    <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm ${prop.isActive ? 'bg-emerald-500' : 'bg-amber-500'
                                        }`}>
                                        {prop.status.toUpperCase()}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col pt-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{prop.title}</h3>
                                            <p className="text-blue-600 font-semibold text-sm mt-1">{prop.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-slate-900">{prop.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6">
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm text-slate-500">{prop.location}</span>
                                    </div>

                                    {/* Stats & Actions */}
                                    <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Views</p>
                                                <p className="font-semibold text-slate-900">{prop.views}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Leads</p>
                                                <p className="font-semibold text-slate-900">{prop.leads}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Button variant="outline" size="sm" className="gap-2 border-slate-200">
                                                <Edit3 className="w-4 h-4 text-slate-600" />
                                                Edit
                                            </Button>
                                            <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-red-600 hover:text-red-700 hover:bg-red-50">
                                                <Trash2 className="w-4 h-4" />
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
