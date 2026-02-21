import { motion } from "motion/react";
import { PropertyHero } from "../components/PropertyHero";
import { PropertyCard } from "../components/PropertyCard";
import { Building2, Home, Landmark, Trees, Factory } from "lucide-react";
import { Link } from "react-router";
import { PropertyTheme } from "../../styles/PropertyTheme";

import { propertyApi } from "../services/api";
import { useEffect, useState } from "react";
import { Property } from "../types/property";

const propertyCategories = [
    { name: "Houses", icon: Home, count: "1.2k+" },
    { name: "Apartments", icon: Building2, count: "5k+" },
    { name: "Land", icon: Trees, count: "800+" },
    { name: "Commercial", icon: Factory, count: "1.5k+" },
    { name: "Plots", icon: Landmark, count: "600+" },
];

const trendingLocalities = [
    { name: "Gurgaon", count: "12,400+", image: "https://images.unsplash.com/photo-1590059132718-59c19348e940?w=200&h=200&fit=crop" },
    { name: "Bangalore", count: "8,200+", image: "https://images.unsplash.com/photo-1596422846543-75c6fc1850ec?w=200&h=200&fit=crop" },
    { name: "Mumbai", count: "15,800+", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=200&h=200&fit=crop" },
    { name: "Delhi", count: "9,600+", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop" },
    { name: "Pune", count: "6,400+", image: "https://images.unsplash.com/photo-1562914399-c0a850b092cd?w=200&h=200&fit=crop" },
];

export function PropertyHomePage() {
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

    useEffect(() => {
        propertyApi.getFeatured().then(setFeaturedProperties);
    }, []);

    return (
        <div className="bg-gray-50/50">
            <PropertyHero />

            {/* Trending Localities */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-[#212121]">Trending Localities</h2>
                            <p className="text-gray-400 font-medium text-sm mt-1">Discover popular areas with high search volume</p>
                        </div>
                    </div>
                    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {trendingLocalities.map((loc, idx) => (
                            <Link
                                key={loc.name}
                                to={`/properties?locality=${loc.name}`}
                                className="flex flex-col items-center min-w-[120px] cursor-pointer group"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-3 ring-1 ring-gray-100 group-hover:ring-[#1565C0]/30 transition-all">
                                        <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm group-hover:text-[#1565C0] transition-colors">{loc.name}</span>
                                    <span className="text-[10px] text-[#1565C0] font-black uppercase tracking-widest mt-1">{loc.count}</span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Categories (Compact) */}
            <section className="py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
                    {propertyCategories.map((cat, idx) => (
                        <motion.button
                            key={cat.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#1565C0]/20 hover:shadow-blue-900/5 transition-all"
                        >
                            <div className="p-2.5 bg-blue-50/50 rounded-xl text-[#1565C0]">
                                <cat.icon className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-gray-800">{cat.name}</p>
                                <p className="text-[10px] text-gray-400 font-medium">{cat.count}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Featured Properties Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-[#212121]">Premium Listings</h2>
                            <p className="text-gray-400 font-medium text-sm mt-1">Verified properties with highest quality assurance</p>
                        </div>
                        <Link to="/properties">
                            <button className="px-6 py-2.5 bg-white border border-[#1565C0] text-[#1565C0] rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-all">
                                Explore All
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProperties.map((prop, idx) => (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + idx * 0.1 }}
                            >
                                <PropertyCard property={prop} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Collections */}
            <section className="py-16 px-4 bg-[#1565C0]/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CollectionCard
                        title="Ready to Move"
                        desc="Shift into your dream home today"
                        color="bg-blue-600"
                        img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    />
                    <CollectionCard
                        title="Zero Brokerage"
                        desc="Save more with direct listings"
                        color="bg-[#E53935]"
                        img="https://images.unsplash.com/photo-1600607687940-4e20035099cb?w=800&q=80"
                    />
                    <CollectionCard
                        title="Luxury Living"
                        desc="Experience elite living spaces"
                        color="bg-gold-500"
                        img="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    />
                </div>
            </section>

            {/* Trust Banner */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="relative p-12 bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-[3rem] text-white overflow-hidden shadow-2xl">
                        <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
                            <div>
                                <h2 className="text-4xl font-black mb-6 leading-tight italic">Find Home. Find Hope.</h2>
                                <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
                                    Join millions of satisfied property owners and tenants who found success with Shiven. 100% verified listings.
                                </p>
                                <div className="flex space-x-4">
                                    <Link to="/post-property">
                                        <button className="px-8 py-4 bg-white text-[#1565C0] font-black rounded-2xl text-sm shadow-xl hover:scale-105 transition-transform">
                                            Post Free Property
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="px-8 py-4 bg-[#E53935] text-white font-black rounded-2xl text-sm shadow-xl hover:scale-105 transition-transform">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-end pr-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <StatBox count="10M+" label="Monthly Users" />
                                    <StatBox count="500K+" label="Active Listings" />
                                    <StatBox count="100%" label="Verified Data" />
                                    <StatBox count="24/7" label="Support" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -mr-96 -mt-96 blur-[120px]" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function CollectionCard({ title, desc, img }: any) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-xl shadow-blue-900/5"
        >
            <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-black text-white mb-2">{title}</h3>
                <p className="text-white/70 text-sm font-medium">{desc}</p>
                <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '40px' }}
                    className="h-1 bg-[#1565C0] mt-4 rounded-full"
                />
            </div>
        </motion.div>
    );
}

function StatBox({ count, label }: { count: string; label: string }) {
    return (
        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-center">
            <p className="text-2xl font-black text-white mb-1 tracking-tighter">{count}</p>
            <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">{label}</p>
        </div>
    );
}
