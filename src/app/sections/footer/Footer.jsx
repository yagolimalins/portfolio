import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <p className={styles.message}>
                        Powered by <a href="https://react.dev" target='_blank'>React.js</a> and <a href="https://nextjs.org/" target='_blank'>Next.js</a> 
                        <br></br>
                        Developed with ❤️ by Yago Lins </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer