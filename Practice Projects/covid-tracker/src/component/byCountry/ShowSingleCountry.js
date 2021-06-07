import styles from '../style/layout/_showSingleCountry.module.scss';

const ShowSingleCountry = ({ country }) => {
  return (
    <div className={styles.country}>
      <h4 className={styles.name}>{country.country}</h4>
      <div className={styles.cases}>
        <p> Cases: </p>
        <span> {country.cases}</span>
      </div>
      <div className={styles.cases}>
        <p>Active Cases: </p>
        <span className={styles.active}> {country.active}</span>
      </div>
      <div className={styles.cases}>
        <p>Critical Cases: </p>
        <span className={styles.critical}> {country.critical}</span>
      </div>
      <div className={styles.cases}>
        <p>Death Cases: </p>
        <span className={styles.deaths}> {country.deaths}</span>
      </div>
    </div>
  );
};

export default ShowSingleCountry;
