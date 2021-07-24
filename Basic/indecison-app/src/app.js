class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision app';
    const subtitle = 'A simple app to test the indecision module';
    const options = ['one', 'two', 'three', 'four', 'five'];

    return (
      <div className=''>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  onButtonClick() {
    console.log('Test');
  }

  render() {
    return (
      <div className='action'>
        <button onClick={this.onButtonClick}>what should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonRemoveAll = this.onButtonRemoveAll.bind(this);
  }

  onButtonRemoveAll() {
    console.log('remove all', this.props.options);
  }

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
        <button onClick={this.onButtonRemoveAll}>Remove all</button>
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
      console.log(input);
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
