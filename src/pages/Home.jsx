import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/** Theme toggle atau tombol tema */}
        <ThemeToggle />

        {/** Background Effects (Efek latar) */}
        <StarBackground />

        {/** Navbar (Navigasi) */}
        <Navbar />

        {/** Main Content (konten utama) */}

        {/** Footer */}

    </div>
}