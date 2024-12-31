import Image from 'next/image'
import styles from './Skill.module.scss'

const Skill = ({ skill, icon }) => {

    return (
        <div className={styles.skill}>
            <Image
                src={`./icons/${icon}.svg`}
                width={64}
                height={64}
                alt={`Icone do ${skill}`}
            />
            <p>{skill}</p>
        </div>
    )
}

export default Skill