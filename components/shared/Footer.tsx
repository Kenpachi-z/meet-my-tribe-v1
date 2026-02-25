import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-mmt-chocolat text-mmt-cream">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Colonne 1 : Logo & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="font-title text-3xl font-black tracking-tight text-white block">
                            Meet My Tribe
                        </Link>
                        <p className="text-mmt-sable text-sm leading-relaxed max-w-sm">
                            Meet My Tribe crée des espaces d'expression et de création collective pour les jeunes en France et en Afrique.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation rapide */}
                    <div>
                        <h3 className="font-title text-xl font-bold text-white mb-6">Navigation</h3>
                        <ul className="space-y-4 text-sm text-mmt-sable">
                            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/association" className="hover:text-white transition-colors">L'association</Link></li>
                            <li><Link href="/projets" className="hover:text-white transition-colors">Nos projets</Link></li>
                            <li><Link href="/galerie" className="hover:text-white transition-colors">Galerie</Link></li>
                            <li><Link href="/rejoindre" className="hover:text-white transition-colors">Rejoindre la Tribu</Link></li>
                            <li><Link href="/presse" className="hover:text-white transition-colors">On parle de nous</Link></li>
                            <li><Link href="/boutique" className="hover:text-white transition-colors">Boutique</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact */}
                    <div>
                        <h3 className="font-title text-xl font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-mmt-sable">
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-mmt-terracotta" />
                                <a href="mailto:hello@meetmytribe.org" className="hover:text-white transition-colors">hello@meetmytribe.org</a>
                            </li>
                            <li className="pl-8">Basée en France, en lien avec des partenaires en Afrique.</li>
                            <li className="pt-2">
                                <Link href="/contact" className="inline-flex items-center text-mmt-terracotta hover:text-white font-bold transition-colors">
                                    Formulaire de contact →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4 : Réseaux sociaux & Newsletter Placeholder */}
                    <div>
                        <h3 className="font-title text-xl font-bold text-white mb-6">Nous suivre</h3>
                        <div className="flex space-x-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-mmt-sable/10 flex items-center justify-center text-mmt-sable hover:bg-mmt-terracotta hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-mmt-sable/10 flex items-center justify-center text-mmt-sable hover:bg-mmt-terracotta hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-mmt-sable/10 flex items-center justify-center text-mmt-sable hover:bg-mmt-terracotta hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-mmt-sable/10 flex items-center justify-center text-mmt-sable hover:bg-mmt-terracotta hover:text-white transition-colors">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
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
