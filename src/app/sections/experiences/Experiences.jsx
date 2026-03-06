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

          <Experience
            logo={'fiea.svg'}
            site={'https://fiea.com.br'}
            job={'Full Stack Software Engineer'}
            tasks={[
              'Provided Level 2 (N2) support for BPMS systems (Orquestra/Zeev)',
              'Developed frontend features with React, TypeScript, JavaScript, and jQuery',
              'Built and integrated REST and GraphQL APIs using Node.js and Python',
              'Managed and optimized SQL Server databases',
              'Fixed bugs, refactored legacy code, and improved workflows',
              'Implemented CI/CD pipelines with Jenkins and Docker',
              'Worked with Scrum and Kanban using Azure DevOps',
            ]}
            date={'2025 - Present'}
          />

          <Experience
            logo={'fiea.svg'}
            site={'https://fiea.com.br/'}
            job={'Infrastructure Analyst'}
            tasks={[
              'Installed and maintained corporate software and hardware',
              'Managed identity and access using Active Directory and Microsoft 365',
              'Automated system configuration and administration using PowerShell',
              'Managed IT asset inventory using TraumaZero',
              'Provided Level 2 Service Desk support (ITIL)',
            ]}
            date={'2024 - 2025'}
          />
        </div>
      </div>
    </footer>
  );
};

export default Experiences;
