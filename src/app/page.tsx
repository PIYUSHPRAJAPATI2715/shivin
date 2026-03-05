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
  const [searchTab, setSearchTab] = useState("Buy / Sell");

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
              className="w-full max-w-3xl"
            >
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                {["Buy / Sell", "Rent / Lease", "Commercial", "Plot / Land"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSearchTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${searchTab === tab
                      ? "bg-white text-slate-900 shadow-lg scale-105"
                      : "bg-slate-900/40 text-white hover:bg-slate-800/60 backdrop-blur-md border border-white/10"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="w-full bg-white/10 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/20 shadow-2xl">
                <SearchBar />
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
                Feature <br />
                <span className="text-blue-600">Projects</span>
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

      {/* High-demand projects to invest */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              High-demand projects to <span className="text-blue-600">Invest</span>
            </h2>
            <Button variant="ghost" className="text-blue-600 font-semibold">
              See All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-start rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop&${i}`} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    Pre-launch
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Emerald Heights Phase {i}</h3>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1 text-blue-500" /> Whitefield, Bangalore
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Starting from</p>
                      <p className="text-lg font-bold text-blue-600">₹1.2 Cr</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Configuration</p>
                      <p className="text-sm font-semibold text-slate-700">2, 3 BHK</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA 1 */}
      <section className="py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Are you a property owner?</h3>
              <p className="text-blue-100">Sell or rent your property faster with our vast network.</p>
            </div>
            <Link href="/post-property" className="relative z-10 w-full md:w-auto">
              <Button size="lg" className="w-full bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 h-14 rounded-full shadow-xl">
                Post Property For Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Selling Real Estate Projects */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Hot Selling <span className="text-blue-600">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={`hot-${i}`} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] shadow-lg">
                <img src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop&sig=${i}`} alt="Hot Selling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded inline-block mb-3">Fast Selling</div>
                  <h3 className="text-white font-bold text-xl mb-1">Sunset Villas</h3>
                  <p className="text-slate-300 text-sm flex items-center"><MapPin className="h-3 w-3 mr-1" /> Juhu Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Localities */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore Top <span className="text-blue-600">Localities</span>
            </h2>
            <p className="text-slate-500">Find the vibrant neighborhoods that perfectly match your lifestyle and investment goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Andheri West", city: "Mumbai", properties: "2,400+" },
              { name: "Whitefield", city: "Bangalore", properties: "1,800+" },
              { name: "Gachibowli", city: "Hyderabad", properties: "1,200+" },
              { name: "Koregaon Park", city: "Pune", properties: "850+" },
              { name: "Gurgaon Sec 54", city: "Delhi NCR", properties: "3,100+" },
            ].map((loc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Building2 className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{loc.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{loc.city}</p>
                <div className="text-[10px] font-bold text-blue-600 bg-blue-50 py-1 px-2 rounded-full inline-block">
                  {loc.properties} Properties
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Launch and Upcoming */}
      <section className="py-20 bg-slate-50/50">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              New Launch & <span className="text-blue-600">Upcoming</span>
            </h2>
            <Button variant="ghost" className="text-blue-600 font-semibold hidden md:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-6">
            {[1, 2].map(i => (
              <div key={`launch-${i}`} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group max-w-5xl mx-auto items-stretch">
                <div className="w-full md:w-[350px] shrink-0 h-64 md:h-auto min-h-[250px] relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop&${i}`} alt="Upcoming" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-blue-900 shadow-sm border border-white/20">
                    Launching Soon
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between self-stretch">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">The Skyline Residencia {i}</h3>
                      <div className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">RERA Info</div>
                    </div>
                    <p className="text-slate-500 mb-6 flex items-center text-sm"><MapPin className="h-4 w-4 mr-1 text-slate-400" /> Downtown Avenue, Metro City</p>

                    <div className="grid grid-cols-3 gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Configuration</p>
                        <p className="font-semibold text-slate-900">3, 4 BHK</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Possession</p>
                        <p className="font-semibold text-slate-900">Dec 2026</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting Price</p>
                        <p className="font-bold text-blue-600 text-lg">₹2.5 Cr</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl flex-1 py-6 shadow-md font-bold text-md">Enquire Now</Button>
                    <Button variant="outline" className="rounded-xl flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 py-6 font-semibold">Download Brochure</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Services / Everything you Need */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything You <span className="text-blue-600">Need</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Home Loans", desc: "Compare & Apply" },
              { icon: Search, title: "Legal Services", desc: "Expert Assistance" },
              { icon: Shield, title: "Property Valuation", desc: "Know real value" },
              { icon: Headphones, title: "Interior Design", desc: "Transform spaces" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl text-center border border-slate-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-sm text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Users <span className="text-blue-600">Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={`test-${i}`} className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100">
                <div className="text-4xl text-blue-200 absolute top-4 left-6">"</div>
                <p className="text-slate-600 relative z-10 mb-6 mt-4 italic">
                  "Finding my dream home was a breeze with Shiven. The platform's verified listings and expert guidance saved me months of searching."
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                    <p className="text-xs text-slate-500">Homebuyer in Bangalore</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs & Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Real Estate <span className="text-blue-600">Insights</span>
            </h2>
            <Button variant="ghost" className="text-blue-600 font-semibold">
              Read All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "1560518883-ce09059eeffa", title: "Top 10 Emerging Neighborhoods in 2026", date: "Mar 1, 2026" },
              { img: "1582268611-920589f03948", title: "How to Secure the Best Home Loan Rates", date: "Feb 28, 2026" },
              { img: "1486406146926-c627a92ad1ab", title: "Interior Design Trends for Modern Homes", date: "Feb 25, 2026" },
            ].map((blog, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src={`https://images.unsplash.com/photo-${blog.img}?q=80&w=600&auto=format&fit=crop`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 font-medium mb-3">{blog.date}</p>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                  <div className="flex items-center text-sm font-semibold text-blue-600">
                    Read Article <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
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

      {/* Contact Us */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-md">Have questions about a property or need help selling yours? Our team of experts is ready to assist you.</p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-bold">+91 1800 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Visit HQ</p>
                    <p className="font-bold">Unit 404, Tech Park, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow bg-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow bg-white" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 py-6 text-lg rounded-xl font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
