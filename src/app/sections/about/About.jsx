import Image from 'next/image'
import styles from './About.module.scss'
import Headings from 'components/headings/Headings'
import photo from 'assets/images/photos/photo.jpg'

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings h2={'Sobre'} h3={'Permita que eu me apresente 🤘🏼'} />
                    <div className={styles.bio}>
                        <Image
                            className={styles.photo}
                            src={photo}
                            alt='Foto de Yago tocando contrabaixo'
                        />
                        <div className={styles.depict}>
                            <p>
                                Graduando em Análise e Desenvolvimento de Sistemas na faculdade Estácio com mais de uma década de envolvimento no universo da tecnologia.
                                Atualmente, atuo como Desenvolvedor de Software no Sistema FIEA e trabalho também como desenvolvedor web freelancer, sempre buscando aprimorar minhas habilidades e oferecer soluções de qualidade.
                                <br /><br />
                                Tenho experiência com diversas tecnologias, incluindo React + Next.js e Vue + Nuxt.js no front-end e no lado do back-end: Express (Node.js) e outros frameworks do ecossistema Deno (Hono, Oak, etc).
                                No lado da persistência de dados, faço uso de bancos de dados relacionais como PostgreSQL e não relacionais como MongoDB, buscando sempre a melhor performance e integridade nas minhas aplicações.
                                <br /><br />
                                Além de minha trajetória na tecnologia, sou músico e já atuei como professor na área. Essa vivência me proporcionou uma visão criativa e analítica além de competências comunicativas e interpessoais, que levo para todos os projetos em que me envolvo.
                                <br /><br />
                                <strong className={styles.catchphrase}>Acredito que tanto a música quanto a programação exigem paixão, disciplina e criatividade para criar algo excepcional</strong>. ✨
                                <br /><br />
                                Se você está procurando por um desenvolvedor web dedicado, com um olhar atento às necessidades do projeto e uma abordagem criativa, ficarei feliz em conversar e contribuir para o sucesso da sua ideia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About