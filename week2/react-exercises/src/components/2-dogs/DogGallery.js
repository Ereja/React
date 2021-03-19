import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getDogPhoto = () => {
    setLoading(true);
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setDogPhotos([...dogPhotos, data.message]);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="dog-container">
      <Button getDog={getDogPhoto} />
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Something went wrong!</p>}
      {dogPhotos.length === 0 && <p>Get your first dog!</p>}
      <div className="dogs-container">
        {!hasError &&
          !isLoading &&
          dogPhotos.map(photo => (
            <DogPhoto
              key={Math.floor(Math.random() * 1000000)}
              dogPhoto={photo}
            />
          ))}
      </div>
    </div>
  );
};

export default DogGallery;

//dogPhoto
