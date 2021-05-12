import React from 'react';

class SearchBar extends React.Component {
  onInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              placeholder='find some images'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
