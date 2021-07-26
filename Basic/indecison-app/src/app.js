class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.randomPickOption = this.randomPickOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: [],
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
    console.log(options[randomIndex]);
    return options[randomIndex];
  }

  addOption(option) {
    if (!option) {
      return;
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is here ';
    }
    this.setState((prevState) => {
      return {
        options: [...prevState.options, option],
      };
    });
  }

  render() {
    const title = 'Indecision app';
    const subtitle = 'A simple app to test the indecision module';

    return (
      <div className=''>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} randomPickOption={this.randomPickOption} />
        <Options options={this.state.options} deleteAllOptions={this.deleteAllOptions} />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

const Header = ({ title, subtitle }) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

const Action = ({ randomPickOption }) => {
  return (
    <div className='action'>
      <button onClick={randomPickOption}>Random</button>
    </div>
  );
};

const Options = ({ options, deleteAllOptions }) => {
  const lengthOptions = options.length;
  return (
    <div className=''>
      <h3>Options</h3>
      <p>Yo now have {lengthOptions} options</p>
      <ul className='options'>
        {options.map((option, index) => {
          return <Option key={index} optionText={option} />;
        })}
      </ul>
      <button onClick={deleteAllOptions}>Remove all</button>
    </div>
  );
};

const Option = ({ optionText }) => {
  return <div className=''>{optionText}</div>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormAddOption = this.onFormAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  onFormAddOption(e) {
    e.preventDefault();

    const option = e.target.option.value.trim();
    const error = this.props.addOption(option);
    e.target.option.value = '';
    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div className=''>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form className='add-option' onSubmit={this.onFormAddOption}>
          <input type='text' placeholder='Add option' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
