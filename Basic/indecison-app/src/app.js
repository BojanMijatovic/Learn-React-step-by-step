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
        <AddOptions />
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
  onButtonRemoveAll() {
    console.log('remove all');
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

class AddOptions extends React.Component {
  render() {
    return (
      <div className='add-options'>
        <p>Add option here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
