import React from 'react';
import Car from './components/Car';
import styles from './components/App.module.css';
class App extends React.Component {
  state = {
    name: 'new car',
    model: 'A8',
  };

  componentDidMount() {
    this.setState({ name: 'Audi' });
    this.setState({ model: 'A6' });
  }

  render() {
    return (
      <div className={styles.app}>
        <Car carName={this.state.name} carModel={this.state.model} />
        <Car carModel={this.state.model} />
        <Car />
      </div>
    );
  }
}

export default App;
