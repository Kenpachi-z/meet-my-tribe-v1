import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import editionsData from "@/data/editions.json";
import { Edition } from "@/types";

export async function generateStaticParams() {
    return editionsData.map((edition: any) => ({
        slug: edition.slug,
    }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const edition = (editionsData as Edition[]).find(e => e.slug === params.slug);

    if (!edition) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-mmt-cream pb-24">
            {/* Hero Section relative to the project */}
            <section className="relative h-[60vh] min-h-[400px] w-full bg-mmt-chocolat">
                <Image
                    src={edition.image_url || "/images/placeholder-projet.jpg"}
                    alt={edition.image_alt || "Placeholder pour le projet"}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mmt-chocolat via-mmt-chocolat/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                        <Link href="/projets" className="inline-flex items-center text-mmt-sable hover:text-white font-bold mb-6 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux projets
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-title font-black text-white mb-4 drop-shadow-md">
                            {edition.titre}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-white font-medium">
                            {edition.ville && (
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-mmt-terracotta" /> {edition.ville}
                                </div>
                            )}
                            {edition.annee && (
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-mmt-terracotta" /> {edition.annee}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8 text-lg text-mmt-marron leading-relaxed">
                        <h2 className="text-3xl font-title font-bold text-mmt-chocolat">À propos du projet</h2>
                        <div className="prose prose-lg text-mmt-marron">
                            {/* Assuming the description comes from DB or JSON in the future, for now fallback to brief text */}
                            <p>
                                Ce projet représente une étape majeure dans le parcours de Meet My Tribe.
                                En réunissant des talents venus de divers horizons, nous avons pu confronter
                                nos visions et enrichir notre approche créative.
                            </p>
                            <p>
                                L'ambition était de questionner l'espace urbain à travers le prisme de la jeunesse.
                                Chaque médium utilisé a permis de révéler une facette unique de l'environnement,
                                créant ainsi une fresque collective inédite.
                            </p>
                        </div>

                        {edition.lien_helloasso && (
                            <div className="mt-8 pt-8 border-t border-mmt-sable/30">
                                <a
                                    href={edition.lien_helloasso}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-terracotta hover:bg-mmt-rouille transition-transform hover:scale-105 shadow-xl"
                                >
                                    Soutenir l'édition sur HelloAsso <ExternalLink className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Info */}
                    <div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-mmt-sable/20">
                            <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-6">Médiums Explorés</h3>
                            {edition.mediums && edition.mediums.length > 0 ? (
                                <ul className="space-y-3">
                                    {edition.mediums.map((medium, index) => (
                                        <li key={index} className="flex items-center text-mmt-marron">
                                            <div className="w-2 h-2 rounded-full bg-mmt-terracotta mr-3"></div>
                                            {medium}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-mmt-sable italic">Non spécifiés</p>
                            )}

                            <div className="mt-8 pt-8 border-t border-mmt-sable/20">
                                <h3 className="text-xl font-title font-bold text-mmt-chocolat mb-4">Voir en action</h3>
                                <Link href="/galerie" className="inline-flex items-center text-mmt-terracotta font-bold hover:text-mmt-rouille transition-colors group">
                                    Accéder à la galerie <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
