'use client';

import Image from 'next/image'
import styles from './Contact.module.scss'
import Headings from 'components/headings/Headings'
import Networks from 'components/networks/Networks'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const handleCopy = async (contact, type) => {
        try {
            await toast.success(`${type} copiado!`)
            await navigator.clipboard.writeText(contact);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="contacts" className={styles.contact}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings
                        h2={'Contato'}
                        h3={'Vamos criar algo incrível juntos?'}
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
                                onClick={() => {
                                    handleCopy("yago.lima.lins@protonmail.com", "Email")
                                }}
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
                                onClick={() => { handleCopy("+5582996052839", "Celular") }}
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

            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                draggablePercent={25}
                transition={Slide}
            />

        </div>
    )
}

export default Contact