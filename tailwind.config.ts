import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: "#1a1a1a",
                    surface: "#2a2a2a",
                    border: "#333333",
                    cyan: "#00F0FF",
                    purple: "#9D4EDD",
                },
            },
            fontFamily: {
                sans: [
                    '"Inter"',
                    '"Source Han Sans SC"',
                    '"Noto Sans CJK SC"',
                    "system-ui",
                    "sans-serif",
                ],
                mono: [
                    '"Fira Code"',
                    '"JetBrains Mono"',
                    "monospace",
                ],
            },
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(var(--tw-gradient-stops))",
                "hero-glow":
                    "conic-gradient(from 180deg at 50% 50%, #00F0FF33 0deg, #9D4EDD33 180deg, #00F0FF33 360deg)",
            },
        },
    },
    plugins: [],
};

export default config;
