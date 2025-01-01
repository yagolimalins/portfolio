import Link from 'next/link'
import Image from 'next/image'
import styles from './Networks.module.scss'

const Networks = () => {
    return (
        <div className={styles.networks}>
            <Link href={'https://github.com/yagolimalins'}>
                <Image
                    src={'/icons/github.svg'}
                    width={32}
                    height={32}
                    alt={'Icone do Github'}
                />
            </Link>
            <Link href={'https://linkedin.com/in/yago-lima-lins'}>
                <Image
                    src={'/icons/linkedin.svg'}
                    width={38}
                    height={38}
                    alt={'Icone do Github'}
                />
            </Link>
            <Link href={'https://instagram.com/yagolimamusic'}>
                <Image
                    src={'/icons/instagram.svg'}
                    width={38}
                    height={38}
                    alt={'Icone do Github'}
                />
            </Link>
        </div>
    )
}

export default Networks