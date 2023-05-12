import React, {   useState } from "react";
import "./SignIn.css";
import Login from "../LoginSection/Login"

const SignIn = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const [emails,setEmail] = useState("");
  return (
    <section className="section_1">
      <div className="container-lg pt-5">
        <div className="header">
          <div className="logo">
            <img
              src="https://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_Netflix_Logo_Digital-Video-e1424532515143.png"
              alt="log"
              onClick={()=>{setShowLogin(false)}}
              style={{cursor:"pointer"}}
            />
          </div>
          <div className="header-buttons">
            <button
              className="custom-Button"
              onClick={() => setShowLogin(true)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {showLogin ? (
        <Login/>
      ) : (
        <div
          className="container  d-flex flex-column justify-content-center "
          style={{ color: "#fff" }}
        >
          <div className="signin-text text-center">
            <h1>Unlimited movies,TV shows and more.</h1>
            <p className="signin-p">Watch anywhere.Cancel anytime.</p>
            <p className="signin-p">
              Ready to watch ? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className=" col-lg-6">
              <input
                type="email"
                className="signin-input"
                placeholder="Enter email"
               
              />
            </div>
            <div className="  col-lg-3">
              <button className="getStart-btn " style={{ height: "50px" }}
              onClick={()=>setShowLogin(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container"></div>
    </section>
  );
};

export default SignIn;