import React from 'react';

// function App() {
//   const test = window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position.coords),
//     (error) => console.log(error.message)
//   );

//   return (
//     <div>
//       <h2>Latitude</h2>
//       <SeasonDisplay />
//     </div>
//   );
// }

/*
 The Rules of State
*/
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  render() {
    return (
      <div>
        Latitude: {`${this.state.latitude || this.state.errorMessage} `}
      </div>
    );
  }
}

export default App;
