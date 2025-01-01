import './styles/globals.scss';
import Image from 'next/image'
import styles from './Hero.module.scss'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <h1 className={styles.greeting}>Yago Lima Lins</h1>
                    <p className={styles.intro}>
                    Entusiasta de tecnologia, sistemas Linux e atualmente graduando em Análise e Desenvolvimento de Sistemas na Faculdade Estácio. Desde 2010, venho traçando meu caminho no mundo da tecnologia, adquirindo conhecimentos nas especialidades de Desenvolvimento Web e Infraestrutura em TI.
                    </p>
                    <p className={styles.status}>
                        📍 Maceió, Alagoas. <br></br>
                        🟢 Disponível
                    </p>
                    <div className={styles.networks}>
                        <Link href={'https://github.com/yagolimalins'}>
                            <Image
                                src={'/icons/github.svg'}
                                width={32}
                                height={32}
                                alt={'Icone do Github'}
                            />
                        </Link>
                        <Link href={'https://linkedin.com/in/yago-lima-lins'}>
                            <Image
                                src={'/icons/linkedin.svg'}
                                width={38}
                                height={38}
                                alt={'Icone do Github'}
                            />
                        </Link>
                        <Link href={'https://instagram.com/yagolimamusic'}>
                        <Image
                            src={'/icons/instagram.svg'}
                            width={38}
                            height={38}
                            alt={'Icone do Github'}
                        />
                        </Link>
                    </div>
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