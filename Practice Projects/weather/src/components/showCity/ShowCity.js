import styles from './ShowCity.module.scss';

const ShowCity = ({ newCity }) => {
  // const { temp } = newCity.main;
  console.log(newCity);
  return (
    <div className={styles.city}>
      <h1 className={styles.name}>{newCity.name}</h1>
      <div className={styles.info}>
        <h1>Test </h1>
        <div className={styles.weather}>
          <h3>
            Cloudy <span>Few clouds</span>
          </h3>
          <h3>
            Wind <span>Speed</span>
          </h3>
        </div>
        <div className='date'>
          <p>min temp</p>
          <p>max temp</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCity;
