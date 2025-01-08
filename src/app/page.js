import styles from './page.module.scss'
import { Inter } from 'next/font/google'
import Header from 'sections/header/Header'
import Hero from 'sections/hero/Hero'
import About from 'sections/about/About'
import Skills from 'sections/skills/Skills'
import Experiences from 'sections/experiences/Experiences'
import Works from 'sections/works/Works'
import Testimonials from 'sections/testimonials/Testimonials'
import Contact from 'sections/contact/Contact'
import Footer from 'sections/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <main className={inter.className}>
            <Header />
            <div className={styles.content}>
                <Hero />
                <About />
                <Skills />
                <Experiences />
                <Works />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}

export default Home