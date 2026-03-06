import Headings from 'components/headings/Headings';
import styles from './Experiences.module.scss';
import Experience from 'components/experience/Experience';

const Experiences = () => {
  return (
    <footer className={styles.experiences}>
      <div className={styles.content}>
        <div className={styles.textual}>
          <Headings h2={'Experience'} h3={'My most recent experiences'} />

          <Experience
            logo={'fiea'}
            job={'Full Stack Developer'}
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
            logo={'fiea'}
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
