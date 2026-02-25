import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact | Meet My Tribe",
    description: "Contactez l'association Meet My Tribe pour des partenariats, du bénévolat ou des informations.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen py-24 bg-[#FAF9F8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-title font-bold text-mmt-chocolat mb-6">
                        Rejoignez la Tribu
                    </h1>
                    <p className="text-lg text-mmt-marron max-w-2xl mx-auto">
                        Vous avez un projet, vous souhaitez devenir partenaire ou simplement en savoir plus ?
                        N'hésitez pas à nous laisser un message.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-2xl font-title font-bold text-mmt-chocolat mb-6 flex items-center">
                                Nos coordonnées
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-mmt-sable/20 text-mmt-chocolat rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-mmt-marron">Email</p>
                                        <a href="mailto:hello@meetmytribe.org" className="text-mmt-terracotta hover:underline">
                                            hello@meetmytribe.org
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-mmt-sable/20 text-mmt-chocolat rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-mmt-marron">Téléphone</p>
                                        <span className="text-mmt-terracotta">+33 (0) 6 00 00 00 00</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-mmt-sable/20 text-mmt-chocolat rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-mmt-marron">Siège social</p>
                                        <address className="text-mmt-marron/80 not-italic">
                                            75010 Paris, France
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-mmt-chocolat text-white rounded-2xl shadow-xl shadow-mmt-chocolat/20">
                            <h3 className="text-xl font-title font-bold mb-4">Envie de nous soutenir ?</h3>
                            <p className="text-mmt-sable mb-6 text-sm leading-relaxed">
                                Votre contribution nous aide à financer nos projets artistiques et solidaires.
                            </p>
                            <a
                                href="https://www.helloasso.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full py-3 bg-white text-mmt-chocolat text-center font-bold rounded-full hover:bg-mmt-sable transition-colors"
                            >
                                Faire un don sur HelloAsso
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
