import { EditionCard } from "@/components/projects/EditionCard";
import editionsData from "@/data/editions.json";
import { Edition } from "@/types";
import { Lightbulb, Calendar, Users, Globe } from "lucide-react";

export const metadata = {
    title: "Nos Projets & Éditions | Meet My Tribe",
    description: "Découvrez le programme Tribu Urbaine et nos précédentes éditions : ateliers, résidences et expositions en France et en Afrique."
};

export default function ProjetsPage() {
    const editions = editionsData as Edition[];

    return (
        <main className="min-h-screen bg-mmt-cream">
            {/* Hero Section */}
            <section className="bg-mmt-chocolat text-white py-24 md:py-32 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-title font-black mb-6 drop-shadow-md">
                        Nos Projets & Éditions
                    </h1>
                    <p className="text-xl text-mmt-sable font-medium leading-relaxed">
                        Meet My Tribe développe des projets d'expression et de création collective,
                        avec un programme principal : Tribu Urbaine, décliné en plusieurs éditions
                        dans différents territoires.
                    </p>
                </div>
            </section>

            {/* Le Programme Tribu Urbaine */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-title font-bold text-mmt-chocolat mb-6">
                            Le programme Tribu Urbaine
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        <div>
                            <h3 className="text-2xl font-title font-bold text-mmt-terracotta mb-4">
                                Pourquoi Tribu Urbaine ?
                            </h3>
                            <p className="text-lg text-mmt-marron leading-relaxed">
                                Dans de nombreux territoires, les jeunes ont peu d'espaces où leur parole est
                                centrale et où leurs expériences sont prises au sérieux. Tribu Urbaine propose
                                de créer ces espaces, en partant des réalités locales et des envies des jeunes.
                            </p>

                            <h3 className="text-2xl font-title font-bold text-mmt-terracotta mt-10 mb-4">
                                Où et avec qui ?
                            </h3>
                            <p className="text-lg text-mmt-marron leading-relaxed">
                                Tribu Urbaine peut se déployer dans des quartiers, des villes, des établissements
                                scolaires, des lieux culturels, en France et en Afrique, en partenariat avec des
                                structures de proximité.
                            </p>
                        </div>

                        <div className="bg-mmt-cream p-8 rounded-3xl border border-mmt-sable/20">
                            <h3 className="text-2xl font-title font-bold text-mmt-chocolat mb-6">Nos principes</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-mmt-terracotta text-white flex items-center justify-center shrink-0 mr-4">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-mmt-chocolat mb-1">Co-construction</p>
                                        <p className="text-mmt-marron text-sm">Développement de chaque projet en étroite collaboration avec les partenaires locaux.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-mmt-ocre text-white flex items-center justify-center shrink-0 mr-4">
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-mmt-chocolat mb-1">Espaces Sécurisés</p>
                                        <p className="text-mmt-marron text-sm">Une attention particulière est portée aux jeunes filles, proposant des espaces sûrs et des formats mixtes valorisants.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-mmt-chocolat text-white flex items-center justify-center shrink-0 mr-4">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-mmt-chocolat mb-1">Lien France – Afrique</p>
                                        <p className="text-mmt-marron text-sm">Création de ponts par des jumelages, correspondances et échanges de productions artistiques.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Les 4 étapes */}
                    <div className="border-t border-mmt-sable/30 pt-16">
                        <h3 className="text-2xl md:text-3xl font-title font-bold text-center text-mmt-chocolat mb-12">
                            Comment ça se passe ?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { num: "1", title: "Rencontres", desc: "Repérage et définition des objectifs avec les partenaires locaux." },
                                { num: "2", title: "Ateliers", desc: "Sessions régulières (expression, écriture, image, son, vidéo, cuisine…)." },
                                { num: "3", title: "Création", desc: "Construction d'une restitution (exposition, projection, performance…)." },
                                { num: "4", title: "Partage", desc: "Temps fort avec les familles, le quartier, le grand public." },
                            ].map((step) => (
                                <div key={step.num} className="text-center relative">
                                    <div className="w-16 h-16 mx-auto bg-mmt-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold font-title mb-4 relative z-10 shadow-lg border-4 border-white">
                                        {step.num}
                                    </div>
                                    {step.num !== "4" && (
                                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-mmt-sable/50 -z-10"></div>
                                    )}
                                    <h4 className="text-xl font-title font-bold text-mmt-chocolat mb-2">{step.title}</h4>
                                    <p className="text-sm text-mmt-marron">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Liste des éditions */}
            <section className="py-24 bg-mmt-sable/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-title font-bold text-mmt-chocolat mb-4">
                            Toutes nos éditions
                        </h2>
                        <p className="text-lg text-mmt-marron max-w-2xl mx-auto">
                            Découvrez les différentes déclinaisons du programme Tribu Urbaine.
                        </p>
                    </div>

                    {editions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {editions.map((edition) => (
                                <EditionCard key={edition.id} edition={edition} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-12 shadow-sm rounded-2xl border border-mmt-sable/20 text-center">
                            <p className="text-mmt-marron italic">
                                Aucune édition n'est disponible pour le moment. Revenez bientôt !
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
