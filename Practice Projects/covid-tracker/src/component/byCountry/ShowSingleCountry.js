import styles from './ShowSingleCountry.module.css';

const ShowSingleCountry = ({ country }) => {
  return (
    <div className={styles.country}>
      <h4>{country.country}</h4>
      <div className={styles.cases}>
        <p className={styles.info}>Cases: {country.cases}</p>
        <p className={styles.info}>Active cases: {country.active}</p>
        <p className={styles.info}>Critical Cases: {country.critical}</p>
        <p className={styles.info}>Deaths: {country.deaths}</p>
        <p className={styles.info}>Total recovered: {country.recovered}</p>
        <div className=''>
          <p className={styles.info}>Today</p>
          <div className={styles.today}>
            <p className={styles.info}>Cases: {country.todayCases}</p>
            <p className={styles.info}>Deaths: {country.todayDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleCountry;
