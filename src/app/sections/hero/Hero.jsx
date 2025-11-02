import Image from 'next/image'
import styles from './Hero.module.scss'
import Networks from 'components/networks/Networks'
import yago from 'assets/images/photos/profile.webp'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <h1 className={styles.greeting}>Hello! Yago here 👋</h1>
                    <p className={styles.intro}>
                        I am a systems analyst graduate and a technology enthusiast with a strong interest in web development and linux systems.
                        Since 2010, I have been building my career in the technology field, developing skills in Web Development and IT Infrastructure.
                    </p>
                    <p className={styles.status}>
                        📍 Maceió, Alagoas, Brazil <br></br>
                        🟢 Online
                    </p>
                    <Networks />
                </div>
                <div>
                    <Image
                        className={styles.photo}
                        src={yago}
                        width={280}
                        height={280}
                        alt={'Foto de Yago'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero