import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Kanit, Noto_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { CookieBanner } from '@/components/shared/CookieBanner';

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '900'],
    variable: '--font-kanit',
    display: 'swap',
});

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-noto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Meet My Tribe',
    description: 'Espaces de création collective pour les jeunes en France et en Afrique.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr" className={`${kanit.variable} ${notoSans.variable}`}>
            <body className="antialiased min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}

