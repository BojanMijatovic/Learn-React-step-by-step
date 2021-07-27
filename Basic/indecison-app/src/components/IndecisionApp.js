import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.randomPickOption = this.randomPickOption.bind(this);
    this.removeSingleOption = this.removeSingleOption.bind(this);
    this.addSingleOption = this.addSingleOption.bind(this);

    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      this.setState({ options });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //  add to local storage
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('IndecisionApp unmounted');
  }

  deleteAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  randomPickOption() {
    const options = this.state.options;
    const randomIndex = Math.floor(Math.random() * options.length);
    console.log(options[randomIndex]);
    return options[randomIndex];
  }

  addSingleOption(option) {
    if (!option) {
      return;
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is here ';
    }
    this.setState((prevState) => ({ options: [...prevState.options, option] }));
  }

  removeSingleOption(option) {
    this.setState((prevState) => ({ options: prevState.options.filter((opt) => opt !== option) }));
  }

  render() {
    const title = 'Indecision app';

    return (
      <div className=''>
        <Header title={title} />
        <Action hasOptions={this.state.options.length > 0} randomPickOption={this.randomPickOption} />
        <Options
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
          removeSingleOption={this.removeSingleOption}
        />
        <AddOption addSingleOption={this.addSingleOption} />
      </div>
    );
  }
}

export default IndecisionApp;
