import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Info } from "lucide-react";

// Mock Data pour le catalogue (idéalement importé depuis un util/json commun)
const MOCK_PRODUCTS = [
    {
        slug: "fanzine-paris-dakar",
        title: "Fanzine Paris-Dakar",
        price: "15€",
        description: "Recueil photographique et poétique de l'édition 2023. Imprimé sur papier recyclé 120g, couverture rigide soft-touch. 84 pages d'immersion totale dans le projet Odyssée Urbaine.",
        image: "/images/placeholder-projet-1.jpg",
        helloasso_url: "https://www.helloasso.com/",
        features: ["Format A5", "Édition limitée à 200 exemplaires", "Frais de port inclus (France)"]
    },
    {
        slug: "tote-bag-tribu",
        title: "Tote Bag Édition Limitée",
        price: "20€",
        description: "Design exclusif réalisé par les artistes de la résidence de Rennes. Coton bio épais, anses renforcées. Idéal pour transporter votre matériel créatif ou vos courses.",
        image: "/images/placeholder-projet-2.jpg",
        helloasso_url: "https://www.helloasso.com/",
        features: ["100% Coton Biologique 300g/m²", "Sérigraphie artisanale", "Dimensions: 38x42cm"]
    },
    {
        slug: "print-art-a3",
        title: "Tirage Art A3",
        price: "45€",
        description: "Reproduction numérotée et signée issue de l'exposition d'Alger. Capture l'essence du mouvement urbain nocturne.",
        image: "/images/placeholder-gallery-3.jpg",
        helloasso_url: "https://www.helloasso.com/",
        features: ["Format A3 (29.7 x 42 cm)", "Papier Fine Art Hahnemühle 308g", "Livré sans cadre dans un tube renforcé"]
    }
];

export async function generateStaticParams() {
    return MOCK_PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
    const product = MOCK_PRODUCTS.find(p => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-mmt-cream py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/boutique" className="inline-flex items-center text-mmt-terracotta hover:text-mmt-rouille font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Retour à la boutique
                </Link>

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-mmt-sable/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] bg-mmt-chocolat">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-title font-black text-mmt-chocolat mb-4 leading-tight">
                                    {product.title}
                                </h1>
                                <p className="text-3xl font-bold text-mmt-terracotta mb-6">
                                    {product.price}
                                </p>
                                <p className="text-lg text-mmt-marron leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {product.features && product.features.length > 0 && (
                                <div className="mb-10 bg-mmt-sable/10 p-6 rounded-2xl">
                                    <h3 className="flex items-center text-lg font-bold text-mmt-chocolat mb-4">
                                        <Info className="w-5 h-5 mr-2 text-mmt-terracotta" /> Caractéristiques
                                    </h3>
                                    <ul className="space-y-2 text-mmt-marron">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="min-w-1.5 h-1.5 rounded-full bg-mmt-terracotta mt-2 mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <h3 className="text-sm font-bold tracking-widest text-mmt-marron uppercase mb-4">Comment ça marche ?</h3>
                                <p className="text-sm text-mmt-marron opacity-80 mb-6">
                                    La transaction est entièrement sécurisée et gérée par HelloAsso. Aucun frais caché.
                                    Vous soutenez directement l'association.
                                </p>
                                <a
                                    href={product.helloasso_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white bg-mmt-chocolat hover:bg-mmt-marron transition-transform hover:scale-105 shadow-xl"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-3" /> Commander sur HelloAsso
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
