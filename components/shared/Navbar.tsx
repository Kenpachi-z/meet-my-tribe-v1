"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "L'association", href: "/association" },
    { name: "Nos Projets", href: "/projets" },
    { name: "Galerie", href: "/galerie" },
    { name: "Rejoindre la Tribu", href: "/rejoindre" },
    { name: "On parle de nous", href: "/presse" },
    { name: "Boutique", href: "/boutique" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Gestion du scroll pour l'effet sticky
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Empêcher le scroll quand le menu mobile est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-mmt-sable/20" : "bg-white"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-title text-2xl font-black text-mmt-chocolat tracking-tight">
                            Meet My Tribe
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-2 py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-mmt-terracotta rounded-md relative group",
                                    pathname === link.href ? "text-mmt-chocolat font-bold" : "text-mmt-marron"
                                )}
                            >
                                {link.name}
                                {/* Soulignement actig/hover */}
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-full h-0.5 bg-mmt-terracotta transform origin-left transition-transform duration-300",
                                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                )}></span>
                            </Link>
                        ))}

                        <a
                            href="https://www.helloasso.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-sm text-sm font-bold text-white bg-mmt-chocolat hover:bg-mmt-marron transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mmt-chocolat"
                        >
                            Faire un don
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-mmt-chocolat hover:text-mmt-terracotta hover:bg-mmt-sable/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mmt-terracotta transition-colors"
                            aria-expanded={isOpen}
                            aria-label="Ouvrir le menu principal"
                        >
                            {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 top-20 bg-mmt-cream z-40 transition-transform duration-300 ease-in-out transform shadow-2xl",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="h-full flex flex-col justify-between pt-6 pb-20 px-6 overflow-y-auto">
                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-4 py-4 text-xl font-title font-bold rounded-xl transition-colors",
                                    pathname === link.href
                                        ? "bg-mmt-sable/30 text-mmt-chocolat"
                                        : "text-mmt-marron hover:bg-mmt-sable/20 hover:text-mmt-chocolat"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-8">
                        <a
                            href="https://www.helloasso.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center items-center px-6 py-4 rounded-full shadow-lg text-lg font-bold text-white bg-mmt-chocolat hover:bg-mmt-marron transition-transform active:scale-95"
                        >
                            Faire un don de soutien
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
