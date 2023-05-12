import React, { useState, useEffect, useRef, Fragment } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from "../../Helpres/Axios";
import RowList from "../RowlIst/RowList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RowPost.css";
import Slider from "react-slick";

const RowPost = ({ title, fetch_Url, isLarge = false }) => {
  const [rowMovies, setRowMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetch_Url);
      setRowMovies(response.data.results);
      console.log(response.data.results);

      return response;
    };
    fetchMovies();
  }, [fetch_Url]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container ">
        <h3 className="listTile mt-5 mb-3">{title}</h3>
        <Slider {...settings}>
          {rowMovies && rowMovies.map((movies,index) => <RowList key={index} movies={movies} />)}
        </Slider>
      </div>
    </div>
  );
};

export default RowPost;
