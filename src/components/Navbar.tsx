"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Heart, User, Menu, X, Search, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Buy", href: "/properties?type=buy", icon: Search },
        { name: "Rent", href: "/properties?type=rent", icon: Building2 },
        { name: "Services", href: "/services", icon: Heart },
        { name: "Favorites", href: "/dashboard", icon: Heart },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg"
                    >
                        <Building2 className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                        Shiven
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-blue-600 relative py-1",
                                    isActive ? "text-blue-700" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center space-x-4">
                    <Link href="/property/post" className="hidden md:block">
                        <Button variant="outline" className="border-blue-200 hover:bg-blue-50 text-blue-700 font-semibold gap-2">
                            <PlusCircle className="h-4 w-4" />
                            Post Property
                            <span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded ml-1 font-bold">FREE</span>
                        </Button>
                    </Link>

                    <Link href="/login" className="hidden md:block">
                        <Button variant="ghost" className="font-medium text-foreground/80">Login</Button>
                    </Link>

                    <Link href="/dashboard" className="p-2 hover:bg-muted rounded-full transition-colors md:hidden">
                        <User className="h-5 w-5 text-muted-foreground" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <X className="h-6 w-6" />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Menu className="h-6 w-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="container px-4 py-6 flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center space-x-3 text-lg font-medium p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                    <item.icon className="h-5 w-5 text-blue-600" />
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            <hr />
                            <Link href="/property/post" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start h-12 text-lg">
                                    <PlusCircle className="h-5 w-5 mr-3" />
                                    Post Property
                                </Button>
                            </Link>
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" className="w-full justify-start h-12 text-lg">
                                    <User className="h-5 w-5 mr-3" />
                                    Login / Register
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
