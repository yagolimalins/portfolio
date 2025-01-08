import styles from './Headings.module.scss'
import Heading from "components/heading/Heading"
import Subheading from "components/subheading/Subheading"


const Headings = ({h2, h3}) => {
    return (
        <div className={styles.headings}>
            <Heading text={h2}/>
            <Subheading text={h3}/>
        </div>
    )
}

export default Headings