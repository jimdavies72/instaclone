import "./photoContainer.css";

export const PhotoContainer = ({ photo }) => {
  return (
    <div className="photo">
      <p>{photo.author}</p>
      <img
        src={photo.download_url}
        width="200"
        height="200"
        alt="lorem picsum random"
      />
    </div>
  );
};
