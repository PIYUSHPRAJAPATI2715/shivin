import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Navigation } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { PropertyTheme } from "../../styles/PropertyTheme";

const tabs = ["Buy", "Rent", "Commercial"];

export function PropertyHero() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Buy");
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/properties?search=${searchValue}`);
    };

    return (
        <div className="relative pt-6 pb-12 px-4 bg-white border-b border-gray-100">
            <div className="max-w-xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black text-[#212121] mb-8 leading-[1.1] tracking-tight italic">
                    Find home. <span className="text-[#1565C0] not-italic">Trusted.</span>
                </h1>

                {/* Search Tabs */}
                <div className="flex space-x-1 mb-4 p-1 bg-gray-100/50 rounded-lg w-fit">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === tab ? "text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tabBg"
                                    className="absolute inset-0 bg-[#1565C0] rounded-md"
                                    transition={PropertyTheme.animations?.slide}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onSubmit={handleSearch}
                    className="relative flex items-center shadow-xl shadow-blue-900/5"
                >
                    <div className="absolute left-4 z-10 text-gray-400">
                        <Search className="h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search by Locality, Project or Builder"
                        className="w-full pl-12 pr-28 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565C0]/20 focus:border-[#1565C0] transition-all text-sm"
                    />
                    <div className="absolute right-2 flex items-center">
                        <button type="submit" className="flex items-center space-x-1 px-3 py-2 text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors text-xs font-semibold">
                            <MapPin className="h-4 w-4" />
                            <span>Search</span>
                        </button>
                    </div>
                </motion.form>

                {/* Quick Stats/Links */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {["Verified Only", "New Projects", "Plots", "Luxury"].map((tag) => (
                        <Link
                            key={tag}
                            to={`/properties?filter=${tag.toLowerCase()}`}
                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[11px] font-medium text-gray-600 hover:border-[#1565C0] hover:text-[#1565C0] transition-all"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
