import styles from './Header.module.scss'
import Logo from 'components/logo/Logo'
import Navbar from 'components/navbar/Navbar'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Navbar className={styles.navbar}/>
        </header>
    )
}

export default Header