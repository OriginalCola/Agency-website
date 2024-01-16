"use client";

import MainSection from "@/components/MainSection";
import Featured from "@/components/Featured";
import Header from "@/components/NavBar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Choose from "@/components/Choose";
import Works from "@/components/LastWorks";

export default function Home() {
    return (
        <div>
            <Header />
            <MainSection />
            <Featured />
            <Services />
            <Works />
            <Footer />
        </div>
    );
}
