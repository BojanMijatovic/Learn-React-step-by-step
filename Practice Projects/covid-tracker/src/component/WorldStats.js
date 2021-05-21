import React, { useState } from 'react';
import styles from './WorldStats.module.css';
import axios from 'axios';

const WorldStats = () => {
  const [stats, setStats] = useState('');

  // for total stats World
  const onButtonClick = async () => {
    const worldTotal = await axios.get('https://disease.sh/v3/covid-19/all');
    setStats(worldTotal.data);
  };

  const { todayDeaths, todayCases, todayRecovered } = stats;

  const date = new Date();

  console.log(date);

  return (
    <div className={styles.world}>
      <div className={styles.statsTitle}>
        <h2>Today World stats </h2>
        <button onClick={onButtonClick} className={styles.btnStats}>
          refresh stats
        </button>
      </div>
      <div className={styles.statsContent}>
        <div className={styles.stats}>
          <h4 className={styles.todayCases}>
            <label>cases</label> {todayCases}
          </h4>
        </div>
        <div className={styles.stats}>
          <h4 className={styles.todayDeaths}>
            <label>deaths</label> {todayDeaths}
          </h4>
        </div>
        <div className={styles.stats}>
          <h4 className={styles.todayRecovered}>
            <label>recovered</label> {todayRecovered}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WorldStats;
