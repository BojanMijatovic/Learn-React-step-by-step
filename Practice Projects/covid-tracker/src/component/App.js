import SingleCountry from './byCountry/SingleCountry';
import Header from './Header';
import WorldStats from './WorldStats';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <WorldStats />
      <SingleCountry />
    </div>
  );
};

export default App;
