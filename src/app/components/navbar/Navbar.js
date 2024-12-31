import Link from 'next/link'
import styles from './Nabar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.link} href={'/#'}>Sobre</Link>
            <Link className={styles.link} href={'/#'}>Trabalhos</Link>
            <Link className={styles.link} href={'/#'}>Depoimentos</Link>
            <Link className={styles.link} href={'/#'}>Contato</Link>
            <p className={styles.divider}>|</p>
            <button className={styles.curriculo}>Baixar CV</button>
        </nav>
    )
}

export default Navbar