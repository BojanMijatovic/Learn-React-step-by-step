import React from 'react';

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

export default AddOption;
