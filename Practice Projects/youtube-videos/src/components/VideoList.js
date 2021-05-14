import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoRenderedList = videos.map((video) => {
    // const { id, snippet } = video;
    // return <div key={id.videoId}>{snippet.description}</div>;

    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });
  return <div className='ui relaxed divided list'>{videoRenderedList}</div>;
};

export default VideoList;
