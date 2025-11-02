import Headings from 'components/headings/Headings'
import styles from './Experiences.module.scss'
import Experience from 'components/experience/Experience'

const Experiences = () => {
    return (
        <footer className={styles.experiences}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings
                        h2={'Experience'}
                        h3={'My most recent experiences'}
                    />
                    <Experience
                        logo={'fiea'}
                        job={'Software Developer'}
                        tasks={[
                            'Level 2 support for the Orquestra/Zeev BPMS system',
                            'Develop new features using JavaScript/TypeScript + jQuery',
                            'Integrate systems using Node.js and Python APIs',
                            'Update data sources consuming GraphQL and REST APIs',
                            'SQL Server database management',
                            'Fix bugs and improve business processes',
                            'Deliver solutions using Docker and Jenkins',
                            'Work under the Scrum framework using Kanban + Azure DevOps'
                        ]}
                        date={'2025 - Present'}
                    />
                    <Experience
                        logo={'fiea'}
                        job={'Infrastructure Analyst'}
                        tasks={[
                            'Software installation, hardware deployment and maintenance',
                            'Identity and Access Management using Active Directory and Microsoft 365',
                            'Task automation through PowerShell scripting',
                            'IT inventory management using TraumaZero',
                            'Level 2 Service Desk support'
                        ]}
                        date={'2024 - 2025'}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Experiences