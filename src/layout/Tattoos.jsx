import React, { useState } from "react";
import { tattooPhotos } from "../tattooPhotos";

export default function Tattoos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tattooPhotos.length);
  };

  const currentImageObj =
    tattooPhotos.length > 0 ? tattooPhotos[currentIndex] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  return (
    <>
      <h1>TATTOOS</h1>
      <p>artist contact email & socials</p>
      <div>
        <img src={imageurl} alt="tattoo portfolio images" />
        <button onClick={handleClick}>browse tattoos</button>
      </div>
    </>
  );
}
