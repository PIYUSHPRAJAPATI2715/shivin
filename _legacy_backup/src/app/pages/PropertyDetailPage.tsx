import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useFavorites } from "../hooks/useFavorites";
import { propertyApi } from "../services/api";
import { Property } from "../types/property";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import {
  Bed, Bath, Maximize, MapPin, Heart, ArrowLeft, Calendar, Car, Check, Phone, Mail, CheckCircle2
} from "lucide-react";

export function PropertyDetailPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const loadProperty = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await propertyApi.getById(id);
        if (data) {
          setProperty(data);

          const allProperties = await propertyApi.getAll();
          const similar = allProperties
            .filter(
              (p) =>
                p.id !== data.id &&
                p.type === data.type &&
                Math.abs(p.price - data.price) < 5000000
            )
            .slice(0, 3);
          setSimilarProperties(similar);
        }
      } catch (error) {
        console.error("Failed to load property:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading || !property) {
    return (
      <div className="min-h-screen bg-white">
        <Skeleton className="h-[500px] w-full" />
      </div>
    );
  }

  const favorite = isFavorite(property.id);

  return (
    <div className="min-h-screen bg-gray-50/30 pb-32">
      {/* Navigation Over Image */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 h-16">
        <Link to="/properties" className="flex items-center text-gray-500 font-bold text-xs uppercase tracking-widest hover:text-[#1565C0] transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => toggleFavorite(property.id)} className="rounded-xl">
            <Heart className={`h-5 w-5 ${favorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </Button>
          <Button className="h-10 px-6 bg-[#1565C0] text-white font-black rounded-xl text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200">
            Contact Owner
          </Button>
        </div>
      </div>

      {/* Masonry-style Hero Gallery */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#1565C0] border-0 text-[10px] font-black uppercase tracking-widest px-3 py-1">Featured</Badge>
                <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-[10px] uppercase tracking-widest px-3 py-1">Verified</Badge>
              </div>
              <h1 className="text-3xl font-black tracking-tighter italic">{property.title}</h1>
            </div>
          </motion.div>
          <div className="hidden md:block md:col-span-1 rounded-[1.5rem] overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block md:col-span-1 rounded-[1.5rem] overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block md:col-span-2 md:col-start-3 rounded-[1.5rem] overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1600607687940-4e20035099cb?w=800&q=80" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-black text-xl">+12 Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Key Highlights */}
            <div className="flex flex-wrap gap-8 items-center bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5">
              <DetailStat icon={Bed} value={property.bedrooms} label="Bedrooms" />
              <DetailStat icon={Bath} value={property.bathrooms} label="Bathrooms" />
              <DetailStat icon={Maximize} value={property.area} label="Sq.Ft Area" />
              <DetailStat icon={Car} value="Gated" label="Parking" />
              <div className="flex-1 flex justify-end">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Asking Price</p>
                  <p className="text-4xl font-black text-[#1565C0] tracking-tighter">${(property.price / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-[#212121] italic">The Space</h2>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">
                This meticulously designed property offers a perfect blend of modern luxury and comfort.
                Located in the heart of {property.location}, it features state-of-the-art amenities
                and a spacious layout perfect for elite living.
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-[#212121] italic">Premium Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Swimming Pool', 'Smart Home', 'Private Gym', '24/7 Security', 'Lush Garden', 'Club House'].map(item => (
                  <div key={item} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#1565C0]">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden ring-4 ring-blue-50">
                    <img src="https://i.pravatar.cc/150?u=agent" alt="agent" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#212121]">Sarah Johnson</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Shiven Prime Agent</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full h-14 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-black rounded-2xl shadow-xl shadow-blue-200 uppercase tracking-widest transition-all">
                    <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-2 border-gray-100 hover:border-[#1565C0] text-[#212121] font-black rounded-2xl uppercase tracking-widest transition-all">
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </Button>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-sm font-bold text-[#212121]">Average 15 minutes</p>
                </div>
              </div>

              {/* Trust Factors */}
              <div className="p-6 bg-[#E53935]/5 rounded-[2rem] border border-[#E53935]/10 space-y-4">
                <h4 className="font-black text-[#E53935] text-xs uppercase tracking-widest">Trust Factors</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-xs font-bold text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" /> Title Deed Verified
                  </div>
                  <div className="flex items-center text-xs font-bold text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" /> Structural Audit Done
                  </div>
                  <div className="flex items-center text-xs font-bold text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" /> Maintenance Cleared
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-24 left-4 right-4 z-50">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="flex gap-4 p-4 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-2xl"
        >
          <Button onClick={() => toggleFavorite(property.id)} variant="outline" className="w-14 h-14 rounded-2xl border-gray-100">
            <Heart className={`h-6 w-6 ${favorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </Button>
          <Button className="flex-1 h-14 bg-[#1565C0] text-white font-black rounded-2xl shadow-lg shadow-blue-200 uppercase tracking-widest">
            Connect Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function DetailStat({ icon: Icon, value, label }: any) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-[#212121] font-black text-xl tracking-tighter">
        <Icon className="h-5 w-5 mr-2 text-[#1565C0]" />
        {value}
      </div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}
