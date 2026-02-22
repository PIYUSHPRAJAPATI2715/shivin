"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { motion } from "motion/react";
import { useFavorites } from "@/hooks/useFavorites";
import { propertyApi } from "@/services/api";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Bed, Bath, Maximize, MapPin, Heart, ArrowLeft, Calendar, Car, Check, Phone, Mail, CheckCircle2, ShieldCheck, Share2, Info
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PropertyDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {
        const loadProperty = async () => {
            if (!id) return;

            setLoading(true);
            try {
                const data = await propertyApi.getById(id);
                if (data) {
                    setProperty(data);
                }
            } catch (error) {
                console.error("Failed to load property:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProperty();
    }, [id]);

    if (loading || !property) {
        return (
            <div className="min-h-screen bg-white pt-20">
                <div className="container px-4">
                    <Skeleton className="h-[500px] w-full rounded-[3rem]" />
                    <div className="mt-8 space-y-4">
                        <Skeleton className="h-10 w-1/3" />
                        <Skeleton className="h-4 w-1/4" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                            <div className="lg:col-span-2 space-y-4">
                                <Skeleton className="h-32 w-full rounded-2xl" />
                                <Skeleton className="h-64 w-full rounded-2xl" />
                            </div>
                            <Skeleton className="h-96 w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const favorite = isFavorite(property.id);

    return (
        <div className="min-h-screen bg-slate-50/50 pb-32">
            {/* Top Navigation Strip */}
            <div className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm">
                <div className="container px-4 md:px-6 flex items-center justify-between">
                    <Link href="/properties" className="group flex items-center text-slate-500 font-bold text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Discover
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100" onClick={() => {
                            // share logic
                        }}>
                            <Share2 className="h-5 w-5 text-slate-500" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => toggleFavorite(property.id)} className="rounded-full hover:bg-slate-100">
                            <Heart className={cn("h-5 w-5 transition-all", favorite ? "fill-rose-500 text-rose-500 scale-110" : "text-slate-400")} />
                        </Button>
                        <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/10 ml-4 hidden md:flex">
                            Inquire Now
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Gallery Section - Masonry */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden shadow-2xl group"
                            >
                                <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <div className="flex gap-2 mb-4">
                                        <Badge className="bg-blue-600 border-none px-4 py-1.5 text-[10px] uppercase font-black tracking-widest shadow-lg">Featured Portfolio</Badge>
                                        <Badge className="bg-white/20 backdrop-blur-md border-white/30 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest">RERA Verified</Badge>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight italic">{property.title}</h1>
                                    <div className="flex items-center mt-4 text-slate-300 gap-2">
                                        <MapPin className="h-4 w-4 text-blue-400" />
                                        <span className="text-sm font-bold tracking-tight">{property.location}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="hidden md:block rounded-[2rem] overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior" />
                            </div>
                            <div className="hidden md:block rounded-[2rem] overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Interior" />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 font-bold">View 18+ Photos</Button>
                                </div>
                            </div>
                        </section>

                        {/* Price & Primary Stats */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-900/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex flex-wrap gap-12">
                                <PropertyStat icon={Bed} label="BHK" value={`${property.bedrooms} Bed`} />
                                <PropertyStat icon={Bath} label="BATH" value={`${property.bathrooms} Bath`} />
                                <PropertyStat icon={Maximize} label="AREA" value={`${property.area} Sq.Ft`} />
                                <PropertyStat icon={Car} label="PARKING" value="2 Slots" />
                            </div>
                            <div className="h-full w-px bg-slate-100 hidden md:block" />
                            <div className="text-left md:text-right">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Market Price</p>
                                <p className="text-5xl font-black text-blue-600 tracking-tighter italic">
                                    ${(property.price / 1000).toFixed(0)}K
                                </p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">Expected ROI: 8.2% p.a.</p>
                            </div>
                        </div>

                        {/* Description & Narrative */}
                        <div className="space-y-8 py-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Summary</h2>
                                <div className="h-px flex-1 bg-slate-100" />
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Experience unparalleled luxury in this masterfully crafted sanctuary. Located in the most prestigious enclave of {property.location.split(',')[0]}, this {property.title} represents the pinnacle of urban architectural achievement. Every inch of this {property.area} sq.ft residence has been curated with premium materials and smart-home integration.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-900 rounded-3xl text-white">
                                    <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">Key Advantage</p>
                                    <p className="font-bold text-lg leading-snug tracking-tight">Prime corner unit with 270-degree panoramic views of the skyline and central park.</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3">Connectivity</p>
                                    <p className="font-bold text-lg leading-snug tracking-tight text-slate-800">5-minute walking distance to major tech hubs and the new metro transit line.</p>
                                </div>
                            </div>
                        </div>

                        {/* Exclusive Amenities */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Luxury Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "Infinity Pool", "Private Theatre", "Concierge 24/7",
                                    "Smart Controls", "EV Charging", "Spa & Wellness",
                                    "Club Lounge", "Yoga Studio", "High-speed Elevators"
                                ].map(amenity => (
                                    <div key={amenity} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Agent/Owner Contact Card */}
                        <div className="sticky top-[160px] space-y-6">
                            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] text-center space-y-8">
                                <div className="relative inline-block">
                                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-xl ring-4 ring-slate-50 mx-auto">
                                        <img src="https://i.pravatar.cc/200?img=68" alt="Agent" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-xl border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-slate-900">Sarah Montgomery</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mt-1">Certified Platinum Sales Associate</p>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full h-15 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20">
                                        <Phone className="h-4 w-4" /> View Contact Number
                                    </Button>
                                    <Button variant="outline" className="w-full h-15 rounded-2xl border-slate-100 font-black uppercase tracking-widest text-xs hover:bg-slate-50">
                                        <Mail className="h-4 w-4 mr-2" /> Message Agent
                                    </Button>
                                </div>

                                <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-50">
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Listings</p>
                                        <p className="font-black text-slate-900">124</p>
                                    </div>
                                    <div className="w-px h-8 bg-slate-100" />
                                    <div className="text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Exp.</p>
                                        <p className="font-black text-slate-900">12Yrs</p>
                                    </div>
                                </div>
                            </div>

                            {/* Safety & Compliance */}
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 space-y-6">
                                <div className="flex items-center gap-3 text-white">
                                    <ShieldCheck className="h-6 w-6 text-blue-400" />
                                    <h4 className="font-bold text-lg">Identity Verified</h4>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Property title documents verified",
                                        "Structural integrity certificate active",
                                        "No ongoing legal disputes found"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href="#" className="flex items-center justify-between text-[10px] font-black text-blue-400 uppercase tracking-widest pt-4 group">
                                    Order Valuation Report <ArrowLeft className="rotate-180 h-3 w-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Bar for Actions */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-2xl border-t border-slate-100">
                <div className="flex gap-4">
                    <Button variant="outline" className="h-14 w-14 rounded-2xl p-0 border-slate-200">
                        <Heart className={cn("h-6 w-6", favorite ? "fill-rose-500 text-rose-500" : "text-slate-400")} />
                    </Button>
                    <Button className="flex-1 h-14 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/10">
                        Contact For Details
                    </Button>
                </div>
            </div>
        </div>
    );
}

function PropertyStat({ icon: Icon, label, value }: any) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-100">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                <p className="text-lg font-black text-slate-900 leading-tight tracking-tight">{value}</p>
            </div>
        </div>
    );
}
