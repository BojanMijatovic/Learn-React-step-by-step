import React from 'react';
import Car from './Practice';
import SeasonDisplay from './SeasonDisplay';

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
  //  create react component with class based and constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     errorMessage: '',
  //   };
  // }

  //  Alternative approach to constructor

  /*Here is same with constructor
  Babel set constructor behind scene
*/
  state = {
    latitude: null,
    errorMessage: '',
    car: 'BMW',
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => this.setState({ errorMessage: error.message })
    );
    console.log(`My component was render on screen`);
  }

  // componentDidUpdate() {
  //   console.log(`My component was update and rendered`);
  // }

  // componentWillUnmount() {
  //   console.log(`My component was end for use`);
  // }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.latitude} />
        <Car newCar={this.state.car} />
      </div>
    );
  }
}

export default App;
