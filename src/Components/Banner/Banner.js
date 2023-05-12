import React, { Fragment, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {trancate} from "../../Fucntions/trancate"
import axios from "../../Helpres/Axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Banner.css";

const Banner = ({ Fetch_URL }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate=useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(Fetch_URL);
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      setIsLoading(false);
      return response;
    };
    fetchMovies();
  }, [Fetch_URL]);

  

  return (
    <Fragment>
      {isLoading ? (
        <Skeleton
          height={446}
          count={3}
          baseColor="#151516"
          highlightColor="#222"
        />
      ) : (
        <header
          className="banner text-white"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="banner-contents ms-5  h-190px">
            <h1 className="banner-title ">
              {movies?.title || movies?.name || movies?.original_title}
            </h1>
            <div className="banner-buttons">
              <Link to="/play" state={movies?.id}>
                <button className="banner-button">Play</button>
              </Link>
              <button className="banner-button" onClick={() => { navigate("/myList")}}>My List</button>
            </div>
            <div className="banner-description ">
              <p className="text-white font:1rem">
                {trancate(movies?.overview, 150)}
              </p>
            </div>
          </div>
          <div className="bannert-fade" />
        </header>
      )}
    </Fragment>
  );
};

export default Banner;
