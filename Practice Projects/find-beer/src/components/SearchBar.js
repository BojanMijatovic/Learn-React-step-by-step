import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Find beer store' />
      </form>
    );
  }
}

export default SearchBar;
