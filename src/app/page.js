import { Inter } from 'next/font/google'
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"
import Contact from 'components/contact/Contact'
import Footer from 'components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <main className={inter.className}>
            <Header />
            <Hero />
            <Skills />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home