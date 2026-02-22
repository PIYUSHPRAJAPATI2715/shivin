import { useState, useEffect } from "react";
import { PropertyCard } from "../components/PropertyCard";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useFavorites } from "../hooks/useFavorites";
import { propertyApi } from "../services/api";
import { Property } from "../types/property";
import { PropertyGridSkeleton } from "../components/LoadingStates";

export function FavoritesPage() {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      if (favorites.length > 0) {
        const allProperties = await propertyApi.getAll();
        const favoriteProperties = allProperties.filter((p) =>
          favorites.includes(p.id)
        );
        setProperties(favoriteProperties);
      } else {
        setProperties([]);
      }
    };

    loadFavorites();
  }, [favorites]);

  if (loading) {
    return (
      <div className="container px-4 py-12">
        <PropertyGridSkeleton count={3} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-0">
      <section className="py-12 md:py-20 border-b bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full -ml-48 -mt-48 blur-3xl opacity-30" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-black text-[#212121] tracking-tighter italic">
              My <span className="text-[#1565C0] not-italic">Shortlist.</span>
            </h1>
            <p className="text-gray-400 font-medium mt-2">Manage your saved properties and track price changes.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white rounded-[3rem] border border-gray-100 shadow-xl max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-[#E53935]" />
              </div>
              <h3 className="text-2xl font-black text-[#212121] mb-2">No properties shortlisted yet</h3>
              <p className="text-gray-400 font-medium mb-10 max-w-xs mx-auto">
                Discover properties and tap the heart icon to save them for later.
              </p>
              <Link to="/properties">
                <Button className="h-14 px-10 bg-[#1565C0] rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200">
                  Start Browsing
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
