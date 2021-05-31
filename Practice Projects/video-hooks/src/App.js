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

  componentDidMount() {
    this.onInputSubmit('react.js');
  }

  onInputSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videoItems: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        Welcome to new App
        <SearchBar onSearchSubmit={this.onInputSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videoItems}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
