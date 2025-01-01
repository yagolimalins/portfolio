import Link from 'next/link'
import 'styles/globals.scss'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <Link className={styles.logo} href={'/#'}>{'<YAGO/>'}</Link>
    )
}

export default Logo