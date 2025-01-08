import Headings from 'components/headings/Headings'
import styles from './Experiences.module.scss'
import Experience from 'components/experience/Experience'

const Experiences = () => {
    return (
        <footer className={styles.experiences}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings
                        h2={'Experiências'}
                        h3={'Um pouco das minhas experiências mais recentes'}
                    />
                    <Experience
                        logo={'fiea'}
                        job={'Analista de Infraestrutura (Estágio)'}
                        tasks={[
                            'Instalação de softwares',
                            'Implantação e manutenção de hardware',
                            'Gerenciamento de Identidade e Acesso',
                            'Automação de tarefas através de scripts',
                            'Suporte em Service Desk'
                        ]}
                        date={'2024 - Atualmente'}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Experiences