"use client";

import "./globals.css";
import { Rubik } from "next/font/google";
import { Providers } from "./providers";
import React from "react";
const inter = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <link rel="icon" href="./public/trynityflow3.ico" sizes="any" />
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

