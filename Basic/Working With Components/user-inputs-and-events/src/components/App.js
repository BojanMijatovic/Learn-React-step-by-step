import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos/', {
      params: {
        query: term,
      },
    });
    console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <h1>Welcome to new app</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found : {this.state.images.length}</p>
      </div>
    );
  }
}

export default App;
