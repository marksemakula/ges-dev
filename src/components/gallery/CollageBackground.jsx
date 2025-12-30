// CollageBackground.jsx
import React from "react";
import "./CollageBackground.css";

// List of selected images for the collage
const images = [
  "/images/15-09-2015-12-03-57_DSCN1414.jpg",
  "/images/26-08-2015-01-01-46_IMG_1441.jpg",
  "/images/26-08-2015-01-03-29_IMG_3691.jpg",
  "/images/26-08-2015-12-49-54__MG_8635.jpg",
  "/images/26-08-2015-12-54-03__MG_9650.jpg",
  "/images/73e7f5be-efe4-4779-a0dd-ec96e761e11c.jpg",
  "/images/annie-spratt-V-XM4kkWpng-unsplash.jpg",
  "/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg",
  "/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg",
  "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg"
];

const CollageBackground = () => (
  <div className="collage-bg">
    {images.map((src, i) => (
      <img key={i} src={src} alt="collage" className="collage-img" />
    ))}
  </div>
);

export default CollageBackground;
