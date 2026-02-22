import { motion } from "motion/react";
import { Building2, Home, MapPin, Camera, ClipboardList, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function PostPropertyPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* Header */}
            <section className="bg-white border-b py-10 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex p-3 bg-red-50 text-[#E53935] rounded-2xl mb-4"
                    >
                        <PlusSquareIcon className="h-6 w-6" />
                    </motion.div>
                    <h1 className="text-3xl font-black text-[#212121]">List Your Property <span className="text-[#E53935]">Free.</span></h1>
                    <p className="text-gray-400 font-medium mt-2">Zero brokerage. Direct owners only.</p>
                </div>
            </section>

            {/* Stepper */}
            <div className="max-w-3xl mx-auto px-4 mt-8">
                <div className="flex justify-between mb-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-4 border-gray-50 transition-all ${step >= s ? 'bg-[#1565C0] text-white' : 'bg-white text-gray-300'
                            }`}>
                            {s}
                        </div>
                    ))}
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 mb-8"
                >
                    {step === 1 && <BasicDetails onNext={() => setStep(2)} />}
                    {step === 2 && <PropertyPhotos onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                    {step === 3 && <ReviewAndSubmit onBack={() => setStep(2)} />}
                </motion.div>
            </div>
        </div>
    );
}

function PlusSquareIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
        </svg>
    )
}

function BasicDetails({ onNext }: { onNext: () => void }) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-black text-[#212121] flex items-center">
                <ClipboardList className="mr-2 h-5 w-5 text-[#1565C0]" /> Basic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Property Type</Label>
                    <select className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]/10 transition-all">
                        <option>Apartment / Flat</option>
                        <option>Independent House</option>
                        <option>Villa</option>
                        <option>Plot / Land</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Locality</Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Enter locality name" className="pl-10 h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Expected Price ($)</Label>
                    <Input placeholder="e.g. 500,000" className="h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                </div>
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">BHK Type</Label>
                    <div className="flex gap-2">
                        {['1 BHK', '2 BHK', '3 BHK', '4+'].map(bhk => (
                            <button key={bhk} className="flex-1 py-3 border border-gray-100 rounded-xl text-xs font-bold hover:bg-blue-50 hover:border-blue-200 transition-all">
                                {bhk}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Property Description</Label>
                <Textarea placeholder="Tell buyers what makes your property special..." className="min-h-[120px] rounded-xl bg-gray-50/50 border-gray-100" />
            </div>
            <Button onClick={onNext} className="w-full h-12 bg-[#1565C0] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-200">
                Continue to Photos
            </Button>
        </div>
    );
}

function PropertyPhotos({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    return (
        <div className="space-y-6 text-center py-4">
            <h2 className="text-xl font-black text-[#212121] flex items-center justify-center">
                <Camera className="mr-2 h-5 w-5 text-[#E53935]" /> Upload Photos
            </h2>
            <div className="border-4 border-dashed border-gray-100 rounded-[2rem] p-12 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-red-50 text-[#E53935] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Camera className="h-8 w-8" />
                </div>
                <p className="font-bold text-gray-800">Drag & Drop Photos</p>
                <p className="text-xs text-gray-400 mt-2">Upload up to 10 photos of your property.</p>
                <button className="mt-6 px-6 py-2 bg-[#E53935] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Select Files
                </button>
            </div>
            <div className="flex gap-4 pt-4">
                <Button variant="ghost" onClick={onBack} className="flex-1 h-12 font-bold text-gray-400">Back</Button>
                <Button onClick={onNext} className="flex-2 h-12 bg-[#1565C0] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-200">
                    Next Step
                </Button>
            </div>
        </div>
    );
}

function ReviewAndSubmit({ onBack }: { onBack: () => void }) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-black text-[#212121] flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" /> Almost There!
            </h2>
            <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100">
                <p className="text-xs font-bold text-green-700 leading-relaxed">
                    By listing your property on Shiven, you agree to our 100% Owner Verified policy. We may contact you for verification.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-xs font-bold text-gray-400">Visibility</span>
                    <span className="text-xs font-black text-[#1565C0] uppercase">Free for 30 Days</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-xs font-bold text-gray-400">Verified Badge</span>
                    <span className="text-xs font-black text-green-600 uppercase">Included</span>
                </div>
            </div>
            <div className="flex gap-4 pt-4">
                <Button variant="ghost" onClick={onBack} className="flex-1 h-12 font-bold text-gray-400">Back</Button>
                <Button className="flex-2 h-12 bg-[#1565C0] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-200">
                    Finish & Post
                </Button>
            </div>
        </div>
    );
}
