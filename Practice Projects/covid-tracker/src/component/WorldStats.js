import React, { useState } from 'react';

import axios from 'axios';

const WorldStats = () => {
  const [stats, setStats] = useState('');

  // for total stats World
  const onButtonClick = async () => {
    const worldTotal = await axios.get('https://disease.sh/v3/covid-19/all');
    setStats(worldTotal.data);
  };

  console.log(stats);
  const { active, todayDeaths, todayCases, todayRecovered } = stats;

  return (
    <div>
      <div className=''>
        <h2>Today World stats </h2>
        <p>Active {active}</p>
      </div>
      <div>
        <div>
          <p>todayCases {todayCases}</p>
          <div>
            <p>Number : 10</p>
            <p>Total Check</p>
          </div>
        </div>
        <div>
          <p>todayDeaths {todayDeaths}</p>
          <div>
            <p>Number : 10</p>
            <p>Total Check</p>
          </div>
        </div>
        <div>
          <p>todayRecovered {todayRecovered}</p>
          <div>
            <p>Number : 10</p>
            <p>Total Check</p>
          </div>
        </div>
      </div>
      <button onClick={onButtonClick}>refresh stats</button>
    </div>
  );
};

export default WorldStats;
