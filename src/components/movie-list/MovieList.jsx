/*==========================================
Title:  move-app-react
Date:   14-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import movieApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import MovieCard from "../movie-card/MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      let params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await movieApi.getMovieList(props.type, { params });
            break;
          default:
            response = await movieApi.getTvList(props.type, { params });
            break;
        }
      } else {
        response = await movieApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };

    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default MovieList;
