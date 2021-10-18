/*==========================================
Title:  move-app-react
Date:   16-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/tmdbApi.js";
import apiConfig from "../../api/apiConfig";
import BeeImage from "../../assets/bee_image.png"

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const response = await movieApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    
    };
    getCredits();
  }, [category, props.id]);



  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${(item.profile_path)? apiConfig.w500Image(item.profile_path) : BeeImage})`,
              backgroundPosition: 'center'
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default CastList;
