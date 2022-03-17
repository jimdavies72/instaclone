import "./photoContainer.css";

export const PhotoContainer = ({ photo }) => {
  return (
    <div className="photo">
      <img
        src={photo.download_url}
        width="250"
        height="250"
        alt="lorem picsum random"
      />
      <p>{photo.author}</p>
    </div>
  );
};
