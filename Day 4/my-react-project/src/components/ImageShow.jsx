function ImageShow({ image }) { 
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_descriptions} />
    </div>
  );
}

export default ImageShow;
