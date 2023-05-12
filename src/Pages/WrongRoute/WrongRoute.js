import React from "react";
import { useNavigate } from "react-router-dom";

const emoji =
  "https://th.bing.com/th/id/R.c7ae55431636e73b59944e75ac1407c4?rik=G22qSPtgB88a3w&riu=http%3a%2f%2fwww.downloadclipart.net%2fmedium%2f37200-thought-cloud-blue-th-images.png&ehk=Q%2ftiefcYvWi%2b5gT%2fdFySOVyKYIJHXdO1182DpibW36A%3d&risl=&pid=ImgRaw&r=0";
const WrongRoute = () => {
  const history = useNavigate();

  const goHome = () => {
    history("/");
  };

  return (
    <div
      className="container d-flex flex-column align-items-start justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <img
        style={{ width: "84px", backgroundColor: " none", color: "#red" }}
        src={emoji}
        alt="cover"
      />
      <h4 className="mt-4 text-white">Hmmm... cant reach this page</h4>
      <p
        style={{
          color: "#b3b3b3",
          fontWeight: "600",
        }}
      >
        Go back to home and refresh the page...
      </p>
      <button
        className="goBtn mt-4"
        onClick={goHome}
        style={{
          border: "none",
          outline: "black",
          backgroundColor: "blue",
          color: "#fff",
          borderRadius: "3px",
          padding: "5px",
          fontSize: "1rem",
          fontWeight: "500",
          width: "132px",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default WrongRoute;
