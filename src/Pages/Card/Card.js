import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow, MdAdd, MdStarRate,MdThumbDown,MdThumbUp } from "react-icons/md";
import { IMG_URL } from "../../Helpres/Requests";
import { addMovie, deletMovie } from "../../Fucntions/AddMovie";
import { trancate } from "../../Fucntions/trancate";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css";

const Card = ({ items, id, remove = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked,setIsLiked] =useState("#fff");

  useEffect(() => {
    setIsLoading(false);
  }, []);


  return (
    <Fragment>
      {isLoading ? (
        <Skeleton
          height={250}
          width={162}
          count={3}
          baseColor="#151516"
          highlightColor="#222"
          className="me-5 mb-5"
        />
      ) : (
        <div className="cards">
          <img
            className="cards-img"
            src={`${IMG_URL}${items?.poster_path}`}
            alt="cover"
            key={items.id}
          />
          <div className="cards-body">
            <div className="movie_title cardName">{items.original_title}</div>
            <div className="icons d-flex mb-2">
              <span>
                <Link to="/play" state={items.id}>
                  <MdPlayArrow 
                  className="icon me-2"
                  title="Watch Trailer" />
                </Link>
                {remove ? (
                  <button
                    className="remove"
                    onClick={() => {
                      deletMovie(id);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <MdAdd
                    className="icon text-white"
                    title="Add to Mylist"
                    onClick={() => {
                      addMovie(items);
                    }}
                  />
                )}
                <MdThumbUp 
                className=" ms-2" 
                onClick={() =>{setIsLiked("yellow")}}
                style={{color:`${isLiked}`}}
                title="Like"
                />
                <MdThumbDown 
                className="text-white ms-2"
                onClick={() =>{setIsLiked("#fff")}}
                title="Dislike"/>
              </span>
            </div>

            <span className="text-white">{items.vote_average}/10</span>
            <span className="rating">
              <MdStarRate />
            </span>
            <span className="rating">
              <MdStarRate />
            </span>
            <span className="rating">
              <MdStarRate />
            </span>
            <span className="rating">
              <MdStarRate />
            </span>

            <div className="cardDescription p-1">
              {trancate(items.overview, 150)}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Card;
