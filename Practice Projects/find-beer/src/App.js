import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import StoreList from './components/StoreList';

/*
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/

class App extends React.Component {
  state = {
    findBeer: [],
  };

  onSearchSubmit = async (beer) => {
    const response = await axios
      .get('https://api.openbrewerydb.org/breweries/', {
        params: {
          by_name: beer,
        },
      })
      .then((response) => response);
    // console.log(response);
    this.setState({ findBeer: response });
  };

  render() {
    return (
      <div>
        Here is App to find beer store
        <SearchBar onSubmitBar={this.onSearchSubmit} />
        <StoreList />
        <p>{console.log(this.state.findBeer)}</p>
      </div>
    );
  }
}

export default App;
