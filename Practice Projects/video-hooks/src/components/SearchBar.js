import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [video, setVideo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(video);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Search video:</label>
          <input
            type='text'
            placeholder='find video from youtube'
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
