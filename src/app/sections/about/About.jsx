import Image from 'next/image'
import styles from './About.module.scss'
import Headings from 'components/headings/Headings'
import photo from 'assets/images/photos/photo.jpg'

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings h2={'About'} h3={'Let me introduce myself 🤘🏼'} />
                    <div className={styles.bio}>
                        <Image
                            className={styles.photo}
                            src={photo}
                            alt='Foto de Yago tocando contrabaixo'
                        />
                        <div className={styles.depict}>
                            <p>
                                Systems analyst and software engineer in training with over a decade of experience in the technology field.
                                Currently, I work as a Software Developer at FIEA (Federation of Industries of the State of Alagoas) and also as a self-employed web developer, always striving to improve my skills and deliver high-quality solutions.
                                <br /><br />
                                I have experience with various technologies, including React + Next.js and Vue + Nuxt.js on the front end, and on the back end: Express (Node.js) and other frameworks from the Deno ecosystem (Hono, Oak, etc.).
                                For data persistence, I use relational databases such as PostgreSQL and non-relational ones like MongoDB, always aiming for the best performance and data integrity in my applications.
                                <br /><br />
                                Beyond my journey in technology, I am also a musician and have worked as a teacher in the field. This experience has given me a creative and analytical perspective, as well as strong communication and interpersonal skills that I bring to every project I’m involved in.
                                <br /><br />
                                <strong className={styles.catchphrase}>I believe that both music and programming require passion, discipline, and creativity to create something truly exceptional</strong>. ✨
                                <br /><br />
                                If you’re looking for a dedicated web developer with a keen eye for project needs and a creative approach, I’d be happy to chat and contribute to the success of your idea.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About