import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Greet from Practice and car is {this.props.newCar}</div>;
  }
}

export default Car;
