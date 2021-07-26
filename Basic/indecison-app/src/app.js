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
    this.setState(() => ({ options }));
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

const Header = ({ title, subtitle }) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
  //  subtitle: 'A simple app to test the indecision module',
  subtitle: 'Some subtitle',
};

const Action = ({ randomPickOption }) => {
  return (
    <div className='action'>
      <button onClick={randomPickOption}>Random</button>
    </div>
  );
};

const Options = ({ options, deleteAllOptions, removeSingleOption }) => {
  const lengthOptions = options.length;
  return (
    <div className=''>
      <h3>Options</h3>
      <p>Yo now have {lengthOptions} options</p>
      {options.length === 0 && <p>No options</p>}
      <ul className='options'>
        {options.map((option, index) => {
          return <Option key={index + 1} optionText={option} removeSingleOption={removeSingleOption} />;
        })}
      </ul>
      <button onClick={deleteAllOptions}>Remove all</button>
    </div>
  );
};

const Option = ({ optionText, removeSingleOption, editSingleOption }) => {
  return (
    <div className=''>
      {optionText}
      <button onClick={() => removeSingleOption(optionText)}>remove</button>
    </div>
  );
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
    const error = this.props.addSingleOption(option);
    e.target.option.value = '';
    this.setState(() => ({ error }));
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
