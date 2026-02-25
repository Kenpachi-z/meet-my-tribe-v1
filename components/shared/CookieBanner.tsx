"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Vérifier si le choix a déjà été fait
        const consent = localStorage.getItem("mmt_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("mmt_cookie_consent", "accepted");
        setIsVisible(false);
        // TODO: Initifier Matomo/Analytics ici si nécessaire plus tard
    };

    const handleRefuse = () => {
        localStorage.setItem("mmt_cookie_consent", "refused");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-mmt-cream border-t border-mmt-sable/30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 transform transition-transform duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-sm text-mmt-marron">
                    <p className="font-title text-xl font-bold text-mmt-chocolat mb-2">Respect de votre vie privée</p>
                    <p className="leading-relaxed">
                        Ce site utilise des cookies essentiels au fonctionnement et des cookies analytiques anonymisés (Matomo) pour mesurer l'audience, dans le respect du RGPD. Aucune donnée n'est revendue.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-max">
                    <button
                        onClick={handleRefuse}
                        className="px-6 py-2.5 text-sm font-bold text-mmt-chocolat bg-transparent border-2 border-mmt-chocolat rounded-full hover:bg-mmt-chocolat hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mmt-chocolat"
                    >
                        Continuer sans accepter
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2.5 text-sm font-bold text-white bg-mmt-terracotta border-2 border-mmt-terracotta rounded-full hover:bg-mmt-rouille hover:border-mmt-rouille transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mmt-rouille"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
