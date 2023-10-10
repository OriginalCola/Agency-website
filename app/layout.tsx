"use client";

import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";
const inter = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
