import Image from 'next/image'
import styles from './Contact.module.scss'
import Headings from 'components/headings/Headings'
import Networks from 'components/networks/Networks'

const Contact = () => {
    return (
        <div id="contacts" className={styles.contact}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings
                        h2={'Contato'}
                        h3={'Vamos conversar sobre o seu projeto?'}
                    />
                    <div className={styles.info}>
                        <div className={styles.address}>
                            <Image
                                src={'/icons/email.png'}
                                width={32}
                                height={32}
                                alt={'Icone de email'}
                            />
                            <p>yago.lima.lins@protonmail.com</p>
                            <Image
                                src={'/icons/copy.png'}
                                width={32}
                                height={32}
                                alt={'Icone de copiar'}
                            />
                        </div>

                        <div className={styles.address}>
                            <Image
                                src={'/icons/phone.png'}
                                width={32}
                                height={32}
                                alt={'Icone de email'}
                            />
                            <p>+55 82 996052839</p>
                            <Image
                                src={'/icons/copy.png'}
                                width={32}
                                height={32}
                                alt={'Icone de copiar'}
                            />
                        </div>


                    </div>

                    <div className={styles.extra}>
                        <p>Me encontre também nessas plataformas</p>
                        <Networks />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact