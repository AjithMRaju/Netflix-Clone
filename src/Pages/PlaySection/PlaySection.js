import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import axios from "../../Helpres/Axios";
import YouTube from "react-youtube";
import "./PlaySection.css";

const PlaySection = () => {
  const location = useLocation();
  const movieId = location.state;
  // console.log(movieId);

  const opts = {
    height: "100",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const [trailerKey, setTraileKey] = useState("");

  useEffect(() => {
    axios
      .get(`/movie/${movieId}/videos?api_key=b902dbb65d4394f354de722c235ab4bb`)
      .then((response) => {
        const trailer = response.data.results.find(
          (result) => result.type === "Trailer"
        );
        if (trailer) {
          setTraileKey(trailer.key);
          console.log(trailer.key);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <MdOutlineArrowBack />
          Home
        </Link>
      </div>
      <YouTube videoId={trailerKey} opts={opts} className="video" />
    </div>
  );
};

export default PlaySection;

//  <div className="video-container">
//       <Link to="/">
//         <button className="mb-5"><MdKeyboardBackspace/>Back</button>
//       </Link>
//       <YouTube videoId={trailerKey} opts={opts} />
//     </div>

// <div className="container ">
// <div className="row">
//   <div className="col-lg-6">
//     <div className="video-container">
//       <Link to="/">
//         <button className="mb-5">
//           <MdKeyboardBackspace />
//           Back
//         </button>
//       </Link>
//       <YouTube videoId={trailerKey} opts={opts} />
//     </div>
//   </div>
//   <div className="col-lg-6">

//   </div>
// </div>
// </div>
