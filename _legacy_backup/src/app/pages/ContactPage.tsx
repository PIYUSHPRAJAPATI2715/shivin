import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Premium Header */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-[#1565C0]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full -ml-48 -mb-48 blur-3xl animate-pulse" />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                    >
                        Support Center
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/80 font-medium"
                    >
                        We're here to help you find your way home.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-1 space-y-4"
                    >
                        <ContactCard
                            icon={Phone}
                            title="Call Us"
                            info="+1 (555) 123-4567"
                            desc="Mon-Fri, 9am-6pm"
                            color="bg-blue-50 text-[#1565C0]"
                        />
                        <ContactCard
                            icon={Mail}
                            title="Email Us"
                            info="support@shiven.realestate"
                            desc="24/7 support response"
                            color="bg-red-50 text-[#E53935]"
                        />
                        <ContactCard
                            icon={MessageCircle}
                            title="Live Chat"
                            info="Chat with an agent"
                            desc="Avg response: 2 mins"
                            color="bg-green-50 text-green-600"
                        />
                    </motion.div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#212121] mb-8">Send an Inquiry</h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">First Name</Label>
                                        <Input className="h-12 rounded-xl bg-gray-50/50 border-gray-100" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Last Name</Label>
                                        <Input className="h-12 rounded-xl bg-gray-50/50 border-gray-100" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Reason for Contact</Label>
                                    <select className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]/10 transition-all">
                                        <option>Buying a Property</option>
                                        <option>Selling/Listing Property</option>
                                        <option>Technical Support</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Message</Label>
                                    <Textarea className="min-h-[150px] rounded-xl bg-gray-50/50 border-gray-100" placeholder="Tell us how we can help..." />
                                </div>

                                <Button className="h-14 w-full md:w-auto px-10 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ContactCard({ icon: Icon, title, info, desc, color }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-4 rounded-xl ${color}`}>
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{title}</p>
                <p className="font-bold text-[#212121]">{info}</p>
                <p className="text-xs text-gray-400 font-medium">{desc}</p>
            </div>
        </div>
    );
}
