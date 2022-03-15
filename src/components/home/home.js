import "./home.css";

import { useState } from "react";
import { PhotoContainer } from "../photoContainer/photoContainer";

export const Home = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={fetchPhotos}>Get Photos</button>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <PhotoContainer key={index} photo={photo} />
        ))}
      </div>
    </>
  );
};
