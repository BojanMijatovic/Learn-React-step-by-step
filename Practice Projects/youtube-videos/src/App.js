import React from 'react';
import youtube from './components/api/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    videoItems: [],
  };

  onInputSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videoItems: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        Welcome to new App
        <SearchBar onSearchSubmit={this.onInputSubmit} />
        <VideoList videos={this.state.videoItems} />
      </div>
    );
  }
}

export default App;
