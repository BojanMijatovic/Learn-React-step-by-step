const ShowSingleCountry = ({ country }) => {
  return (
    <div>
      <h4>{country.country}</h4>
      <div>
        <p>Cases: {country.cases}</p>
        <p>Active cases: {country.active}</p>
        <p>Critical Cases: {country.critical}</p>
        <p>Deaths: {country.deaths}</p>
        <p>Total recovered: {country.recovered}</p>
        <div>
          <p>Today</p>
          <div>
            <p>Cases: {country.todayCases}</p>
            <p>Deaths: {country.todayDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleCountry;
