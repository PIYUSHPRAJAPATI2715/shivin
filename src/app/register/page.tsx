"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { User, Mail, Lock, ArrowRight, Building2, Briefcase, UserRound, ShieldCheck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const roles = [
    { id: "customer", label: "Customer", icon: UserRound, desc: "Looking to buy or rent" },
    { id: "agent", label: "Agent / Staff", icon: Briefcase, desc: "List & manage properties" },
    { id: "associate", label: "Associate", icon: ShieldCheck, desc: "Strategic partnership" },
    { id: "provider", label: "Provider", icon: HardHat, desc: "Service professional" },
];

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState("customer");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success(`Registered successfully as ${selectedRole}!`);
            router.push("/login");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-20 relative overflow-hidden">
            {/* Background patterns omitted for conciseness but implied in high-fidelity */}

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[800px] z-10 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl shadow-slate-900/10 border border-white overflow-hidden"
            >
                {/* Left Side: Role Selection */}
                <div className="p-10 bg-slate-900 text-white flex flex-col justify-between">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 mb-12">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold font-display tracking-tight text-white">Shiven</span>
                        </Link>
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">Join our <br /> ecosystem.</h2>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Select your membership type to get access to specialized tools and dashboards tailored for your needs.
                        </p>

                        <div className="grid grid-cols-1 gap-3">
                            {roles.map((role) => (
                                <button
                                    key={role.id}
                                    type="button"
                                    onClick={() => setSelectedRole(role.id)}
                                    className={cn(
                                        "flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group",
                                        selectedRole === role.id
                                            ? "bg-blue-600 border-blue-500 text-white"
                                            : "bg-slate-800/50 border-slate-800 text-slate-300 hover:border-slate-700"
                                    )}
                                >
                                    <div className={cn(
                                        "p-3 rounded-xl transition-colors",
                                        selectedRole === role.id ? "bg-white text-blue-600" : "bg-slate-800 text-slate-400 group-hover:text-white"
                                    )}>
                                        <role.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold tracking-tight">{role.label}</p>
                                        <p className="text-[10px] opacity-60 font-medium">{role.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="text-[10px] text-slate-500 mt-8 font-medium">© 2026 Shiven Excellence. Security protocol v4.2 active.</p>
                </div>

                {/* Right Side: Form */}
                <div className="p-10 lg:p-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 leading-tight">Create Identity</h1>
                        <p className="text-slate-500 mt-2 font-medium italic">Identity level: {selectedRole.toUpperCase()}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Authentication Name</Label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                <Input
                                    placeholder="Global Username"
                                    className="pl-12 h-14 bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-2xl text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Interface</Label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                <Input
                                    type="email"
                                    placeholder="name@nexus.com"
                                    className="pl-12 h-14 bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-2xl text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Universal Password</Label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-12 h-14 bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-2xl text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-15 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all text-lg flex items-center justify-center gap-3 group mt-4"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Initialize Profile
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </form>

                    <p className="text-center mt-10 text-sm text-slate-500 font-medium">
                        Already have an identity?{" "}
                        <Link href="/login" className="text-blue-600 font-bold hover:underline">
                            Login Here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
