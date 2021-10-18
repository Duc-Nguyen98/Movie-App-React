/*==========================================
Title:  move-app-react
Date:   14-Oct-2021
==========================================*/
import React, { useState, useEffect, useCallback } from "react";
import "./movie-grid.scss";
import MovieCard from "../movie-card/MovieCard";
import movieApi, { category, movieType, tvType } from "../../api/tmdbApi";
import { useParams, useHistory } from "react-router";
import Button, { OutlineButton } from "../button/Button";
import Input from "../input/Input";

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
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
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

const MovieSearch = (props) => {
  const history = useHistory();
  const [keyWord, setKeyWord] = useState(props.keyWord ? props.keyWord : "");
  const goToSearch = useCallback(() => {
    if (keyWord.trim().length > 0) {
      history.replace({ pathname: `/${category[props.category]}/search/`+keyWord })
      setKeyWord("");
    }
  }, [keyWord, props.category, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyWord, goToSearch]);
  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter Keyword"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};
export default MovieGrid;
