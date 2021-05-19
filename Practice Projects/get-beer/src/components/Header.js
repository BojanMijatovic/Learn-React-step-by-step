import styles from './style/layout/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Find beer App</h1>
    </div>
  );
};

export default Header;
