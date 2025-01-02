import Image from 'next/image'
import styles from './Hero.module.scss'
import Link from 'next/link'
import Networks from 'components/networks/Networks'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <h1 className={styles.greeting}>Oi, sou Yago 👋</h1>
                    <p className={styles.intro}>
                    Entusiasta de tecnologia, sistemas Linux e atualmente graduando em Análise e Desenvolvimento de Sistemas na Faculdade Estácio. Desde 2010, venho traçando meu caminho no mundo da tecnologia, adquirindo conhecimentos nas especialidades de Desenvolvimento Web e Infraestrutura em TI.
                    </p>
                    <p className={styles.status}>
                        📍 Maceió, Alagoas. <br></br>
                        🟢 Disponível
                    </p>
                    <Networks/>
                </div>
                <div>
                    <Image
                        className={styles.photo}
                        src={'/profile.jpg'}
                        width={280}
                        height={280}
                        alt={'Foto de Yago'}
                    />
                    <div className={styles.frame} />
                </div>
            </div>
        </div>
    )
}

export default Hero