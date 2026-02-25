import Image from 'next/image';
import Link from 'next/link';
import { Edition } from '@/types';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

interface EditionCardProps {
    edition: Edition;
}

export function EditionCard({ edition }: EditionCardProps) {
    return (
        <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-mmt-sable/20 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={edition.image_url}
                    alt={edition.image_alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-mmt-chocolat backdrop-blur-sm shadow-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edition.annee}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-mmt-terracotta text-sm font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {edition.ville}
                </div>

                <h3 className="font-title text-xl font-bold text-mmt-chocolat mb-3 group-hover:text-mmt-terracotta transition-colors">
                    {edition.titre}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                    {edition.mediums.map((medium) => (
                        <span
                            key={medium}
                            className="px-2.5 py-0.5 rounded-md bg-mmt-sable/10 text-mmt-marron text-xs font-medium border border-mmt-sable/20"
                        >
                            {medium}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-mmt-sable/10 flex items-center justify-between">
                    {edition.lien_helloasso ? (
                        <a
                            href={edition.lien_helloasso}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-mmt-terracotta hover:text-mmt-rouille transition-colors group/link"
                        >
                            En savoir plus
                            <ExternalLink className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    ) : (
                        <span className="text-sm font-medium text-mmt-marron/60 italic">
                            Détails à venir
                        </span>
                    )}

                    <Link
                        href={`/projets/${edition.slug}`}
                        className="text-xs font-medium text-mmt-marron hover:underline"
                    >
                        Voir le dossier
                    </Link>
                </div>
            </div>
        </article>
    );
}
