import cielDegage from "../images/sun-regular.svg";
import nuageux from "../images/cloud-solid.svg";
import peuNuageux from "../images/cloud-sun-solid.svg";
import couvert from "../images/cloud-showers-heavy-solid.svg";
import React, { useState, useEffect } from "react";

const WeatherIcon = ({ data }) => {
  const [image, setImage] = useState(null);

  const getImage = (description) => {
    switch (description) {
      case "nuageux":
        return nuageux;
      case "couvert":
        return couvert;
      case "peu nuageux":
        return peuNuageux;
      case "ciel dégagé":
        return cielDegage;
      case "partiellement nuageux":
        return nuageux;
      default: 
        return null;
    }
  };

  useEffect(() => {
    const description = data.weather ? data.weather[0].description : null;
    const image = getImage(description);
    setImage(image);
  }, [data]);

  return (
    <>
      <span className="icon">
        {image && <img src={image} alt="icone météo" />}
      </span>
    </>
  );
};

export default WeatherIcon;
