class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.randomPickOption = this.randomPickOption.bind(this);

    this.state = {
      options: ['one', 'two', 'three', 'four', 'five'],
    };
  }

  deleteAllOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  randomPickOption() {
    const options = this.state.options;
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  render() {
    const title = 'Indecision app';
    const subtitle = 'A simple app to test the indecision module';

    return (
      <div className=''>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} randomPickOption={this.randomPickOption} />
        <Options options={this.state.options} deleteAllOptions={this.deleteAllOptions} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div className='action'>
        <button onClick={this.props.randomPickOption} disabled={this.props.hasOptions === false}>
          what should I do
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const lengthOptions = this.props.options.length;

    return (
      <div className=''>
        <h3>Options</h3>
        <p>Yo now have {lengthOptions} options</p>
        <ul className='options'>
          {this.props.options.map((option, index) => {
            return <Option key={index} optionText={option} />;
          })}
        </ul>
        <button onClick={this.props.deleteAllOptions}>Remove all</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div className=''>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  onFormAddOption(e) {
    e.preventDefault();
    const input = e.target.option.value.trim();
    if (input) {
      this.setState((prevState) => {
        return {
          options: [...prevState.options, input],
        };
      });
      console.log(this.state.options);
      e.target.reset();
    }
  }

  render() {
    return (
      <div className=''>
        <form className='add-option' onSubmit={this.onFormAddOption}>
          <input type='text' placeholder='Add option' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
