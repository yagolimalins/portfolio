import Headings from 'components/headings/Headings';
import styles from './Experiences.module.scss';
import Experience from 'components/experience/Experience';

const Experiences = () => {
  return (
    <footer className={styles.experiences}>
      <div className={styles.content}>
        <div className={styles.textual}>
          <Headings h2={'Experiences'} h3={'My most recent experiences'} />

          <Experience
            logo={'tugonn.png'}
            site={'https://tugonn.com'}
            job={'Full Stack Software Engineer'}
            tasks={[
              'Developed web applications using Next.js, React.js, and Tailwind CSS',
              'Managed complex application state with Zustand and React Query',
              'Built RESTful APIs with Node.js and Express, validated by Zod',
              'Implemented real-time features using Socket.io and JWT authentication',
              'Designed MongoDB databases with Mongoose and integrated AWS S3/Cloudinary',
              'Collaborated via GitHub and documented APIs using Postman and Swagger',
            ]}
            date={'2026 - Present'}
          />
        </div>
      </div>
    </footer>
  );
};

export default Experiences;
