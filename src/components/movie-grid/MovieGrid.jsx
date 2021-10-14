/*==========================================
Title:  move-app-react
Date:   14-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";
import "./movie-grid.scss";
import MovieCard from "../movie-card/MovieCard";
import movieApi, { category, movieType, tvType } from "../../api/tmdbApi";
import { useParams } from "react-router-dom";
import { OutlineButton } from "../button/Button";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await movieApi.getMovieList(movieType.upcoming, {
              params,
            });
            break;

          default:
            response = await movieApi.getTvList(tvType.popular, { params });

            break;
        }
      } else {
        const params = { query: keyword };
        response = await movieApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await movieApi.getMovieList(movieType.upcoming, {
            params,
          });
          break;

        default:
          response = await movieApi.getTvList(tvType.popular, { params });

          break;
      }
    } else {
      const params = { page: page + 1, query: keyword };
      response = await movieApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard key={i} item={item} category={props.category} />
        ))}
      </div>

      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load More
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};
export default MovieGrid;
