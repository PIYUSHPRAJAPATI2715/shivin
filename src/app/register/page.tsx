"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(true);
    const [selectedRole, setSelectedRole] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedRole) {
            toast.error("Please select a role", {
                style: { fontFamily: 'Inter, sans-serif' }
            });
            return;
        }

        if (!agreeToTerms) {
            toast.error("Please agree to the terms and privacy policy", {
                style: { fontFamily: 'Inter, sans-serif' }
            });
            return;
        }

        setIsLoading(true);

        // Simulate login logic based on Flutter routing
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Registration successful", {
                style: { fontFamily: 'Inter, sans-serif' }
            });

            if (selectedRole === "Agent Staff") {
                router.push("/dashboard");
            } else {
                router.push("/profile");
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* App Bar Equivalent */}
            <div className="pt-8 pb-2 px-4 shadow-sm">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors inline-flex items-center justify-center text-[#262626]"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>

            {/* Body Scroll View Equivalent */}
            <div className="px-7 py-5 max-w-md mx-auto w-full">
                <div className="mb-9 mt-3">
                    <h1 className="text-[26px] font-bold text-[#1D2024] mb-1">
                        Register Account
                    </h1>
                    <p className="text-[14px] text-[#9CA3AF] leading-[1.4]">
                        Sign in with your email and password or social media to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-1.5">
                        <Label className="text-[14px] font-semibold text-[#262626]">Email</Label>
                        <Input
                            type="email"
                            placeholder="example123@gmail.com"
                            className="h-[56px] px-6 text-[14px] text-black bg-white border-[#E5E7EB] rounded-[28px] focus-visible:ring-1 focus-visible:ring-[#007BFF] focus-visible:border-[#007BFF] placeholder:text-[#D1D5DB] placeholder:text-[13px]"
                            required
                        />
                    </div>

                    <div className="h-0.5" />

                    {/* Username Field */}
                    <div className="space-y-1.5">
                        <Label className="text-[14px] font-semibold text-[#262626]">Username</Label>
                        <Input
                            type="text"
                            placeholder="Username"
                            className="h-[56px] px-6 text-[14px] text-black bg-white border-[#E5E7EB] rounded-[28px] focus-visible:ring-1 focus-visible:ring-[#007BFF] focus-visible:border-[#007BFF] placeholder:text-[#D1D5DB] placeholder:text-[13px]"
                            required
                        />
                    </div>

                    <div className="h-0.5" />

                    {/* Password Field */}
                    <div className="space-y-1.5">
                        <Label className="text-[14px] font-semibold text-[#262626]">Password</Label>
                        <Input
                            type="password"
                            placeholder="Password"
                            className="h-[56px] px-6 text-[14px] text-black bg-white border-[#E5E7EB] rounded-[28px] focus-visible:ring-1 focus-visible:ring-[#007BFF] focus-visible:border-[#007BFF] placeholder:text-[#D1D5DB] placeholder:text-[13px]"
                            required
                        />
                    </div>

                    <div className="h-0.5" />

                    {/* Role Selection Dropdown */}
                    <div className="space-y-1.5">
                        <Label className="text-[14px] font-semibold text-[#262626]">Select Role</Label>
                        <Select onValueChange={setSelectedRole} value={selectedRole}>
                            <SelectTrigger className="h-[56px] px-6 text-[14px] bg-white border-[#E5E7EB] rounded-[28px] focus:ring-1 focus:ring-[#007BFF]">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-[#E5E7EB] bg-white">
                                <SelectItem value="Agent Staff" className="text-[14px]">Agent Staff</SelectItem>
                                <SelectItem value="Associate" className="text-[14px]">Associate</SelectItem>
                                <SelectItem value="Customer" className="text-[14px]">Customer</SelectItem>
                                <SelectItem value="Client" className="text-[14px]">Client</SelectItem>
                                <SelectItem value="Property" className="text-[14px]">Property</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="h-1" />

                    {/* Terms & Privacy Checkbox */}
                    <div className="flex items-start mt-3 mb-8 space-x-2">
                        <Checkbox
                            id="agreeToTerms"
                            checked={agreeToTerms}
                            onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                            className="w-[18px] h-[18px] mt-0.5 rounded-[4px] border-[#CBD5E1] data-[state=checked]:bg-[#007BFF] data-[state=checked]:text-white data-[state=checked]:border-[#007BFF]"
                        />
                        <label
                            htmlFor="agreeToTerms"
                            className="text-[13px] text-[#4B5563] cursor-pointer"
                        >
                            Agree with <b>terms</b> and <b>privacy</b>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[56px] bg-[#007BFF] hover:bg-[#0056b3] text-white text-[16px] font-semibold rounded-full shadow-[0_4px_14px_0_rgba(0,123,255,0.39)] transition-all"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            "Sign up"
                        )}
                    </Button>
                </form>

                <div className="mt-7 text-center">
                    <p className="text-[14px] text-[#9CA3AF]">Or</p>
                </div>

                {/* Social Media Buttons */}
                <div className="flex justify-center gap-5 mt-5">
                    {/* Mocking SVGs for simplicity, matching the visual weight */}
                    <button className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
                        <span className="text-[#1877F2] font-bold text-xl">f</span>
                    </button>
                    <button className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
                        <span className="text-[#EA4335] font-bold text-xl">G</span>
                    </button>
                </div>

                {/* Sign In Link */}
                <div className="flex items-center justify-center mt-6 pb-8">
                    <span className="text-[14px] text-[#4B5563]">Already have an account ?</span>
                    <Link href="/login" className="text-[14px] font-bold text-[#007BFF] ml-1">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
