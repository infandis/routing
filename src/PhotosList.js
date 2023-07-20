import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotosList = () => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h2>Фото з альбому</h2>
      <ul style={{display: 'flex', flexWrap: 'wrap', listStyle: 'none'}}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosList;

