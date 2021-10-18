/*==========================================
Title:  move-app-react
Date:   12-Oct-2021
==========================================*/
import React from "react";
import { Link } from "react-router-dom";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { OutlineButton } from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {

  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
      <MovieList category={category.movie} type={movieType.popular} />
      <div className="container">
        <div className="section mb">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
      <MovieList category={category.movie} type={movieType.top_rated} />
      <div className="container">
        <div className="section mb">
          <div className="section__header mb-2">
            <h2>Trending Tv</h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
      <MovieList category={category.tv} type={tvType.popular} />
      <div className="container">
        <div className="section mb">
          <div className="section__header mb-2">
            <h2>Top Rated Tv</h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
      <MovieList category={category.tv} type={tvType.top_rated} />
    </>
  );
};
export default Home;
