const ShowCity = ({ newCity }) => {
  return (
    <div>
      <h2>City {newCity.name}</h2>
      <p>time zone {newCity.timezone}</p>
    </div>
  );
};

export default ShowCity;
