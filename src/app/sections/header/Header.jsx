'use client';

import Logo from 'components/logo/Logo'
import styles from './Header.module.scss'
import { useState } from 'react'
import hamburger from 'assets/icons/hamburger.svg'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <Logo className={styles.logo} />
                <Image
                    onClick={toggleMenu}
                    onBlur={toggleMenu}
                    className={styles.hamburger}
                    width={32}
                    height={32}
                    src={hamburger}
                    alt={"Hamburger menu"}
                />
            </div>


            <nav className={`${styles.nav} ${!isOpen ? styles.active : ''}`}>

                <ul className={styles.links}>
                    <li>
                        <Link onClick={toggleMenu} className={styles.link} href={"#about"}>Sobre</Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} className={styles.link} href={"#works"}>Trabalhos</Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} className={styles.link} href={"#testimonials"}>Depoimentos</Link>
                    </li>
                    <li>
                        <Link onClick={toggleMenu} className={styles.link} href={"#contacts"}>Contato</Link>
                    </li>
                </ul>
                <a className={styles.curriculum} onClick={toggleMenu} href='documents/Yago Lima Lins - Desenvolvedor Full-Stack.pdf' target='_blank'>
                    <button className={styles.button}>
                        Baixar CV
                    </button>
                </a>
            </nav>

        </header>
    )
}

export default Header