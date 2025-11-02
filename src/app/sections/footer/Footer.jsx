import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <p className={styles.message}>Powered by React.js and Next.js | Developed with ❤️ by Yago Lins </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer