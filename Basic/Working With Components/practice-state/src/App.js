import React from 'react';
import Car from './components/Car';

class App extends React.Component {
  state = {
    name: 'audi',
    model: 'A8',
  };

  componentDidMount() {
    this.setState({ name: 'new car' });
    this.setState({ model: 'A6' });
  }

  render() {
    return (
      <div>
        <Car carName={this.state.name} carModel={this.state.model} />
        <Car carModel={this.state.model} />
        <Car />
      </div>
    );
  }
}

export default App;
