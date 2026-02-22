"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, CheckCircle2, SlidersHorizontal, ChevronRight, Search as SearchIcon } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { FilterPanel } from "@/components/FilterPanel";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { propertyApi } from "@/services/api";
import { Property, FilterOptions } from "@/types/property";
import { PropertyGridSkeleton } from "@/components/LoadingStates";

export default function PropertiesPage() {
    const [filters, setFilters] = useState<FilterOptions>({
        priceRange: [0, 5000000],
        propertyTypes: [],
        bedrooms: null,
        bathrooms: null,
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [sheetOpen, setSheetOpen] = useState(false);

    useEffect(() => {
        loadProperties();
    }, [filters, searchQuery]);

    const loadProperties = async () => {
        setLoading(true);
        try {
            let result: Property[];

            if (searchQuery) {
                result = await propertyApi.search(searchQuery);
            } else {
                result = await propertyApi.filter({
                    priceRange: filters.priceRange,
                    propertyTypes: filters.propertyTypes.length > 0 ? filters.propertyTypes : undefined,
                    bedrooms: filters.bedrooms || undefined,
                    bathrooms: filters.bathrooms || undefined,
                });
            }

            setProperties(result);
        } catch (error) {
            console.error("Failed to load properties:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
            {/* Search Header */}
            <section className="bg-white border-b py-8 sticky top-[64px] z-30 shadow-sm">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        <div className="w-full lg:max-w-2xl">
                            <SearchBar
                                onSearch={setSearchQuery}
                                onFilterClick={() => setSheetOpen(true)}
                                showFilterButton
                            />
                        </div>
                        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                            {['Budget', 'BHK', 'Type', 'More'].map(filter => (
                                <Button key={filter} variant="outline" size="sm" className="rounded-full h-8 px-4 text-xs font-bold border-slate-200" onClick={() => setSheetOpen(true)}>
                                    {filter}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Desktop Sidebar Filters */}
                    <aside className="hidden lg:block w-80 flex-shrink-0">
                        <div className="sticky top-[180px]">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900">Advanced Filters</h3>
                                <Button variant="link" size="sm" className="text-blue-600 text-[10px] font-black uppercase p-0" onClick={() => {
                                    setFilters({
                                        priceRange: [0, 5000000],
                                        propertyTypes: [],
                                        bedrooms: null,
                                        bathrooms: null,
                                    });
                                }}>Reset</Button>
                            </div>
                            <FilterPanel filters={filters} onFiltersChange={setFilters} />
                        </div>
                    </aside>

                    {/* Mobile Sheet Filters */}
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetContent side="bottom" className="h-[90vh] rounded-t-[3rem] overflow-y-auto px-8 pb-12">
                            <SheetHeader className="mb-8 font-display">
                                <SheetTitle className="text-2xl font-black italic">Refine Results</SheetTitle>
                            </SheetHeader>
                            <FilterPanel filters={filters} onFiltersChange={setFilters} />
                            <Button onClick={() => setSheetOpen(false)} className="w-full h-14 bg-blue-600 rounded-2xl mt-8 font-black uppercase tracking-widest shadow-xl shadow-blue-500/20">
                                Update Discovery
                            </Button>
                        </SheetContent>
                    </Sheet>

                    {/* Results Area */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <div className="space-y-1">
                                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Listings</h2>
                                <p className="text-2xl font-bold text-slate-900">
                                    {loading ? "Discovering..." : `${properties.length} Active Listings`}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <select className="bg-white border text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                                    <option>Sort: Popular</option>
                                    <option>Price: Low-High</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </div>

                        {loading ? (
                            <PropertyGridSkeleton count={6} />
                        ) : properties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {properties.map((property, index) => (
                                    <PropertyCard key={property.id} property={property} index={index} />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-xl"
                            >
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SearchIcon className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">No matching sanctuaries found</h3>
                                <p className="text-slate-500 font-medium mb-12 max-w-sm mx-auto">
                                    Try expanding your search parameters or check our featured picks.
                                </p>
                                <Button
                                    onClick={() => {
                                        setFilters({
                                            priceRange: [0, 5000000],
                                            propertyTypes: [],
                                            bedrooms: null,
                                            bathrooms: null,
                                        });
                                        setSearchQuery("");
                                    }}
                                    className="bg-slate-900 text-white rounded-2xl px-12 h-14 font-bold"
                                >
                                    Clear All Filters
                                </Button>
                            </motion.div>
                        )}

                        {/* Bottom Pagination / Load More */}
                        {!loading && properties.length > 0 && (
                            <div className="mt-16 flex justify-center">
                                <Button variant="outline" className="h-14 px-12 rounded-2xl border-slate-200 text-slate-900 font-bold hover:bg-slate-50">
                                    Load More Listings
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
