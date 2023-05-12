import { auth } from "../../FibaseConfig/Config";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/Features/UserSlice";
import { signOut } from "firebase/auth";
import { useState } from "react";
import Footer from "../../FrontUI/SignInSection/Section5/SectionFive";
import NavBar from "../../Components/NavBar/NavBar";
import "./Profile.css";


const Profie = () => {
  const user = useSelector(selectUser);

  const [plans, setPlans] = useState("");
  const [basicBtn,setBasicBtn]=useState(false);
  const [standerdBtn,setStanderd]=useState(false);
  const [primiumBtn,setPrimiumBtn]=useState(false);


  const handlePlas = (type) => {
    setPlans(`(Current Plan :${type})`);    
    return plans;
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen_body">
        <h1 className="text-white">Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="cover"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans {plans}</h3>
              <h5>Renewal Date :12/12/2024</h5>
              <div className="plans_wraper mt-4 px-4">
                <div className="plans_container d-flex">
                  <span className="me-auto fw-bold resolutions">
                    Netflix Standerd
                    <p className="resolutions">1080p</p>
                  </span>
                  {standerdBtn ? (
                    <button className="Current_plansBtn">
                      Current Package
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handlePlas("Standerd");
                        setStanderd(true)
                      }}
                      className="subcribe_btn"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
                <div className="plans_container d-flex  ">
                  <span className="me-auto fw-bold resolutions">
                    Netflix Basic
                    <p className="resolutions">480p</p>
                  </span>
                  {basicBtn ? (
                    <button className="Current_plansBtn">
                      Current Package
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handlePlas("Basic");
                        setBasicBtn(true);
                      }}
                      className="subcribe_btn"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
                <div className="plans_container d-flex  ">
                  <span className="me-auto fw-bold resolutions">
                    Netflix Primium
                    <p className="resolutions">4K+HDR</p>
                  </span>
                  {primiumBtn ? (
                    <button className="Current_plansBtn">
                      Current Package
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handlePlas("Primium");
                        setPrimiumBtn(true);
                      }}
                      className="subcribe_btn"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </div>
              <button className="profileScreen-signOut mb-5" onClick={logout}>
                LouOut
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profie;
