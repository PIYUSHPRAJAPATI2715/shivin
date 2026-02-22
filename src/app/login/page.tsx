"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Github, Chrome, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login logic
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Welcome back to Shiven!");
            router.push("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[440px] z-10"
            >
                <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-slate-900/10 border border-white overflow-hidden">
                    <div className="p-10">
                        <div className="text-center mb-10">
                            <Link href="/" className="inline-flex items-center gap-2 mb-8">
                                <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-200">
                                    <Building2 className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-2xl font-black tracking-tight text-slate-900">Shiven</span>
                            </Link>
                            <h1 className="text-3xl font-bold text-slate-900 leading-tight">Elite Access</h1>
                            <p className="text-slate-500 mt-2 font-medium">Continue your premium property journey</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Professional Email</Label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                                    <Input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="pl-12 h-14 bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-2xl text-lg font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1">
                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Security Key</Label>
                                    <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700">Restore</Link>
                                </div>
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
                                        Authorize Access
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="relative my-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-100"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
                                <span className="bg-white px-4 text-slate-400 font-black">Secure Connect</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-14 rounded-2xl border-slate-100 hover:bg-slate-50 font-bold text-slate-600 transition-all gap-3">
                                <Chrome className="h-5 w-5" />
                                Google
                            </Button>
                            <Button variant="outline" className="h-14 rounded-2xl border-slate-100 hover:bg-slate-50 font-bold text-slate-600 transition-all gap-3">
                                <Github className="h-5 w-5" />
                                GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50/80 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-500 font-medium">
                            New to Shiven?{" "}
                            <Link href="/register" className="text-blue-600 font-bold hover:underline">
                                Register Workspace
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
