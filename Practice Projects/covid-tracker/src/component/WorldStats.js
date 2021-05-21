import React, { useState } from 'react';
import styles from './WorldStats.module.css';
import axios from 'axios';

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
      <div className={styles.date}>
        active cases on date:
        {date}
        <label> {active}</label>
      </div>
    </div>
  );
};

export default WorldStats;
