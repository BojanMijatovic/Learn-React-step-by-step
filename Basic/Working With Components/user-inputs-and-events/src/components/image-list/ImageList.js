const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.small} alt={image.description} />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
