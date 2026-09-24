import Headings from 'components/headings/Headings';
import styles from './Experiences.module.scss';
import Experience from 'components/experience/Experience';

const Experiences = () => {
  return (
    <footer className={styles.experiences}>
      <div className={styles.content}>
        <div className={styles.textual}>
          <Headings h2={'Experiences'} h3={'My most recent experiences'} />


        </div>
      </div>
    </footer>
  );
};

export default Experiences;
