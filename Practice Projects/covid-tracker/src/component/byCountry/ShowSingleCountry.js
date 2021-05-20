const ShowSingleCountry = ({ country }) => {
  // countryInfo.flag;

  return (
    <div>
      <div className=''>
        <p>{country.country}</p>
      </div>
      <div className=''>
        <p>Cases {country.cases}</p>
        <p>Active cases {country.active}</p>
        <p>Critical Cases {country.critical}</p>
        <p>Deaths {country.deaths}</p>
        <div className=''>
          <p>Today Cases {country.todayCases}</p>
          <p>Today Deaths {country.todayDeaths}</p>
          <p>Total recovered {country.recovered}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleCountry;
