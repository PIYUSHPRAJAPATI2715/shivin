import { Link, Outlet, useLocation } from "react-router";
import { Home, Search, Heart, PlusSquare, User, Menu, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PropertyTheme } from "../../styles/PropertyTheme";

export function PropertyLayout() {
    const location = useLocation();

    const navigation = [
        { name: "Home", href: "/", icon: Home },
        { name: "Search", href: "/properties", icon: Search },
        { name: "Waitlist", href: "/waitlist", icon: Clock },
        { name: "Support", href: "/contact", icon: MessageCircle },
        { name: "Shortlist", href: "/favorites", icon: Heart },
        { name: "Profile", href: "/profile", icon: User },
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FA] pb-20 md:pb-0">
            {/* Professional Header */}
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#1565C0] rounded flex items-center justify-center">
                            <span className="text-white font-black text-xl italic">S</span>
                        </div>
                        <span className="font-extrabold text-xl text-[#212121] tracking-tight">Shiven</span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link to="/post-property" className="hidden sm:flex px-4 py-2 border border-[#E53935] text-[#E53935] font-bold text-xs rounded-lg hover:bg-red-50 transition-colors uppercase">
                            Post Property <span className="ml-1 px-1.5 py-0.5 bg-red-100 rounded text-[9px]">Free</span>
                        </Link>
                        <Link to="/profile" className="p-2 text-gray-400 hover:text-gray-600">
                            <Menu className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* Content */}
            <main className="container mx-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]"
            >
                <div className="grid grid-cols-5 h-16">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="flex flex-col items-center justify-center relative group"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col items-center"
                                >
                                    <item.icon className={`h-5 w-5 mb-1 ${isActive ? "text-[#1565C0]" : "text-gray-400"
                                        }`} />
                                    <span className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? "text-[#1565C0]" : "text-gray-400"
                                        }`}>
                                        {item.name}
                                    </span>
                                </motion.div>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute top-0 w-12 h-1 bg-[#1565C0] rounded-b-full"
                                        transition={PropertyTheme.animations?.gentle}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </motion.nav>
        </div>
    );
}
