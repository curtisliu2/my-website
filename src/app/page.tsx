import HeroSection from "./components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Head from 'next/head';
import Link from "next/link";
import AnimatedBackground from "./components/AnimatedBackground";


export default function Home() {
    return (
        <main className="flex flex-col container max-w-full min-h-screen bg-[#000000]">
            <Navbar />
            {/*<AnimatedBackground />*/}
            <div className="w-full mt-24 px-12 py-4">
                <HeroSection />
                {/*<AchievementsSection />*/}
                {/*<AboutSection />*/}
                {/*<ProjectsSection />*/}
                {/*<EmailSection />*/}
            </div>
            {/*<Footer />*/}
        </main>
    );
}
