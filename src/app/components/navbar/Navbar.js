import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <Link className={styles.link} href={'/#'}>Sobre</Link>
                <Link className={styles.link} href={'/#'}>Trabalhos</Link>
                <Link className={styles.link} href={'/#'}>Depoimentos</Link>
                <Link className={styles.link} href={'/#'}>Contato</Link>
                <p className={styles.divider}>|</p>
                <button className={styles.curriculo}>Baixar CV</button>
            </nav>
            <nav className={styles.hamburger}>
                <Image
                    src={'/icons/menu.svg'}
                    width={36}
                    height={36}
                    alt=''
                />
            </nav>
        </>
    )
}

export default Navbar