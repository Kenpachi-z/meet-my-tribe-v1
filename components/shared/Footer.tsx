import Image from "next/image";
import Link from "next/link";
import { Share2, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-mmt-chocolat text-mmt-cream">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    {/* Colonne 1 : Logo & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo_site_meet_my_tribe.jpg"
                                alt="Logo Meet My Tribe"
                                width={200}
                                height={66}
                                className="w-auto h-16 object-contain"
                            />
                        </Link>
                        <p className="text-white text-sm leading-relaxed max-w-sm">
                            La plateforme qui réunit les générations pour bâtir un futur solidaire et dynamique.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-xl border border-white flex items-center justify-center text-white hover:bg-white hover:text-mmt-chocolat transition-colors">
                                <span className="sr-only">Partager</span>
                                <Share2 className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@meetmytribe.org" className="w-10 h-10 rounded-xl border border-white flex items-center justify-center text-white hover:bg-white hover:text-mmt-chocolat transition-colors">
                                <span className="sr-only">Contact</span>
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div>
                        <h3 className="font-title text-xl font-bold text-white mb-6">Navigation</h3>
                        <ul className="space-y-4 text-sm text-white">
                            <li><Link href="/association" className="hover:text-mmt-sable transition-colors">Notre Mission</Link></li>
                            <li><Link href="/projets" className="hover:text-mmt-sable transition-colors">Impact Social</Link></li>
                            <li><Link href="/presse" className="hover:text-mmt-sable transition-colors">Témoignages</Link></li>
                            <li><Link href="/galerie" className="hover:text-mmt-sable transition-colors">Actualités</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact */}
                    <div>
                        <h3 className="font-title text-xl font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-white">
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span>Paris, France</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                                <a href="mailto:contact@meetmytribe.org" className="hover:text-mmt-sable transition-colors">contact@meetmytribe.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-mmt-sable/20">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-mmt-sable/60">
                        <p>
                            &copy; {currentYear} Association Meet My Tribe. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité (RGPD)</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
