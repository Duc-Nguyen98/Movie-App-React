import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import BeeThumbnail from "../../assets/bee_thumbnail.png";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;

  // useEffect(() => {
  //   setTimeout(() => {
  //     // debugger;
  //     imageRef.current.classList.add("hidden-text");
  //   }, 1000);
  //   return () => {};
  // }, [props.item])

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{
          backgroundImage: `url(${
            item.poster_path && item.backdrop_path
              ? apiConfig.w500Image(item.poster_path || item.backdrop_path)
              : BeeThumbnail
          })`,
        }}
      >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
