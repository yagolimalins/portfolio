import styles from './Skills.module.scss'
import Skill from 'components/skill/Skill'
import Headings from 'components/headings/Headings'

const Skills = () => {

    return (
        <div className={styles.skills}>
            <div className={styles.content}>
                <Headings
                    h2={'Tech Stack'}
                    h3={'Languages, frameworks and tools'}
                />
                <div className={styles.icons}>
                    <Skill skill={'JavaScript'} icon={'javascript'} />
                    <Skill skill={'TypeScript'} icon={'typescript'} />
                    <Skill skill={'React.js'} icon={'react'} />
                    <Skill skill={'Next.js'} icon={'next'} />
                    <Skill skill={'Node.js'} icon={'node'} />
                    <Skill skill={'Express.js'} icon={'express'} />
                    <Skill skill={'PostgreSQL'} icon={'postgresql'} />
                    <Skill skill={'MongoDB'} icon={'mongodb'} />
                    <Skill skill={'Sass/Scss'} icon={'sass'} />
                    <Skill skill={'Tailwind'} icon={'tailwind'} />
                    <Skill skill={'Figma'} icon={'figma'} />
                    <Skill skill={'Git'} icon={'git'} />
                </div>
            </div>
        </div>
    )
}

export default Skills