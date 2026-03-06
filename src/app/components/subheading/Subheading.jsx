import styles from './Subheading.module.scss';

const Subheading = ({ text }) => {
  return <h3 className={styles.subheading}>{text}</h3>;
};

export default Subheading;
