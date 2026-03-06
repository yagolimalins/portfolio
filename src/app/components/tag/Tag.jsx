import styles from './Tag.module.scss';

const Tag = ({ text }) => {
  return <p className={styles.tag}>{text}</p>;
};

export default Tag;
