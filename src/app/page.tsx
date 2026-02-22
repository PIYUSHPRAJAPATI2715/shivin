"use client";

import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Headphones, Sparkles, MapPin, Building2, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { propertyApi } from "@/services/api";
import { Property } from "@/types/property";
import { PropertyGridSkeleton } from "@/components/LoadingStates";

export default function HomePage() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProperties = async () => {
      try {
        const properties = await propertyApi.getFeatured();
        setFeaturedProperties(properties);
      } catch (error) {
        console.error("Failed to load featured properties:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProperties();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Access to the most exclusive properties before they hit the general market.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property undergoes a 25-point verification process for your peace of mind.",
      color: "from-indigo-600 to-violet-600",
    },
    {
      icon: Headphones,
      title: "Expert Guidance",
      description: "Dedicated relationship managers to guide you through every step of your home journey.",
      color: "from-violet-600 to-purple-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - High Fidelity */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Home"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Premium Real Estate Marketplace</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              The Intelligent Way to <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Find Your Sanctuary
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed"
            >
              Join 1M+ users finding their perfect homes, offices, and commercial spaces with India&apos;s most trusted real estate network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/10 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-0">
                <div className="flex-1">
                  <SearchBar />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
              <p className="text-sm text-slate-400">
                <span className="font-bold text-white underline decoration-blue-500">2,500+</span> properties listed in last 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Look */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: "45k+", label: "Property Listings" },
              { value: "1.2M", label: "Monthly Users" },
              { value: "150+", label: "Verified Agents" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Recommended <br />
                <span className="text-blue-600">For You</span>
              </h2>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-full border-slate-200">Residential</Button>
                <Button size="sm" variant="ghost" className="rounded-full">Commercial</Button>
                <Button size="sm" variant="ghost" className="rounded-full">Land / Plots</Button>
              </div>
            </div>
            <Link href="/properties">
              <Button variant="link" className="text-blue-600 font-bold group">
                View All Listings <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <PropertyGridSkeleton count={3} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.slice(0, 3).map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us - Service Excellence */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">Why Choose Shiven Excellence?</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We don&apos;t just list properties; we build the future of home buying with cutting-edge technology and human expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-10 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA - Mobile App and Registration */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 border-8 border-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="flex-1 text-center md:text-left relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Want to Sell or Rent <br />
                Your Property?
              </h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl">
                List your property for free and reach 5M+ buyers today. No hidden charges. No broker commissions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/post-property">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 font-bold px-8 h-14 rounded-2xl">
                    Post Your Property FREE
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 h-14 rounded-2xl">
                    Register as Owner
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex-1 relative z-10 hidden lg:block">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-400 flex items-center justify-center">
                      <CheckCircle2 className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Ownership Verified</p>
                      <p className="text-blue-200 text-xs">Instant listing activation</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-green-400" />
                  </div>
                  <p className="text-blue-100 text-xs">98% Match Rate with Local Buyers</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
