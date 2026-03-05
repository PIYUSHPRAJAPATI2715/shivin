"use client";

import Link from "next/link";
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, BookOpen, ShieldCheck, FileText } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
    const footerLinks = [
        {
            title: "Explore",
            links: [
                { name: "Buy Properties", href: "/properties?type=buy" },
                { name: "Rent Properties", href: "/properties?type=rent" },
                { name: "Commercial Spaces", href: "/properties?type=commercial" },
                { name: "New Launches", href: "/properties?type=new-launch" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Blogs", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Trust & Safety", href: "/safety" },
            ],
        },
    ];

    const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai"];

    return (
        <footer className="bg-slate-950 text-slate-300">
            {/* CTA strip */}
            <div className="border-b border-slate-800">
                <div className="container px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Post your property today</p>
                        <h3 className="text-xl font-bold text-white">Reach 5M+ buyers — completely free</h3>
                    </div>
                    <Link href="/property/post">
                        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-colors">
                            Post Property FREE <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="container px-4 md:px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="p-2 bg-blue-600 group-hover:bg-blue-500 rounded-lg transition-colors">
                                <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">Shiven</span>
                        </Link>
                        <p className="max-w-xs text-slate-400 leading-relaxed text-sm">
                            India&apos;s most trusted real estate marketplace. Connecting buyers, sellers, renters, and agents since 2010.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Facebook, color: "hover:bg-blue-600" },
                                { icon: Twitter, color: "hover:bg-sky-500" },
                                { icon: Instagram, color: "hover:bg-pink-600" },
                                { icon: Linkedin, color: "hover:bg-blue-700" },
                            ].map(({ icon: Icon, color }, i) => (
                                <Link key={i} href="#" className={`p-2 bg-slate-800 ${color} hover:text-white rounded-lg transition-all`}>
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                        {/* Trust badges */}
                        <div className="flex gap-2 flex-wrap pt-2">
                            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-400">
                                <ShieldCheck className="w-3 h-3 text-emerald-500" /> RERA Registered
                            </span>
                            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-400">
                                <FileText className="w-3 h-3 text-blue-400" /> ISO 9001:2015
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">{section.title}</h3>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Talk to Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Toll Free</p>
                                    <span className="text-slate-300 font-semibold">1800-419-9099</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                                    <span className="text-slate-300 font-semibold">support@shiven.com</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="h-4 w-4 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">HQ</p>
                                    <span className="text-slate-300 font-semibold">BKC, Mumbai 400051</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Cities */}
                <div className="py-8 border-t border-slate-800">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Properties by City</p>
                    <div className="flex flex-wrap gap-2">
                        {cities.map(city => (
                            <Link key={city} href={`/properties?city=${city.toLowerCase()}`} className="text-xs text-slate-500 hover:text-blue-400 transition-colors font-medium px-3 py-1 rounded-full bg-slate-800/50 hover:bg-blue-600/10">
                                Properties in {city}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2026 Shiven Real Estate Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
                        <Link href="/safety" className="hover:text-blue-400 transition-colors">Safety</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
