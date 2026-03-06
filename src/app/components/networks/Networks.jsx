import Link from 'next/link';
import Image from 'next/image';
import styles from './Networks.module.scss';

const Networks = () => {
  return (
    <div className={styles.networks}>
      <Link href={'https://github.com/yagolimalins'} target={'_blank'}>
        <Image
          src={'/icons/github.svg'}
          width={32}
          height={32}
          alt={'Icone do Github'}
        />
      </Link>
      <Link href={'https://linkedin.com/in/yago-lima-lins'} target={'_blank'}>
        <Image
          src={'/icons/linkedin.svg'}
          width={38}
          height={38}
          alt={'Icone do Github'}
        />
      </Link>
      <Link href={'https://instagram.com/yagolimamusic'} target={'_blank'}>
        <Image
          src={'/icons/instagram.svg'}
          width={38}
          height={38}
          alt={'Icone do Github'}
        />
      </Link>
    </div>
  );
};

export default Networks;
