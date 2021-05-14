import React from 'react';
import youtube from './components/api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    videoItems: [],
    selectedVideo: null,
  };

  onInputSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videoItems: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        Welcome to new App
        <SearchBar onSearchSubmit={this.onInputSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videoItems}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
