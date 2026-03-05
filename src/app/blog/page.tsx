"use client";

import { motion } from "motion/react";
import { ArrowRight, BookOpen, Clock, Tag, Search, TrendingUp, Home, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Market Trends", "Investment", "Home Buying", "Interior Design", "Legal"];

const blogs = [
    {
        id: 1,
        img: "1560518883-ce09059eeffa",
        category: "Market Trends",
        title: "Top 10 Emerging Neighborhoods to Watch in 2026",
        excerpt: "From Navi Mumbai's tech corridors to Hyderabad's Genome Valley, we explore the localities offering the strongest rental yields and capital appreciation.",
        author: "Aditya Sharma",
        avatar: "https://i.pravatar.cc/100?img=12",
        date: "Mar 1, 2026",
        readTime: "7 min read",
        featured: true,
    },
    {
        id: 2,
        img: "1582268611-920589f03948",
        category: "Investment",
        title: "How to Secure the Best Home Loan Rates in Q1 2026",
        excerpt: "Navigate the lending landscape with our expert breakdown of fixed vs floating rates, processing fees, and the best banks for first-time buyers.",
        author: "Priya Nair",
        avatar: "https://i.pravatar.cc/100?img=21",
        date: "Feb 28, 2026",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 3,
        img: "1486406146926-c627a92ad1ab",
        category: "Interior Design",
        title: "Interior Design Trends Dominating Premium Homes in 2026",
        excerpt: "Japandi minimalism meets biophilic design. We look at the top aesthetics shaping ultra-luxury interiors globally and in India this year.",
        author: "Meera Singh",
        avatar: "https://i.pravatar.cc/100?img=31",
        date: "Feb 25, 2026",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 4,
        img: "1600607687920-4e2a09cf159d",
        category: "Home Buying",
        title: "A Complete Checklist for First-Time Homebuyers in India",
        excerpt: "From RERA verification to stamp duty calculations, here is everything you need to know before signing your first property deed.",
        author: "Rahul Mehta",
        avatar: "https://i.pravatar.cc/100?img=41",
        date: "Feb 20, 2026",
        readTime: "9 min read",
        featured: false,
    },
    {
        id: 5,
        img: "1545324418-cc1a3fa10c00",
        category: "Legal",
        title: "Understanding RERA: Your Rights as a Homebuyer Explained",
        excerpt: "The Real Estate Regulatory Authority was designed to protect buyers. Here's how you can use it to your advantage and hold builders accountable.",
        author: "Adv. Kavya Reddy",
        avatar: "https://i.pravatar.cc/100?img=51",
        date: "Feb 15, 2026",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 6,
        img: "1512917774080-9991f1c4c750",
        category: "Market Trends",
        title: "Mumbai Real Estate: Will Property Prices Keep Rising in 2026?",
        excerpt: "With limited land and growing demand from HNIs and NRIs, Mumbai's real estate market shows no signs of slowing down.",
        author: "Vikram Joshi",
        avatar: "https://i.pravatar.cc/100?img=61",
        date: "Feb 10, 2026",
        readTime: "5 min read",
        featured: false,
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = blogs.filter(b => {
        const matchCat = activeCategory === "All" || b.category === activeCategory;
        const matchSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = blogs.find(b => b.featured);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Blog"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-6"
                    >
                        <BookOpen className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Real Estate Insights</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
                    >
                        Knowledge Is Your<br />
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Best Investment
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg max-w-xl mx-auto"
                    >
                        Expert analysis, market reports, and practical guides for homebuyers, sellers, and investors.
                    </motion.p>
                </div>
            </section>

            {/* Search + Filters */}
            <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-6 md:p-8 border border-slate-100"
                >
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Featured Article */}
            {featured && activeCategory === "All" && !searchQuery && (
                <section className="container mx-auto px-4 mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <h2 className="text-xl font-bold text-slate-900">Featured Article</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2 hover:shadow-2xl transition-all"
                    >
                        <div className="h-72 lg:h-auto overflow-hidden">
                            <img
                                src={`https://images.unsplash.com/photo-${featured.img}?q=80&w=1200&auto=format&fit=crop`}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 text-xs font-bold bg-blue-50 text-blue-600 rounded-full border border-blue-100">{featured.category}</span>
                                <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">{featured.title}</h2>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={featured.avatar} alt={featured.author} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{featured.author}</p>
                                        <p className="text-xs text-slate-400">{featured.date}</p>
                                    </div>
                                </div>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Articles Grid */}
            <section className="container mx-auto px-4 pb-24">
                <h2 className="text-xl font-bold text-slate-900 mb-8">
                    {activeCategory === "All" ? "All Articles" : activeCategory} <span className="text-slate-400 font-normal">({filtered.length})</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={`https://images.unsplash.com/photo-${blog.img}?q=80&w=800&auto=format&fit=crop`}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2.5 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-wider">{blog.category}</span>
                                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">{blog.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{blog.excerpt}</p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2.5">
                                        <img src={blog.avatar} alt={blog.author} className="w-8 h-8 rounded-full object-cover" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-900">{blog.author}</p>
                                            <p className="text-[10px] text-slate-400">{blog.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                        Read <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-600 mb-2">No articles found</h3>
                        <p className="text-slate-400">Try adjusting your search or category filter.</p>
                    </div>
                )}
            </section>

            {/* Newsletter CTA */}
            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-24">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Stay Ahead of the Market</h2>
                        <p className="text-slate-400 text-lg mb-10">Get our weekly digest of market reports, property alerts, and expert analysis straight to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-md"
                            />
                            <Button className="h-auto py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl whitespace-nowrap">
                                Subscribe Free
                            </Button>
                        </div>
                        <p className="text-slate-500 text-xs mt-4">No spam, ever. Unsubscribe in one click.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
