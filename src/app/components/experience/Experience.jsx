import Image from 'next/image';
import styles from './Experience.module.scss';

const Experience = ({ logo, job, tasks, date }) => {
  return (
    <div className={styles.experience}>
      <Image
        className={styles.logo}
        src={`/logos/${logo}.svg`}
        width={107}
        height={40}
        alt={`Logo da ${logo}`}
      />

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
