import styles from './SinglePlayer.module.scss';

const SinglePlayer = (props) => {
  return <div className={styles.single}>{props.children}</div>;
};
export default SinglePlayer;
