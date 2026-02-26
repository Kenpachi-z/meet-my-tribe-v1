import Image from "next/image";
import { ShieldCheck, UserPlus } from "lucide-react";
import { RejoindreForm } from "@/components/rejoindre/RejoindreForm";

export const metadata = {
    title: "Rejoindre la Tribu | Meet My Tribe",
    description: "Rejoignez Meet My Tribe en tant que collectivité, jeune talent ou bénévole pour renforcer les liens intergénérationnels.",
};

export default function RejoindrePage() {
    return (
        <div className="min-h-screen bg-mmt-cream pt-32 pb-20">
            {/* --- Hero Section & Form --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-mmt-chocolat tracking-tight mb-6 uppercase">
                        REJOINDRE LA TRIBU
                    </h1>
                    <p className="text-lg md:text-xl text-mmt-marron font-medium leading-relaxed">
                        Choisissez votre profil pour nous rejoindre et renforcer les liens intergénérationnels au cœur de nos territoires.
                    </p>
                </div>

                {/* Form Component */}
                <div className="max-w-4xl mx-auto mb-24">
                    <RejoindreForm />
                </div>
            </section>

            {/* --- Pourquoi Nous Rejoindre Section --- */}
            <section className="bg-mmt-terracotta relative py-20 overflow-hidden">
                {/* Decorative background element overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        {/* Left Column: Text & Features */}
                        <div className="text-white">
                            <h2 className="font-title text-2xl md:text-3xl font-black mb-8 uppercase">
                                POURQUOI NOUS REJOINDRE ?
                            </h2>
                            <div className="space-y-6">
                                <p className="text-base text-white/90 mb-8 leading-relaxed font-medium">
                                    Véritable catalyseur de cohésion sociale, Meet My Tribe offre un cadre sécurisé et dynamique pour les institutions, tout en valorisant l'engagement des jeunes et des bénévoles.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                                        <div className="flex-shrink-0 bg-white text-mmt-terracotta w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div className="ml-5 flex-1">
                                            <h3 className="text-lg font-bold mb-1">Impact Mesuré</h3>
                                            <p className="text-sm text-white/80 leading-relaxed">
                                                Suivi précis des actions et de l'évolution du lien social dans votre zone grâce à nos outils d'évaluation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                                        <div className="flex-shrink-0 bg-white text-mmt-terracotta w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                                            <UserPlus className="w-6 h-6" />
                                        </div>
                                        <div className="ml-5 flex-1">
                                            <h3 className="text-lg font-bold mb-1">Réseau d'Experts</h3>
                                            <p className="text-sm text-white/80 leading-relaxed">
                                                Accès à une communauté de bénévoles et jeunes talents qualifiés, prêts à s'investir sur le terrain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Static Illustration */}
                        <div className="flex items-center justify-center">
                            <div className="w-full rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/illustration_rejoindre_citation.jpg"
                                    alt="Ensemble tissons la trame de demain"
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
