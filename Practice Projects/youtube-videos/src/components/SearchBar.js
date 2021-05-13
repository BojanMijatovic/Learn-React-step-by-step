import React from 'react';

class SearchBar extends React.Component {
  state = { video: '' };

  onInputChange = (e) => {
    this.setState({ video: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.video);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Search video:</label>
            <input
              type='text'
              placeholder='find video from youtube'
              value={this.state.video}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
