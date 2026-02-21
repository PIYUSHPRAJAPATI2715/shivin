import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { User, Mail, Lock, ArrowRight, Building2, UserCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function RegisterPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState<"buyer" | "owner">("buyer");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 relative overflow-hidden">
            {/* Background elements same as Login */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 transition-opacity duration-1000">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-50/50 rounded-full blur-3xl animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg z-10"
            >
                <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-[#212121]">Create Account</h1>
                        <p className="text-sm text-gray-500 mt-2 font-medium">Join 10M+ users finding their dream homes</p>
                    </div>

                    {/* Role Selection */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={() => setRole("buyer")}
                            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center ${role === "buyer" ? "border-[#1565C0] bg-blue-50/50" : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <UserCircle className={role === "buyer" ? "text-[#1565C0]" : "text-gray-400"} />
                            <span className={`text-xs font-bold mt-2 ${role === "buyer" ? "text-[#1565C0]" : "text-gray-500"}`}>I'm a Buyer/Tenant</span>
                        </button>
                        <button
                            onClick={() => setRole("owner")}
                            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center ${role === "owner" ? "border-[#1565C0] bg-blue-50/50" : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <Building2 className={role === "owner" ? "text-[#1565C0]" : "text-gray-400"} />
                            <span className={`text-xs font-bold mt-2 ${role === "owner" ? "text-[#1565C0]" : "text-gray-500"}`}>I'm an Owner/Agent</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2 md:col-span-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input placeholder="Shiven" className="pl-10 h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input type="email" placeholder="shiven@example.com" className="pl-10 h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input type="password" placeholder="••••••••" className="pl-10 h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Confirm</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input type="password" placeholder="••••••••" className="pl-10 h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="md:col-span-2 h-12 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold rounded-xl mt-4"
                        >
                            {isLoading ? "Creating..." : "Create Account"}
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 font-medium">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#1565C0] font-bold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
