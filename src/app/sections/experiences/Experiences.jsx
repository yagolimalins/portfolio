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
                        h3={'Minhas experiências mais recentes'}
                    />
                    <Experience
                        logo={'fiea'}
                        job={'Analista de Infraestrutura'}
                        tasks={[
                            'Instalação de softwares',
                            'Implantação e manutenção de hardware',
                            'Gerenciamento de Identidade e Acesso',
                            'Automação de tarefas através de scripts',
                            'Suporte em Service Desk'
                        ]}
                        date={'2024 - 2025'}
                    />
                    <Experience
                        logo={'fiea'}
                        job={'Desenvolvedor de Software'}
                        tasks={[
                            "Suporte N2 em sistema BPMS (Orquestra)",
                            "Desenvolver novas funcionalidades",
                            "Integração entre sistemas usando APIs",
                            "Correção de bugs em processos",
                            "Atualização de fontes de dados",
                            "Ajustes no fluxo de processos",
                            "Frameworks Kanban e Scrum"
                        ]}
                        date={'2025 - Atual'}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Experiences