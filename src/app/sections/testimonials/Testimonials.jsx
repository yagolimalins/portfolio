import Headings from 'components/headings/Headings'
import styles from './Testimonials.module.scss'
import Testimonial from 'components/testimonial/Testimonial'
import edgar from 'assets/avatars/edgar.jpg'
import leonardo from 'assets/avatars/leonardo.jpg'
import joao from 'assets/avatars/joao.jpg'


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
                            avatar={edgar}
                            author={"Edgar Azevedo"}
                            website={"https://www.linkedin.com/in/edgar-azevedo-dos-santos-filho-140a2b128"}
                            testimonial={
                                `The georeferencing tool created by Yago was a real game-changer for our team. 
                                With it, we can access locations in the blink of an eye, plan visits strategically, and monitor units remotely. 
                                This not only improved productivity but also made our work much more efficient and practical.`
                            }
                            position={'Coordinator - CIGIP'}
                        />
                        <Testimonial
                            avatar={leonardo}
                            author={"Dr. Leonardo Medeiros"}
                            website={"https://www.linkedin.com/in/leonardo-medeiros-dr-6088443"}
                            testimonial={
                                `Yago is a focused professional with diverse skills and can contribute to your projects either as a Musician or a Software Engineer. 
                                He was my Piano Teacher, but through our conversations, I recognized his strong abilities in software engineering. 
                                Therefore, he has my full recommendation to work as a Software Engineer or as a Musician for Game Composition.`
                            }
                            position={'IT Professor - IFAL'}
                        />
                        <Testimonial
                            avatar={joao}
                            author={"João Paulo Costa"}
                            website={"https://www.hidrauteky.com"}
                            testimonial={
                                `Responsible professional who delivers on his promises — he built my company’s website exactly the way I had envisioned it!`
                            }
                            position={'CEO - Hidrauteky'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials