import axios from 'axios';

const KEY = 'AIzaSyDrQAaH3S21xLtTyS1Pvz8Sm-2sFmfaCu0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
