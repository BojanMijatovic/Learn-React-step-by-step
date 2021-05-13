import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoList = videos.map((video) => {
    const { id, snippet } = video;
    // return <div key={id.videoId}>{snippet.description}</div>;
    return <VideoItem key={id.videoId} />;
  });
  return <div>{videoList}</div>;
};

export default VideoList;
