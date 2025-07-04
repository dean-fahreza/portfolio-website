import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/** Theme toggle atau tombol tema */}
        <ThemeToggle />

        {/** Background Effects (Efek latar) */}
        <StarBackground />

        {/** Navbar (Navigasi) */}
        <Navbar />

        {/** Main Content (konten utama) */}
        <main>
            <HeroSection />
        </main>

        {/** Footer */}

    </div>
}