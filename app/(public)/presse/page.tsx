"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Newspaper, ExternalLink } from "lucide-react";

const MOCK_PRESS_ARTICLES = [
    { title: "Quand l'art réinvente les banlieues", source: "Le Monde Culture", date: "12 Octobre 2024", type: "Article Web", link: "#" },
    { title: "Dakar-Paris : L'odyssée créative", source: "Jeune Afrique", date: "5 Septembre 2024", type: "Magazine", link: "#" },
    { title: "Meet My Tribe : L'association qui fait bouger les lignes", source: "Radio Nova", date: "20 Août 2024", type: "Interview (Podcast)", link: "#" },
    { title: "Exposition Tribu Urbaine au cœur de Rennes", source: "Ouest France", date: "15 Juin 2024", type: "Article Local", link: "#" },
];

export default function PressePage() {
    return (
        <main className="min-h-screen bg-mmt-cream">
            {/* Hero Presse */}
            <section className="bg-mmt-chocolat text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-mmt-terracotta rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-title font-black mb-6 drop-shadow-md">
                        On parle de nous
                    </h1>
                    <p className="text-xl md:text-2xl text-mmt-sable max-w-2xl mx-auto font-medium">
                        Retrouvez les articles, interviews et reportages consacrés aux actions de Meet My Tribe.
                    </p>
                </div>
            </section>

            {/* Kit Presse & Communiqués */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-mmt-sable/10 rounded-3xl p-8 md:p-12 border border-mmt-sable/30 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-title font-bold text-mmt-chocolat mb-4 flex items-center">
                                <Download className="w-8 h-8 mr-3 text-mmt-terracotta" /> Espace Journalistes
                            </h2>
                            <p className="text-lg text-mmt-marron max-w-2xl">
                                Téléchargez notre kit de présentation officiel, incluant notre dossier de presse,
                                les communiqués récents, et des photos libres de droits pour vos articles.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-terracotta hover:bg-mmt-rouille transition-transform hover:scale-105 shadow-xl whitespace-nowrap"
                            >
                                Kit Presse (.zip)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revue de Presse */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-title font-black text-mmt-chocolat mb-12 text-center">
                        Dernières parutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {MOCK_PRESS_ARTICLES.map((article, idx) => (
                            <a
                                key={idx}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl border border-mmt-sable/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-mmt-sable/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="flex items-center justify-between mb-6 relative z-10">
                                    <span className="text-sm font-bold tracking-wider text-mmt-terracotta uppercase bg-mmt-terracotta/10 px-3 py-1 rounded-md">
                                        {article.source}
                                    </span>
                                    <span className="text-sm text-mmt-marron/60 font-medium">
                                        {article.date}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-title font-bold text-mmt-chocolat mb-4 flex-grow relative z-10 group-hover:text-mmt-terracotta transition-colors">
                                    {article.title}
                                </h3>

                                <div className="mt-8 flex items-center justify-between text-mmt-marron relative z-10">
                                    <span className="flex items-center text-sm font-medium">
                                        <Newspaper className="w-4 h-4 mr-2" /> {article.type}
                                    </span>
                                    <span className="w-10 h-10 rounded-full bg-mmt-cream flex items-center justify-center group-hover:bg-mmt-terracotta group-hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Contact Presse */}
            <section className="py-24 bg-white border-t border-mmt-sable/20 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-title font-bold text-mmt-chocolat mb-6">Une demande d'interview ?</h2>
                    <p className="text-xl text-mmt-marron mb-10">
                        Pour toute sollicitation médiatique ou demande de reportage, notre équipe se tient à votre disposition.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-bold text-mmt-chocolat border-2 border-mmt-chocolat hover:bg-mmt-chocolat hover:text-white transition-colors"
                    >
                        Contacter les relations presse
                    </Link>
                </div>
            </section>
        </main>
    );
}
