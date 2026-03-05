"use client";

import { motion } from "motion/react";
import { FileText, AlertCircle, Users, Scale, Ban, Phone, Clock } from "lucide-react";

const terms = [
    {
        icon: Users,
        title: "Eligibility & Accounts",
        items: [
            "You must be at least 18 years old to use the Shiven platform.",
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "Each person may only maintain one account. Creating multiple accounts is prohibited.",
            "You must provide accurate and up-to-date registration information at all times.",
        ],
    },
    {
        icon: FileText,
        title: "Property Listings",
        items: [
            "All listing information must be accurate, complete, and not misleading.",
            "Shiven reserves the right to remove listings that violate our community standards.",
            "Listing fees and subscription plans are described on our Pricing page and are subject to change.",
            "You may not list properties that you do not have lawful authority to sell or rent.",
        ],
    },
    {
        icon: Scale,
        title: "Limitation of Liability",
        items: [
            "Shiven acts as a marketplace platform and is not a party to any real estate transaction.",
            "We do not verify all listing details and encourage users to conduct independent due diligence.",
            "Our liability is limited to the maximum extent permitted by applicable law.",
            "We are not responsible for any loss or damage arising from reliance on user-generated content.",
        ],
    },
    {
        icon: Ban,
        title: "Prohibited Activities",
        items: [
            "Posting fraudulent, false, or misleading property information.",
            "Soliciting users away from the Shiven platform for transactions.",
            "Using automated scripts or bots to scrape data or submit inquiries.",
            "Any form of harassment, discrimination, or offensive conduct towards other users.",
        ],
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 mb-6">
                        <FileText className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Please read carefully</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-extrabold text-white mb-4">
                        Terms &amp; Conditions
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-xl mx-auto text-base">
                        By using Shiven, you agree to these terms. Please read them carefully before proceeding.
                    </motion.p>
                    <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Effective from: January 1, 2026</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex items-start gap-4">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm leading-relaxed">
                        <strong>Important:</strong> These terms constitute a legally binding agreement between you and Shiven Real Estate Pvt. Ltd. If you do not agree to these terms, you must not use our platform.
                    </p>
                </div>

                <div className="space-y-6">
                    {terms.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                                    <section.icon className="w-6 h-6 text-slate-700" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                        <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 mt-8 text-white">
                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">Questions about our Terms?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">Our legal team is available to clarify any aspect of these terms.</p>
                            <p className="text-blue-400 font-semibold text-sm">legal@shiven.com · 1800-419-9099</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
