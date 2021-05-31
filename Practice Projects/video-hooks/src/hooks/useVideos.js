import { useState, useEffect } from 'react';
import youtube from '../components/api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videoItem, setVideoItem] = useState([]);

  useEffect(() => {
    // default term for search
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideoItem(response.data.items);
  };

  return [videoItem, search];
};

export default useVideos;
