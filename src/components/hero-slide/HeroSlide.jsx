/*==========================================
Title:  move-app-react
Date:   13-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";
import "./hero-slide.scss";
import movieApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button, { OutlineButton } from "../button/Button";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await movieApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{delay:3000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideTeam
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideTeam = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* {item.title} */}
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={()=> console.log('trailer')}>
                Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt={`${item.title} - BeeMovies`} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
