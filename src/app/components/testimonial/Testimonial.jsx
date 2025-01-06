import Image from 'next/image'
import styles from './Testimonial.module.scss'

const Testimonial = ({ avatar, testimonial, author, position }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <Image
                className={styles.avatar}
                    src={avatar}
                    alt={"Foto de cliente"}
                />

                <div className={styles.text}>
                    <p className={styles.testimonial}>
                        {`"${testimonial}"`}
                    </p>
                    <p className={styles.author}>
                        {author}
                    </p>
                    <p className={styles.position}>
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial