import React from 'react';

class SearchBar extends React.Component {
  state = { store: '' };

  //  we use this to update state
  // onInputChange = (e) => {
  //   this.setState({ store: e.target.value });
  // };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.store);
    this.props.onSubmitBar(this.state.store);
    this.setState({ store: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type='text'
          placeholder='Find beer store'
          value={this.state.store}
          onChange={(e) => this.setState({ store: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;
