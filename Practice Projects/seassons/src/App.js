import SeasonDisplay from './SeasonDisplay';

function App() {
  const test = window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords),
    (error) => console.log(error.message)
  );

  return (
    <div>
      <h2>Latitude</h2>
      <SeasonDisplay />
    </div>
  );
}

export default App;
