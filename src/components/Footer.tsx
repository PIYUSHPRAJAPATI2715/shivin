"use client";

import Link from "next/link";
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const footerLinks = [
        {
            title: "Real Estate in India",
            links: [
                { name: "Properties in Mumbai", href: "/properties?city=mumbai" },
                { name: "Properties in Delhi", href: "/properties?city=delhi" },
                { name: "Properties in Bangalore", href: "/properties?city=bangalore" },
                { name: "Properties in Hyderabad", href: "/properties?city=hyderabad" },
            ],
        },
        {
            title: "Quick Links",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Careers", href: "/careers" },
                { name: "Blogs", href: "/blog" },
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

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Building2 className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">Shiven</span>
                        </Link>
                        <p className="max-w-sm text-slate-400 leading-relaxed text-sm">
                            Shiven is India's most innovative real estate advertising platform for homeowners, landlords, developers, and real estate brokers.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 bg-slate-800 hover:bg-blue-600 hover:text-white rounded-full transition-all">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 hover:bg-blue-400 hover:text-white rounded-full transition-all">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 hover:bg-pink-600 hover:text-white rounded-full transition-all">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 hover:bg-blue-700 hover:text-white rounded-full transition-all">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
                                {section.title}
                            </h3>
                            <ul className="space-y-4 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-blue-400 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
                            Talk to us
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                                <span>1800-419-9099 (Toll Free)</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                                <span>support@shiven.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                                <span>123 Realty Tower, BKC, Mumbai 400051</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <div className="mb-4 flex justify-center space-x-6">
                        <span className="bg-slate-800 px-3 py-1 rounded">RERA Registered</span>
                        <span className="bg-slate-800 px-3 py-1 rounded">ISO 9001:2015</span>
                    </div>
                    <p>© 2026 Shiven Real Estate. All rights reserved. No part of this website may be reproduced without permission.</p>
                </div>
            </div>
        </footer>
    );
}
