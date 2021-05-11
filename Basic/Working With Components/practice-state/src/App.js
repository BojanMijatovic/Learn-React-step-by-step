import ListCar from './components/ListCar';

import styles from './components/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <ListCar />
    </div>
  );
};

export default App;
