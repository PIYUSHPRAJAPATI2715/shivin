"use client";

import { motion } from "motion/react";
import {
    ShieldCheck, Wrench, Landmark, Paintbrush,
    ArrowRight, HardHat, Scale, Wallet,
    Building2, Sparkles, Target, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceCategories = [
    {
        id: "safety",
        title: "Safety & Compliance",
        description: "Ensuring your assets meet global security and regulatory standards.",
        icon: ShieldCheck,
        color: "blue",
        services: [
            "Fire Safety Audits",
            "Structural Sanity Checks",
            "Compliance Monitoring",
            "Asset Security Protocols"
        ]
    },
    {
        id: "management",
        title: "Property Management",
        description: "End-to-end management for maximized yield and asset longevity.",
        icon: Wrench,
        color: "indigo",
        services: [
            "Predictive Maintenance",
            "Rental Yield Optimization",
            "Tenant Relation Suite",
            "Technical Facility Management"
        ]
    },
    {
        id: "legal",
        title: "Financial & Legal",
        description: "Sophisticated consulting for seamless property transactions.",
        icon: Landmark,
        color: "emerald",
        services: [
            "Radical Title Verification",
            "Luxury Home Finance",
            "Tax Strategy Consulting",
            "Smart Contract Execution"
        ]
    },
    {
        id: "design",
        title: "Design & Aesthetics",
        description: "Elevating spaces with state-of-the-art design and virtual experiences.",
        icon: Paintbrush,
        color: "rose",
        services: [
            "Bespoke Interior Design",
            "Digital Twin Creations",
            "Virtual Reality Tours",
            "Landscape Architecture"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 pb-32">
            {/* Immersive Hero Header */}
            <section className="bg-slate-900 pt-24 pb-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-md mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Professional Excellence</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic mb-8">
                        BEYOND <br />
                        <span className="text-blue-500 not-italic">TRANSACTIONS.</span>
                    </h1>
                    <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        Real estate is more than just buying and selling. Shiven Professional Services provides the elite infrastructure needed to maintain, secure, and appreciate your assets.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-slate-100 shadow-2xl shadow-slate-900/5 group hover:border-blue-200 transition-all"
                        >
                            <div className={cn(
                                "w-16 h-16 rounded-[2rem] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6",
                                category.color === "blue" ? "bg-blue-50 text-blue-600" :
                                    category.color === "indigo" ? "bg-indigo-50 text-indigo-600" :
                                        category.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                                            "bg-rose-50 text-rose-600"
                            )}>
                                <category.icon className="h-8 w-8" />
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{category.title}</h2>
                            <p className="text-slate-500 font-medium mb-10 text-lg leading-relaxed">
                                {category.description}
                            </p>

                            <div className="space-y-4 mb-12">
                                {category.services.map((service, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">{service}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="h-14 px-8 bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] w-full md:w-auto transition-all">
                                Request Prospectus <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Trust Banner */}
            <section className="container mx-auto px-4 mt-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Building2 className="w-80 h-80 text-blue-400" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">Concierge Support</p>
                            <h3 className="text-4xl font-bold tracking-tighter mb-8 leading-tight">Need a customized <br /> <span className="text-blue-400 italic">service bundle?</span></h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Our Portfolio Managers can curate a bespoke service package tailored to your commercial or residential portfolio needs.
                            </p>
                            <Button className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/20">
                                Consult an Expert
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <TrustIcon icon={Target} label="Precision Execution" />
                            <TrustIcon icon={ShieldCheck} label="Radical Transparency" />
                            <TrustIcon icon={Zap} label="Real-time Reporting" />
                            <TrustIcon icon={HardHat} label="Verified Professionals" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TrustIcon({ icon: Icon, label }: any) {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-all">
            <Icon className="h-6 w-6 text-blue-400 mb-4 transition-transform group-hover:scale-110" />
            <p className="text-xs font-black uppercase tracking-widest leading-tight">{label}</p>
        </div>
    );
}
