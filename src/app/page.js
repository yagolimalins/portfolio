import { Inter } from 'next/font/google'
import Header from 'sections/header/Header'
import Hero from 'sections/hero/Hero'
import Skills from 'sections/skills/Skills'
import About from 'sections/about/About'
import Experiences from 'sections/experiences/Experiences'
import Contact from 'sections/contact/Contact'
import Footer from 'sections/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <main className={inter.className}>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experiences />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home