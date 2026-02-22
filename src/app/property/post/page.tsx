"use client";

import { motion, AnimatePresence } from "motion/react";
import { Building2, Home, MapPin, Camera, ClipboardList, CheckCircle2, PlusCircle, Sparkles, ShieldCheck, ArrowRight, Target, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function PostPropertyPage() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const handleFinish = () => {
        toast.success("Listing submitted for premium verification!");
        router.push("/properties");
    };

    return (
        <div className="min-h-screen bg-slate-50/50 pb-32">
            {/* Immersive Header */}
            <section className="bg-slate-900 pt-24 pb-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-md mb-8"
                    >
                        <PlusCircle className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Listing Engine v2.0</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic mb-6">
                        SELL AT <br />
                        <span className="text-blue-500 not-italic">TRUE VALUE.</span>
                    </h1>
                    <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
                        Join the elite circle of owners who trade directly. Zero brokerage, 100% verified leads.
                    </p>

                    {/* Progress Indicator */}
                    <div className="max-w-md mx-auto mt-16 flex items-center justify-between relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2" />
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="relative z-10 flex flex-col items-center gap-3">
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-500",
                                    step >= s ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20 scale-110" : "bg-slate-800 text-slate-500"
                                )}>
                                    {s}
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-widest",
                                    step >= s ? "text-blue-500" : "text-slate-600"
                                )}>
                                    {s === 1 ? "Details" : s === 2 ? "Aesthetics" : "Nexus"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Content */}
            <div className="max-w-3xl mx-auto px-4 -mt-10 relative z-20">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-900/10 mb-8"
                >
                    <AnimatePresence mode="wait">
                        {step === 1 && <BasicDetailsSection onNext={() => setStep(2)} />}
                        {step === 2 && <PhotoUploadSection onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                        {step === 3 && <ReviewSection onBack={() => setStep(2)} onFinish={handleFinish} />}
                    </AnimatePresence>
                </motion.div>

                {/* Secondary Help Text */}
                <div className="flex items-center justify-center gap-8 text-slate-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Verified Listing Only</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BasicDetailsSection({ onNext }: { onNext: () => void }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                    <ClipboardList className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Property Definition</h2>
                    <p className="text-slate-500 text-sm">Define the core specifications of your asset.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Asset Category</Label>
                    <select className="flex h-14 w-full items-center justify-between rounded-2xl border-none bg-slate-50 px-4 py-2 text-lg font-medium focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                        <option>Luxury Apartment</option>
                        <option>Penthouse</option>
                        <option>Bunglow / Villa</option>
                        <option>Commercial Space</option>
                    </select>
                </div>
                <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Precise Locality</Label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                        <Input placeholder="Enter street or neighborhood" className="pl-12 h-14 rounded-2xl bg-slate-50 border-none text-lg font-medium focus-visible:ring-2 focus-visible:ring-blue-500/20" />
                    </div>
                </div>
                <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Expected Evaluation ($)</Label>
                    <Input placeholder="e.g. 1,250,000" className="h-14 rounded-2xl bg-slate-50 border-none text-lg font-medium focus-visible:ring-2 focus-visible:ring-blue-500/20" />
                </div>
                <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Blueprint (BHK)</Label>
                    <div className="flex gap-2">
                        {['1 BHK', '2 BHK', '3 BHK', '4+'].map(bhk => (
                            <button key={bhk} className="flex-1 h-14 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-sm">
                                {bhk}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Narrative Description</Label>
                <Textarea placeholder="Highlight the exclusive features, views, and neighborhood perks..." className="min-h-[160px] rounded-3xl bg-slate-50 border-none text-lg font-medium p-6 focus-visible:ring-2 focus-visible:ring-blue-500/20" />
            </div>

            <Button onClick={onNext} className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl shadow-blue-500/20 group">
                Continue to Aesthetics <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Button>
        </div>
    );
}

function PhotoUploadSection({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    return (
        <div className="space-y-8 py-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                    <Camera className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Visual Portfolio</h2>
                    <p className="text-slate-500 text-sm">Upload high-resolution images to attract elite buyers.</p>
                </div>
            </div>

            <div className="border-4 border-dashed border-slate-50 rounded-[3rem] p-16 hover:bg-slate-50/50 transition-all cursor-pointer group text-center bg-slate-50/30">
                <div className="w-24 h-24 bg-white text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all group-hover:rotate-6">
                    <PlusCircle className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Drop Visual Assets</h3>
                <p className="text-sm text-slate-400 font-medium max-w-xs mx-auto mb-8">
                    Support for JPEG, PNG, WEBP. <br /> Maximum 20MB per image.
                </p>
                <Button className="px-10 h-12 bg-white text-indigo-600 border border-indigo-100 hover:bg-white shadow-lg font-bold rounded-2xl">
                    Select Laboratory Files
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-tight">AI Enhancement <br /> Included</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                    <LayoutDashboard className="h-5 w-5 text-blue-500" />
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-tight">Virtual Tour <br /> Generator</p>
                </div>
            </div>

            <div className="flex gap-4 pt-6">
                <Button variant="ghost" onClick={onBack} className="flex-1 h-16 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400 hover:text-slate-900">Return</Button>
                <Button onClick={onNext} className="flex-[2] h-16 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl shadow-blue-500/20">Analyze & Proceed</Button>
            </div>
        </div>
    );
}

function ReviewSection({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-2xl">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Nexus Review</h2>
                    <p className="text-slate-500 text-sm">Confirm details and broadcast to the Shiven network.</p>
                </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <CheckCircle2 className="h-32 w-32" />
                </div>
                <div className="relative z-10 space-y-4">
                    <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Security Protocol</p>
                    <p className="text-lg font-medium leading-relaxed max-w-md">
                        By prioritizing this listing, you confirm ownership of the asset and agree to our Radical Transparency standards.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <ReviewItem label="Direct Visibility" value="Global Broadcast" />
                <ReviewItem label="Verification Level" value="Premium (L3)" />
                <ReviewItem label="Processing Fee" value="$0.00 (Legacy Free)" transition />
            </div>

            <div className="flex gap-4 pt-6">
                <Button variant="ghost" onClick={onBack} className="flex-1 h-16 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400 hover:text-slate-900">Audit Details</Button>
                <Button onClick={onFinish} className="flex-[2] h-16 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl shadow-blue-500/20">Initialize Broadcast</Button>
            </div>
        </div>
    );
}

function ReviewItem({ label, value, transition }: { label: string, value: string, transition?: boolean }) {
    return (
        <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl group hover:bg-white hover:shadow-xl transition-all cursor-default">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
                <span className={cn("font-bold text-slate-900 tracking-tight", transition && "text-blue-600")}>{value}</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
        </div>
    );
}
