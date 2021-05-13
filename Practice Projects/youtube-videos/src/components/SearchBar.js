import React from 'react';

class SearchBar extends React.Component {
  state = { video: '' };

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ video: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='find video from youtube'
          value={this.state.video}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
