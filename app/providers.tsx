"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <main className='dark flex flex-col min-h-screen text-foreground bg-[#0D0D0D]'>{children}</main>
        </NextUIProvider>
    );
}
