import Work from 'components/work/Work'
import styles from './Works.module.scss'
import Headings from 'components/headings/Headings'

const Works = () => {
    return (
        <div className={styles.works}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings h2={"Trabalhos"} h3={"Alguns projetos de minha autoria"}/>
                    <Work
                        image={"senai"}
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