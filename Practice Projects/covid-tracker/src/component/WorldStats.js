import React, { useState } from 'react';
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
    <div>
      <div>
        <h2>Today World stats </h2>
        <button onClick={onButtonClick}>refresh stats</button>
      </div>
      <div>
        <div>
          <h4>
            <label>cases</label> {todayCases}
          </h4>
        </div>
        <div>
          <h4>
            <label>deaths</label> {todayDeaths}
          </h4>
        </div>
        <div>
          <h4>
            <label>recovered</label> {todayRecovered}
          </h4>
        </div>
      </div>
      <div>
        active cases on date:
        {date}
        <label> {active}</label>
      </div>
    </div>
  );
};

export default WorldStats;
