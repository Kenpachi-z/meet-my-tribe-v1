import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mmt: {
                    cream: "var(--color-cream)",
                    sable: "var(--color-sand)",
                    terracotta: "var(--color-terracotta)",
                    rouille: "var(--color-ocre)",
                    marron: "var(--color-chocolate)",
                    chocolat: "var(--color-dark)",
                    white: "var(--color-white)",
                }
            },
            fontFamily: {
                sans: ['var(--font-noto)'],
                title: ['var(--font-kanit)'],
            },
        },
    },
    plugins: [],
};
export default config;
