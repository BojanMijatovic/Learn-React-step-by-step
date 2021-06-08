import styles from './Header.module.scss';
import Container from '../style/ui/Container';

const Header = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div>
          <p>logo</p>
        </div>
        <div>
          <h1>NBA player stats</h1>
        </div>
      </div>
    </Container>
  );
};

export default Header;
