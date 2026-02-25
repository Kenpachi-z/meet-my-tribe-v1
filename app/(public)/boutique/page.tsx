"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

// Mock Data pour le catalogue boutique (pourrait venir d'un shop.json plus tard)
const MOCK_PRODUCTS = [
    {
        slug: "fanzine-paris-dakar",
        title: "Fanzine Paris-Dakar",
        price: "15€",
        description: "Recueil photographique et poétique de l'édition 2023.",
        image: "/images/placeholder-projet-1.jpg",
        helloasso_url: "https://www.helloasso.com/"
    },
    {
        slug: "tote-bag-tribu",
        title: "Tote Bag Édition Limitée",
        price: "20€",
        description: "Design exclusif réalisé par les artistes de la résidence de Rennes.",
        image: "/images/placeholder-projet-2.jpg",
        helloasso_url: "https://www.helloasso.com/"
    },
    {
        slug: "print-art-a3",
        title: "Tirage Art A3",
        price: "45€",
        description: "Reproduction numérotée et signée issue de l'exposition d'Alger.",
        image: "/images/placeholder-gallery-3.jpg",
        helloasso_url: "https://www.helloasso.com/"
    },
];

export default function BoutiquePage() {
    return (
        <main className="min-h-screen py-24 bg-mmt-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-title font-black text-mmt-chocolat mb-6">
                        Notre Boutique Solidaire
                    </h1>
                    <p className="text-lg text-mmt-marron max-w-2xl mx-auto">
                        Retrouvez ici les éditions limitées, tirages et objets créés par
                        les Tribus Urbaines. Les recettes financent directement nos prochains projets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.slug} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <Link href={`/boutique/${product.slug}`} className="block relative aspect-square overflow-hidden bg-MMT-marron">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-mmt-chocolat text-white px-4 py-2 rounded-full font-bold shadow-md">
                                    {product.price}
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-title font-bold text-mmt-chocolat mb-3 group-hover:text-mmt-terracotta transition-colors">
                                    <Link href={`/boutique/${product.slug}`}>{product.title}</Link>
                                </h2>
                                <p className="text-mmt-marron text-sm mb-6 flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <Link href={`/boutique/${product.slug}`} className="text-sm font-bold text-mmt-terracotta hover:text-mmt-rouille transition-colors flex items-center group/link">
                                        Voir les détails <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <a
                                        href={product.helloasso_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center p-3 rounded-full text-white bg-mmt-terracotta hover:bg-mmt-rouille transition-colors shadow-sm"
                                        aria-label={`Acheter ${product.title} sur HelloAsso`}
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
