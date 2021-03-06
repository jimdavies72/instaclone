import "./home.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { PhotoContainer } from "../photoContainer/photoContainer";

export const Home = ({ user, setUser }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <button id="get" onClick={fetchPhotos}>
        Get Photos
      </button>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <PhotoContainer key={index} photo={photo} />
        ))}
      </div>
    </>
  );
};
