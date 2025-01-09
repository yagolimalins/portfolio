import Headings from 'components/headings/Headings'
import styles from './Testimonials.module.scss'
import Testimonial from 'components/testimonial/Testimonial'
import carla from 'assets/avatars/carla.png'
import yago from 'assets/avatars/yago.jpg'

const Testimonials = () => {
    return (
        <div id="testimonials" className={styles.testimonials}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings
                        h2={"Depoimentos"}
                        h3={"Gentis comentários de parceiros"}
                    />
                    <div className={styles.testimonials}>
                        <Testimonial
                            avatar={carla}
                            author={"Carla Britto"}
                            testimonial={"Gostoso e dedicado ao trabalho"}
                            position={'Minha namorada'}
                        />
                        <Testimonial
                            avatar={yago}
                            author={"Yago Lins"}
                            testimonial={"É verdade esse bilhete"}
                            position={'Web Developer'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials