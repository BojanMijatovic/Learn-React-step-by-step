import React from 'react';
import unsplash from './api/unsplash';
import ImageList from './image-list/ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos/', {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <h1>Welcome to new app</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found : {this.state.images.length}</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
