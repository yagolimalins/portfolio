import Work from 'components/work/Work'
import styles from './Works.module.scss'
import Headings from 'components/headings/Headings'
import senai from 'assets/images/works/senai.png'
import hidrauteky from 'assets/images/works/hidrauteky.png'

const Works = () => {
    return (
        <div id="works" className={styles.works}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings h2={"Trabalhos"} h3={"Alguns projetos em que trabalhei"} />
                    <Work
                        href={"https://www.hidrauteky.com"}
                        image={hidrauteky}
                        title={"Hidrauteky"}
                        description={
                            `Site empresarial desenvolvido com tecnologias modernas para um negócio local de detecção de vazamentos. 
                            No desenvolvimento desse projeto utilizei Next.js visando performance e escalabilidade, permitindo também
                            a implementação de um backend integrado para envios de Email para a empresa.
                            `
                        }
                        tags={[
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "JavaScript",
                            "Tailwind CSS"
                        ]}
                    />
                    <Work
                        href={"https://sobre-senai.vercel.app"}
                        image={senai}
                        title={"Sobre o SENAI"}
                        description={
                            `
                            Pagina de apresentação do SENAI/AL e suas unidades. 
                            Projeto realizado como desafio proposto para a seleção de estágio no Sistema FIEA.
                            `
                        }
                        tags={[
                            "Vue.js",
                            "Nuxt.js",
                            "JavaScript",
                            "SCSS"
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Works