import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style/layout/_worldStats.module.scss';

const WorldStats = () => {
  const [stats, setStats] = useState('');
  const [date, setDate] = useState('');

  // for total stats World
  const onButtonClick = async () => {
    const worldTotal = await axios.get('https://disease.sh/v3/covid-19/all');
    setStats(worldTotal.data);
    showDate();
  };

  const { todayDeaths, todayCases, todayRecovered, active } = stats;

  const showDate = () => {
    const date = new Date();
    setDate(date.toLocaleDateString());
  };

  return (
    <div className={styles.world}>
      <div className={styles.title}>
        <h2>today world stats</h2>
        <button className={styles.btn} onClick={onButtonClick}>
          refresh stats
        </button>
      </div>
      <div className={styles.total}>
        <div className={styles.singleItem}>
          <h4 className={styles.itemInfo}>
            <span>
              cases
              <label className={styles.active}> {todayCases}</label>
            </span>
          </h4>
        </div>
        <div className={styles.singleItem}>
          <h4 className={styles.itemInfo}>
            <span>
              deaths
              <label className={styles.death}> {todayDeaths}</label>
            </span>
          </h4>
        </div>
        <div className={styles.singleItem}>
          <h4 className={styles.itemInfo}>
            <span>
              recovered
              <label className={styles.recovered}> {todayRecovered}</label>
            </span>
          </h4>
        </div>
      </div>
      <div className={styles.date}>
        <p>
          <span> active cases on date:</span>
          {date}
        </p>
        <label>{active}</label>
      </div>
    </div>
  );
};

export default WorldStats;
