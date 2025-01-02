import Image from 'next/image'
import styles from './About.module.scss'
import Headings from 'components/headings/Headings'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <div className={styles.textual}>
                    <Headings h2={'Sobre'} h3={'Permita que eu me apresente 🤘🏼'} />
                    <div className={styles.bio}>
                        <div className={styles.photo}>
                            <Image
                                src={'/images/photo.jpg'}
                                fill={true}
                                alt='Foto de Yago tocando contrabaixo'
                            />
                        </div>
                        <div className={styles.depict}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat ex non turpis tristique, sit amet semper neque fermentum. Phasellus neque erat, cursus convallis malesuada nec, mollis varius ex. Nam suscipit hendrerit maximus. Nam et leo turpis. Nam vestibulum ullamcorper elit sit amet cursus. Praesent justo massa, ultricies a eleifend quis, pellentesque ut lorem. Duis eu eros vitae erat condimentum facilisis. Donec nisi nunc, interdum vel blandit at, dignissim ut lorem. Mauris a enim feugiat, molestie neque vel, consequat tellus.<br /><br />
                                Nullam accumsan tristique risus non euismod. Pellentesque porta dolor et viverra faucibus. Donec at arcu in elit laoreet condimentum eget accumsan nunc. Nulla hendrerit facilisis augue, ut commodo sapien viverra maximus. Integer ipsum magna, rutrum at lacus ultrices, posuere pulvinar massa. Quisque quis ligula interdum, ullamcorper nulla eu, sagittis nulla. Fusce et mauris placerat, dictum velit in, tincidunt ligula. Nullam placerat ligula scelerisque tellus finibus aliquam. Nulla quis ex eu ex molestie scelerisque. Fusce a iaculis odio. Nam maximus ex eget ipsum lobortis blandit. Curabitur molestie mollis nisl id vulputate. Mauris at tempor sem. Donec mattis condimentum ultrices.<br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About