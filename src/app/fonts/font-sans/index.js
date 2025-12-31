import localFont from "next/font/local";

export const googleSans = localFont({
    src: [
        // Regular weights
        {
            path: "./GoogleSans-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./GoogleSans-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./GoogleSans-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./GoogleSans-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "./GoogleSans-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./GoogleSans-SemiBoldItalic.woff2",
            weight: "600",
            style: "italic",
        },
        {
            path: "./GoogleSans-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./GoogleSans-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
    ],
    display: "swap",
    variable: "--font-google-sans",
    preload: true,
});
