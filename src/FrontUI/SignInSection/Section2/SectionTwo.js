import React from "react";
import "./SectionTwo.css";
const SectionTwo = ({IMAGE_URL,VIDEO_URL,Default_Img}) => {
  return (
    <section className="section-2 mt-2 py-5">
      <div className="container-lg">
        <div className="row ">
          <div className="col-lg-6 text-start pt-5">
            <h1 className=" pt-5 text-white">Enjoy on your TV.</h1>
            <p className="signin-p text-white">
              Watch on smart TVs,playStation,xbox,
              <br />
              Chromecast,Apple TV Blur-ray players and more
            </p>
          </div>
          <div className="col-lg-5 tv">
            <div className="tv-image-container">
             {
              IMAGE_URL ? (
                <div className="tv-image">
                <img
                src={IMAGE_URL}
                  alt="cover"
                />
                <div className="video-section">
                  <video
                    className="add-video"
                    src={VIDEO_URL}
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </div>
              </div>
              ) : (
                <div className="default-image">
                  <img src={Default_Img} alt="cover" />
                </div>
              )
             }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;