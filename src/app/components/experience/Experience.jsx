import Image from 'next/image';
import styles from './Experience.module.scss';

const Experience = ({ logo, site, job, tasks, date }) => {
  return (
    <div className={styles.experience}>
      <a className={styles.logo} href={site} target="_blank">
        <Image
          src={`/logos/${logo}`}
          width={100}
          height={100}
          alt={`Logo da ${logo}`}
        />
      </a>

      <div className={styles.description}>
        <strong className={styles.job}>{job}</strong>

        <ul className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <li className={styles.task} key={task}>
                {task}
              </li>
            );
          })}
        </ul>
      </div>

      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default Experience;
