import { motion } from "motion/react";
import { Heart, MapPin, CheckCircle2, Ruler, BedDouble, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Property } from "../types/property";
import { Badge } from "./ui/badge";
import { useFavorites } from "../hooks/useFavorites";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-500"
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.featured && (
            <Badge className="bg-[#1565C0] border-0 text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-lg shadow-blue-500/20">
              Featured
            </Badge>
          )}
          <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-[10px] uppercase tracking-widest px-3 py-1">
            {property.type}
          </Badge>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(property.id);
          }}
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${favorite ? "fill-[#E53935] text-[#E53935]" : "text-gray-400"}`} />
        </motion.button>

        <div className="absolute bottom-4 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Prime Listing</p>
          <p className="text-sm font-bold">Verified Since Aug 2024</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ownership Verified</span>
          </div>
          <span className="text-2xl font-black text-[#1565C0] tracking-tighter italic">
            ${(property.price / 1000).toFixed(0)}K
          </span>
        </div>

        <Link to={`/property/${property.id}`}>
          <h3 className="text-xl font-black text-[#212121] mb-2 leading-tight hover:text-[#1565C0] transition-colors">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center text-gray-500 text-xs font-medium mb-8">
          <MapPin className="h-3 w-3 mr-1.5 text-gray-300" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#212121]">{property.bedrooms}</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">BHK</span>
            </div>
            <div className="flex flex-col border-l border-gray-100 pl-6">
              <span className="text-sm font-black text-[#212121]">{property.area}</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Sq.Ft</span>
            </div>
          </div>

          <Link to={`/property/${property.id}`}>
            <motion.button
              whileHover={{ x: 5 }}
              className="p-3 bg-gray-50 rounded-xl text-[#1565C0] hover:bg-blue-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
