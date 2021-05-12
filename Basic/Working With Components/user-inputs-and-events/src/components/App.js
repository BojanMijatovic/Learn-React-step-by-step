import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    axios.get('https://api.unsplash.com/search/photos/', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID t6HDttpyxSWhm0BZIeFbjXqQ4J3XKEWoF9J0iVUObV8',
      },
    });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <h1>Welcome to new app</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
