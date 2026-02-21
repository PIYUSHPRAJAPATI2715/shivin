import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, CheckCircle2, SlidersHorizontal, ChevronRight } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
import { FilterPanel } from "../components/FilterPanel";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { propertyApi } from "../services/api";
import { Property, FilterOptions } from "../types/property";
import { PropertyGridSkeleton } from "../components/LoadingStates";

export function PropertiesPage() {
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
    <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-0">
      {/* Premium Discovery Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 md:py-20 border-b bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <h1 className="text-4xl font-black text-[#212121] tracking-tighter italic">
                Discover <span className="text-[#1565C0] not-italic">Better.</span>
              </h1>
              <p className="text-gray-400 font-medium mt-2">Find the most exclusively verified properties in your city.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-gray-500 max-w-[120px]">10K+ users searched today</p>
            </div>
          </motion.div>

          <div className="max-w-3xl">
            <SearchBar
              onSearch={setSearchQuery}
              onFilterClick={() => setSheetOpen(true)}
              showFilterButton
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {['Under 50L', 'Ready Move', 'No Brokerage', '3+ BHK', 'Gated Community'].map(tag => (
              <button key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:border-[#1565C0] hover:text-[#1565C0] transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Desktop Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block w-80 flex-shrink-0"
            >
              <div className="sticky top-24 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5">
                <FilterPanel filters={filters} onFiltersChange={setFilters} />
              </div>
            </motion.aside>

            {/* Mobile Filters */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetContent side="bottom" className="h-[90vh] rounded-t-[3rem] overflow-y-auto px-8 pb-12">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-2xl font-black italic">Filter Properties</SheetTitle>
                </SheetHeader>
                <FilterPanel filters={filters} onFiltersChange={setFilters} />
                <Button onClick={() => setSheetOpen(false)} className="w-full h-14 bg-[#1565C0] rounded-2xl mt-8 font-black uppercase tracking-widest">
                  Show Results
                </Button>
              </SheetContent>
            </Sheet>

            {/* Properties Grid */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-10 flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100"
              >
                <p className="text-sm font-bold text-gray-500">
                  Showing <span className="text-[#1565C0]">{properties.length}</span> verified results
                </p>

                <div className="flex items-center gap-4">
                  <select className="bg-transparent text-xs font-bold text-gray-600 focus:outline-none">
                    <option>Sort: Relevant</option>
                    <option>Price: Low to High</option>
                    <option>Newest First</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-[#1565C0] font-black"
                    onClick={() => setSheetOpen(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </motion.div>

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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-white rounded-[3rem] border border-gray-100 shadow-xl"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    🏘️
                  </div>
                  <h3 className="text-xl font-black text-[#212121] mb-2">No matching properties</h3>
                  <p className="text-gray-400 font-medium mb-8 max-w-xs mx-auto">
                    Try adjusting your filters or searching for a different locality.
                  </p>
                  <Button
                    variant="outline"
                    className="h-12 px-8 rounded-xl font-bold border-gray-200 hover:bg-gray-50 transition-all"
                    onClick={() => {
                      setFilters({
                        priceRange: [0, 5000000],
                        propertyTypes: [],
                        bedrooms: null,
                        bathrooms: null,
                      });
                      setSearchQuery("");
                    }}
                  >
                    Reset All Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
