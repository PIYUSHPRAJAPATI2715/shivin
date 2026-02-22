"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Premium Header */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-md mb-6"
                    >
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Shiven Trust & Safety</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
                    >
                        How can we <br />
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">shape your future?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Whether you&apos;re looking to buy, sell, or just need expert advice, our team is ready to assist you.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-24 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-900/5 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in touch</h3>
                                <p className="text-slate-500">Expect a response within 2 business hours.</p>
                            </div>

                            <div className="space-y-6">
                                <ContactItem
                                    icon={Phone}
                                    label="Call Support"
                                    value="1800-419-9099"
                                    desc="Mon-Sat, 9am - 8pm"
                                    color="bg-blue-50 text-blue-600"
                                />
                                <ContactItem
                                    icon={Mail}
                                    label="Email Us"
                                    value="concierge@shiven.realty"
                                    desc="24/7 Priority Support"
                                    color="bg-indigo-50 text-indigo-600"
                                />
                                <ContactItem
                                    icon={MapPin}
                                    label="HQ Office"
                                    value="BKC, Mumbai, India"
                                    desc="Visit us for a coffee"
                                    color="bg-slate-50 text-slate-600"
                                />
                            </div>

                            <div className="pt-8 border-t border-slate-50">
                                <p className="text-sm font-bold text-slate-900 mb-4 tracking-tight uppercase">Global Locations</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Mumbai", "Delhi", "Dubai", "London", "Singapore"].map(city => (
                                        <span key={city} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{city}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/5 p-12 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <MessageCircle className="w-64 h-64 text-blue-600" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Start a conversation</h2>
                                <p className="text-slate-500 mb-12 max-w-lg leading-relaxed">
                                    Fill out the form below and one of our Senior Portfolio Managers will reach out to you shortly.
                                </p>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">Full Name</Label>
                                            <Input className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 text-lg font-medium" placeholder="Alexander Pierce" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">Email Address</Label>
                                            <Input className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 text-lg font-medium" placeholder="alex@company.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">Subject</Label>
                                            <select className="flex h-14 w-full items-center justify-between rounded-2xl border-none bg-slate-50 px-4 py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer">
                                                <option>Buying Luxury Property</option>
                                                <option>Selling My Property</option>
                                                <option>Investment Opportunities</option>
                                                <option>Partnership Inquiry</option>
                                            </select>
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">Phone Number</Label>
                                            <Input className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 text-lg font-medium" placeholder="+91 98XXX-XXXXX" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400">Additional Context</Label>
                                        <Textarea className="min-h-[180px] rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 text-lg font-medium p-6" placeholder="Tell us more about your requirements..." />
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                        <p className="text-xs text-slate-400 max-w-xs">By submitting this form, you agree to our <span className="text-slate-900 font-bold underline">Privacy Policy</span> and terms of service.</p>
                                        <Button className="h-16 w-full md:w-auto px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all text-lg flex items-center gap-3 group">
                                            Book Consultation <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ContactItem({ icon: Icon, label, value, desc, color }: any) {
    return (
        <div className="flex items-center gap-4 group">
            <div className={`p-4 rounded-2xl transition-transform group-hover:scale-110 ${color}`}>
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                <p className="text-lg font-bold text-slate-900 leading-tight">{value}</p>
                <p className="text-xs text-slate-400 font-medium">{desc}</p>
            </div>
        </div>
    );
}
