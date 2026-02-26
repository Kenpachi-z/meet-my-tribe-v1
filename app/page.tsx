"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Play, Search } from "lucide-react";

// Hook générique pour l'intersection observer (fade in)
function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1, ...options });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options]);

    return { ref, isIntersecting };
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-mmt-cream">
            <HeroSection />
            <IntroSection />
            <ProjectsPreviewSection />
            <GalleryPreviewSection />
            <NewsletterSection />
        </div>
    );
}

function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-mmt-chocolat">
            {/* 1. Couche du fond (z-0) : Image statique */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/background_accueil.jpg"
                    alt="Jeunes en train de créer collectivement"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* 2. Couche vidéo (z-10) : Vidéo qui disparaît en fondu à la fin */}
            <video
                src="/Two_people_holding_hands_898cff8497.mp4"
                autoPlay
                muted
                playsInline
                onEnded={() => setIsVideoPlaying(false)}
                className={`absolute inset-0 object-cover w-full h-full z-10 transition-opacity duration-1000 ${isVideoPlaying ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* 3. Couche RGAA (z-20) : Overlay dégradé sombre pour garantir le contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>

            {/* 4. Couche Contenu (z-30) */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-title font-black text-white mb-6 drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    Espaces de Création<br />Collective
                </h1>
                <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-3xl drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Pour les jeunes en France et en Afrique.<br className="hidden sm:block" /> Rejoignez le mouvement Tribal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Link
                        href="/association"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-mmt-chocolat bg-white hover:bg-mmt-cream transition-transform hover:scale-105 shadow-xl"
                    >
                        Découvrir l'association
                    </Link>
                    <a
                        href="https://www.helloasso.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-terracotta hover:bg-mmt-rouille transition-transform hover:scale-105 shadow-xl border-2 border-transparent"
                    >
                        Faire un don
                    </a>
                </div>
            </div>
        </section>
    );
}

function IntroSection() {
    const { ref, isIntersecting } = useIntersectionObserver();

    return (
        <section
            ref={ref}
            className={cn(
                "py-24 bg-white transition-all duration-1000 transform",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-mmt-terracotta uppercase mb-3">Notre vision</h2>
                        <h3 className="text-3xl md:text-5xl font-title font-black text-mmt-chocolat mb-6 leading-tight">
                            L'art comme vecteur d'émancipation
                        </h3>
                        <p className="text-lg text-mmt-marron mb-8 leading-relaxed">
                            Meet My Tribe croit au potentiel créatif de chaque jeune. Nous construisons des ponts culturels entre la France et l'Afrique à travers des résidences artistiques, des ateliers urbains et des expositions immersives.
                        </p>
                        <Link href="/association" className="inline-flex items-center text-mmt-terracotta font-bold text-lg hover:text-mmt-rouille transition-colors group">
                            En savoir plus sur nos missions
                            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/placeholder-asso.jpg"
                            alt="Atelier de création avec des jeunes"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectsPreviewSection() {
    const { ref, isIntersecting } = useIntersectionObserver();

    return (
        <section
            ref={ref}
            className={cn(
                "py-24 bg-mmt-cream transition-all duration-1000 transform delay-100",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-title font-black text-mmt-chocolat mb-6">Dernières Éditions</h2>
                    <p className="text-lg text-mmt-marron max-w-2xl mx-auto">
                        Découvrez les projets récents portés par les Tribus Urbaines, de Paris à Dakar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Bientôt alimenté par editions.json. Placeholders statiques pour maquettage */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={`/images/placeholder-projet-${i}.jpg`}
                                    alt={`Aperçu du projet ${i}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-mmt-chocolat">
                                    2024
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-mmt-terracotta text-sm font-bold mb-2">PARIS - DAKAR</div>
                                <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-3 group-hover:text-mmt-terracotta transition-colors">Odyssée Urbaine</h3>
                                <p className="text-mmt-marron text-sm line-clamp-2">Exploration photographique croisée entre deux capitales en perpétuel mouvement.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/projets" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-chocolat hover:bg-mmt-marron transition-colors shadow-lg">
                        Voir tous les projets
                    </Link>
                </div>
            </div>
        </section>
    );
}

function GalleryPreviewSection() {
    const { ref, isIntersecting } = useIntersectionObserver();

    return (
        <section
            ref={ref}
            className={cn(
                "py-24 bg-mmt-chocolat text-white transition-all duration-1000 transform",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-mmt-sable uppercase mb-3">Dans la Galerie</h2>
                        <h3 className="text-3xl md:text-5xl font-title font-black mb-6">Immersion Visuelle</h3>
                    </div>
                    <Link href="/galerie" className="hidden md:inline-flex items-center text-mmt-sable font-bold hover:text-white transition-colors group">
                        Voir toute la galerie
                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                    {/* Media 1 (Vidéo) */}
                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer bg-mmt-marron">
                        <Image src="/images/placeholder-gallery-1.jpg" alt="Vidéo" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 ml-1" />
                            </div>
                        </div>
                    </div>
                    {/* Colonne de 2 photos */}
                    <div className="flex flex-col gap-4">
                        <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer bg-mmt-marron">
                            <Image src="/images/placeholder-gallery-2.jpg" alt="Photo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Search className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer bg-mmt-marron">
                            <Image src="/images/placeholder-gallery-3.jpg" alt="Photo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Search className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/galerie" className="inline-flex items-center justify-center px-8 py-4 w-full rounded-full text-lg font-bold text-mmt-chocolat bg-white transition-colors shadow-lg">
                        Voir toute la galerie
                    </Link>
                </div>
            </div>
        </section>
    );
}

function NewsletterSection() {
    return (
        <section className="py-24 bg-mmt-terracotta text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-mmt-rouille rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-mmt-ocre rounded-full opacity-50 blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-title font-black mb-6 drop-shadow-sm">Rejoignez le mouvement</h2>
                <p className="text-lg text-mmt-cream/90 mb-10 max-w-2xl mx-auto">
                    Inscrivez-vous à notre newsletter pour suivre l'avancée de nos projets, nos appels à résidence et nos prochaines expositions.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Votre adresse email"
                        className="flex-1 px-6 py-4 rounded-full text-mmt-chocolat font-medium focus:outline-none focus:ring-4 focus:ring-white/30 placeholder:text-mmt-sable"
                        required
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-chocolat hover:bg-mmt-marron transition-colors shadow-xl whitespace-nowrap"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </section>
    );
}
