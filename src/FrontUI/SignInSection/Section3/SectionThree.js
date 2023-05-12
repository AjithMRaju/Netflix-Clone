import React from "react";
import "./SctionThree.css";

const SectionThree = () => {
  return (
    <section className=" section-3 mt-2 py-5 ">
      <div className="container-lg ">
        <div className="row mb-5">
          <div className="col-lg-6 ">
            <div className="add-img-container">
              <div className="add-img pb-5">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="logo"
                />
                <div className="add-show py-5 ">
                  <div className="add-show-img">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                      alt="poster"
                    />
                  </div>
                  <div className="add-show-title ps-2">
                    <div className="show-title text-white">Stranger Things</div>
                    <div className="show-dwnld">Downloading...</div>
                  </div>
                  <di className="animation ms-auto"></di>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center pt-5 ">
            <h1 className="text-white pt-5">
              Download your <br />
              shows to watch <br />
              offline.
            </h1>
            <p className="text-white">
              Save your facourites easily and always have <br />
              something to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;