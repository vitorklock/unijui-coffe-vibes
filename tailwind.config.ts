import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                neutral: "#5D5152",
                warning: "#D3A601",
                wrong: "#D84E4B",
                primary: "#EFE3C8",
                "primary-hover": "#DBD0B8",
                "primary-focus": "#FFF5D8",
                accent: "#FFFFFF",
                light: "#FFFFFF",
                "accent-hover": "#C0C0C0",
                "accent-focus": "#FFFFFF",
                "text-brown": "#4A2B29",

                surface: {
                    100: "#E1D1E1",
                    200: "#C1B2C1",
                    300: "#A192A1",
                    400: "#807380",
                    500: "#605460",
                    600: "#403440",
                    700: "#201520",
                    800: "#191019",
                    900: "#120C12",
                },
            },
        },
    },
} satisfies Config;
