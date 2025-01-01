import { Inter } from 'next/font/google'
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <div className={inter.className}>
            <Header />
            <Hero />
            <Skills />
        </div>
    )
}

export default Home