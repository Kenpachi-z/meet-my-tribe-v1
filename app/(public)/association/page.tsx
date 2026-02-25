"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserPlus, HeartHandshake, Lightbulb } from "lucide-react";

export default function AssociationPage() {
    return (
        <main className="min-h-screen bg-mmt-cream">
            {/* Header / Hero */}
            <section className="bg-mmt-chocolat text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-title font-black mb-6 drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700">
                        L'Association Meet My Tribe
                    </h1>
                    <p className="text-xl md:text-2xl text-mmt-sable max-w-3xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Créer des ponts par l'art, transcender les frontières par la création collective.
                    </p>
                </div>
            </section>

            {/* Notre Mission */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/placeholder-asso-1.jpg"
                                alt="Jeunes artistes en plein processus créatif"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-sm font-bold tracking-widest text-mmt-terracotta uppercase mb-3">Notre raison d'être</h2>
                            <h3 className="text-3xl md:text-4xl font-title font-black text-mmt-chocolat mb-6">Redonner le pouvoir de créer</h3>
                            <div className="space-y-6 text-lg text-mmt-marron leading-relaxed">
                                <p>
                                    Née d'une volonté farouche de décloisonner les imaginaires, Meet My Tribe offre aux jeunes des espaces où l'exploration artistique devient un levier d'émancipation.
                                </p>
                                <p>
                                    Des banlieues parisiennes aux quartiers bouillonnants de Dakar ou d'Alger, nous croyons fermement que l'art n'est pas un luxe, mais une nécessité vitale pour repenser notre rapport au monde et aux autres.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Actions (3 piliers) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-title font-black text-mmt-chocolat mb-4">Ce que nous faisons</h2>
                        <p className="text-lg text-mmt-marron max-w-2xl mx-auto">Notre méthode repose sur la co-création, la mobilité et l'immersion.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pilier 1 */}
                        <div className="bg-mmt-cream p-8 rounded-2xl shadow-sm border border-mmt-sable/20 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-mmt-chocolat text-white rounded-xl flex items-center justify-center mb-6">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-4">Résidences Créatives</h3>
                            <p className="text-mmt-marron leading-relaxed">
                                Nous organisons des résidences immersives où de jeunes talents collaborent avec des artistes confirmés sur des projets multidisciplinaires (photo, vidéo, musique).
                            </p>
                        </div>
                        {/* Pilier 2 */}
                        <div className="bg-mmt-cream p-8 rounded-2xl shadow-sm border border-mmt-sable/20 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-mmt-terracotta text-white rounded-xl flex items-center justify-center mb-6">
                                <HeartHandshake className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-4">Échanges Interculturels</h3>
                            <p className="text-mmt-marron leading-relaxed">
                                Mobilité internationale : nous faisons voyager nos Tribus Urbaines entre la France et les capitales africaines pour croiser les regards et les pratiques artistiques.
                            </p>
                        </div>
                        {/* Pilier 3 */}
                        <div className="bg-mmt-cream p-8 rounded-2xl shadow-sm border border-mmt-sable/20 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-mmt-ocre text-white rounded-xl flex items-center justify-center mb-6">
                                <UserPlus className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-4">Restitution & Diffusion</h3>
                            <p className="text-mmt-marron leading-relaxed">
                                Les œuvres co-créées donnent lieu à des expositions interactives, des projections et des publications. Rencontrer le public est la finalité du processus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bandeau d'engagement */}
            <section className="py-24 bg-mmt-chocolat text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-title font-black text-white mb-8">Rejoignez l'Aventure</h2>
                    <p className="text-xl text-mmt-cream mb-10">
                        Que vous soyez un futur membre de la Tribu, un partenaire institutionnel ou un mécène, votre énergie est la bienvenue.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/rejoindre"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-mmt-chocolat bg-white hover:bg-mmt-cream transition-transform hover:scale-105 shadow-xl"
                        >
                            Devenir Membre
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-mmt-chocolat transition-colors"
                        >
                            Nous Contacter
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
