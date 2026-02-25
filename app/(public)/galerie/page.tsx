"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data pour la galerie (normalement fetchée depuis Supabase `gallery_items`)
const MOCK_GALLERY_ITEMS = [
    { id: "1", type: "photo", url: "/images/placeholder-gallery-1.jpg", title: "Atelier Paris", project: "paris", year: 2024 },
    { id: "2", type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "/images/placeholder-gallery-2.jpg", title: "Performance Dakar", project: "dakar", year: 2023 },
    { id: "3", type: "photo", url: "/images/placeholder-gallery-3.jpg", title: "Expo Alger", project: "alger", year: 2023 },
    { id: "4", type: "photo", url: "/images/placeholder-asso.jpg", title: "Préparation Résidence", project: "paris", year: 2024 },
    { id: "5", type: "photo", url: "/images/placeholder-projet-1.jpg", title: "Street Art Session", project: "dakar", year: 2023 },
    { id: "6", type: "video", url: "https://www.youtube.com/embed/jNQXAC9IVRw", thumbnail: "/images/placeholder-projet-2.jpg", title: "Documentaire Créatif", project: "paris", year: 2024 },
];

export default function GaleriePage() {
    const [filterType, setFilterType] = useState<"all" | "photo" | "video">("all");
    const [filterProject, setFilterProject] = useState<string>("all");

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const filteredItems = MOCK_GALLERY_ITEMS.filter((item) => {
        if (filterType !== "all" && item.type !== filterType) return false;
        if (filterProject !== "all" && item.project !== filterProject) return false;
        return true;
    });

    const openLightbox = (index: number) => {
        setCurrentMediaIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden"; // Prevent scroll
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
    };

    const nextMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentMediaIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentMediaIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const currentItem = filteredItems[currentMediaIndex];

    return (
        <main className="min-h-screen py-24 bg-mmt-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-title font-black text-mmt-chocolat mb-6">
                        Galerie Immersive
                    </h1>
                    <p className="text-lg text-mmt-marron max-w-2xl mx-auto">
                        Découvrez en images et en vidéos le processus de création, les résidences,
                        et l'énergie des Tribus Urbaines.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-full shadow-sm border border-mmt-sable/20 mb-12 gap-4">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilterType("all")}
                            className={cn("px-4 py-2 rounded-full text-sm font-bold transition-colors", filterType === "all" ? "bg-mmt-chocolat text-white" : "text-mmt-marron hover:bg-mmt-sable/20")}
                        >
                            Tous
                        </button>
                        <button
                            onClick={() => setFilterType("photo")}
                            className={cn("px-4 py-2 rounded-full text-sm font-bold transition-colors", filterType === "photo" ? "bg-mmt-chocolat text-white" : "text-mmt-marron hover:bg-mmt-sable/20")}
                        >
                            Photos
                        </button>
                        <button
                            onClick={() => setFilterType("video")}
                            className={cn("px-4 py-2 rounded-full text-sm font-bold transition-colors", filterType === "video" ? "bg-mmt-chocolat text-white" : "text-mmt-marron hover:bg-mmt-sable/20")}
                        >
                            Vidéos
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={filterProject}
                            onChange={(e) => setFilterProject(e.target.value)}
                            className="bg-transparent text-mmt-chocolat font-bold text-sm border-none focus:ring-0 cursor-pointer"
                        >
                            <option value="all">Tous les projets</option>
                            <option value="paris">Paris</option>
                            <option value="dakar">Dakar</option>
                            <option value="alger">Alger</option>
                        </select>
                    </div>
                </div>

                {/* Masonry Grid Simulation (Using CSS Columns for pure CSS masonry) */}
                {filteredItems.length > 0 ? (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={item.type === "photo" ? item.url : (item.thumbnail as string)}
                                    alt={item.title}
                                    width={600}
                                    height={parseInt(item.id) % 2 === 0 ? 600 : 400} // Simulate variable heights
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-mmt-chocolat/0 group-hover:bg-mmt-chocolat/60 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        {item.type === "video" ? <Play className="w-8 h-8 ml-1" /> : <Search className="w-8 h-8" />}
                                    </div>
                                    <h3 className="text-white font-title font-bold text-xl text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-2xl border border-mmt-sable/20">
                        <p className="text-mmt-marron italic">Aucun média trouvé pour ces filtres.</p>
                        <button onClick={() => { setFilterType("all"); setFilterProject("all") }} className="mt-4 text-mmt-terracotta font-bold underline">
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>

            {/* Custom Lightbox */}
            {lightboxOpen && currentItem && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* Controls */}
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50">
                        <X className="w-10 h-10" />
                    </button>
                    {!(filteredItems.length === 1) && (
                        <>
                            <button onClick={prevMedia} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50">
                                <ChevronLeft className="w-12 h-12" />
                            </button>
                            <button onClick={nextMedia} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50">
                                <ChevronRight className="w-12 h-12" />
                            </button>
                        </>
                    )}

                    {/* Content */}
                    <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
                        {currentItem.type === "photo" ? (
                            <div className="relative w-full h-[70vh]">
                                <Image
                                    src={currentItem.url}
                                    alt={currentItem.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
                                <iframe
                                    src={`${currentItem.url}?autoplay=1&rel=0`}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {/* Caption */}
                        <div className="mt-6 text-center text-white">
                            <h3 className="text-2xl font-title font-bold mb-1">{currentItem.title}</h3>
                            <p className="text-white/60 text-sm">Projet {currentItem.project.toUpperCase()} — {currentItem.year}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
