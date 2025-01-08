import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <p className={styles.message}>Desenvolvido com ❤️ por Yago Lins</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer