import Image from 'next/image';
import styles from './Work.module.scss';
import Tag from 'components/tag/Tag';

const Work = ({ href, image, title, description, tags }) => {
  return (
    <div className={styles.work}>
      <div className={styles.image}>
        <a className={styles.link} href={href} target={'_blank'}>
          <Image
            className={styles.page}
            src={image}
            alt={`Foto do projeto ${title}`}
          />
        </a>
      </div>

      <div className={styles.info}>
        <div className={styles.textual}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>

          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <ul className={styles.tags}>
            {tags.map((tag) => {
              return (
                <li key={tag}>
                  <Tag text={tag} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
