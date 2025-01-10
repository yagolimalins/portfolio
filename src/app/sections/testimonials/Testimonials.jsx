import Headings from 'components/headings/Headings'
import styles from './Testimonials.module.scss'
import Testimonial from 'components/testimonial/Testimonial'
import edgar from 'assets/avatars/edgar.jpg'
import leonardo from 'assets/avatars/leonardo.jpg'

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
                                `A ferramenta de georreferenciamento criada por Yago foi um divisor de águas para a equipe. 
                                Com ela, é possível acessar localizações em um piscar de olhos, planejar visitas de forma estratégica e monitorar unidades de longe. 
                                Isso não apenas melhorou a produtividade, mas também tornou o trabalho muito mais eficiente e prático.`
                            }
                            position={'Coordenador - CIGIP'}
                        />
                        <Testimonial
                            avatar={leonardo}
                            author={"Dr. Leonardo Medeiros"}
                            website={"https://www.linkedin.com/in/leonardo-medeiros-dr-6088443"}
                            testimonial={
                                `Yago é um profissional objetivo com habilidades diversas e pode contribuir para seus projetos como Músico ou Engenheiro de Software. 
                                Ele foi meu Professor de Piano, mas, em nossas conversas, identifiquei fortes habilidades em engenharia de software. 
                                Portanto, ele tem a minha recomendação para trabalhar como Engenheiro de Software ou como Músico para Composição de Jogos.`
                            }
                            position={'Professor de TI - IFAL'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials