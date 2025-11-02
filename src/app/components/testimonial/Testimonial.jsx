import Image from 'next/image'
import styles from './Testimonial.module.scss'
import linkedin from 'assets/icons/linkedin.svg'

const Testimonial = ({ avatar, testimonial, author, website, position }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <a href={website} target='_blank'>
                    <Image
                        className={styles.avatar}
                        src={avatar}
                        alt={"Foto de cliente"}
                    />
                </a>

                <div className={styles.text}>
                    <p className={styles.testimonial}>
                        {`"${testimonial}"`}
                    </p>
                    <div className={styles.author}>
                        <a href={website} className={styles.website} target='_blank'>
                            {/* <Image
                            className={styles.linkedin}
                            src={linkedin}
                            alt='Icone do LinkedIn'
                            /> */}
                            {author}
                        </a>
                        <p className={styles.position}>
                            {position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial