import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addMovie } from "../../Fucntions/AddMovie";
import { trancate } from "../../Fucntions/trancate";
import {
  MdPlayArrow,
  MdAdd,
  MdThumbUp,
  MdThumbDown,
  MdStarRate,
  MdOutlineStarOutline,
} from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./RowList.css";

const RowList = ({ movies }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [isLoading, setIsLoading] = useState(true);
  const [isLiked,setIsLiked] =useState("#fff");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Skeleton
          height={282}
          width={188}
          count={3}
          baseColor="#151516"
          highlightColor="#222"
          className="mb-5"
        />
      ) : (
        <div className="cardz">
          <div className="poster">
            <img src={`${base_url}${movies?.poster_path}`} alt="Netflix" />
          </div>
          <div className="details">
            <h3>{movies?.original_title}</h3>
            <div className="ratings">
              <MdStarRate className="star" />
              <MdStarRate className="star" />
              <MdStarRate className="star" />
              <MdStarRate className="star" />
              <MdOutlineStarOutline className="star" />
              <span>{movies?.vote_average}/10</span>
            </div>
            <div className="tags">
              <span>
                <Link to="/play" state={movies.id}>
                  <MdPlayArrow className="me-2" title="Watch Trailer" />
                </Link>
                <MdAdd
                  className="me-2"
                  title="Add to Mylist"
                  onClick={() => {
                    addMovie(movies);
                  }}
                />
                <MdThumbUp 
                className="me-2"
                title="Like"
                onClick={() =>{setIsLiked("yellow")}} 
                style={{color:`${isLiked}`}}
                />
                <MdThumbDown 
                className="me-2"
                title="Dislike"
                onClick={() =>{setIsLiked("#fff")}}
                />
              </span>
            </div>
            <div className="info">
              <p>{trancate(movies?.overview, 150)}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RowList;
