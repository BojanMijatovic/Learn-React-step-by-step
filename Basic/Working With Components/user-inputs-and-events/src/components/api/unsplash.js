import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID t6HDttpyxSWhm0BZIeFbjXqQ4J3XKEWoF9J0iVUObV8',
  },
});
