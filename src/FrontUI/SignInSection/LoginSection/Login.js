import React, {  useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../../../FibaseConfig/Config"


const Login = () => {

  console.log()
 // useState Variables
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



  // LOGIN FUNCTION
  const register = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  // SIGIN IN FUNCTION
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };




  return (
    <div className="container-lg">
      <Row className="d-flex justify-content-center align-items-center">
        <Col
          className="d-flex flex-column p-5 ms-0 "
          md={{ span: 4, offset: 3 }}
          style={{ backgroundColor: "rgb(1 1 1 / 46%)" }}
        >
          <h3 className="pb-3 text-white">Sign In</h3>
          <form>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Emil or Phone number"
              className="heights mb-2 input__bcg"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="heights mb-2 input__bcg"
            />
            <button
              type="submit"
              className="getStart-btn heights mt-3"
              onClick={register}
            >
              Login In
            </button>
            <div className="options d-flex align-items-center mt-2 ">
              <input type="checkbox" />
              <p className="mb-0 b3b3b3 ">Remember me</p>
              <p className="ms-auto mb-0 b3b3b3">Need help?</p>
            </div>
            <div className="infos mt-5">
              <p className="b3b3b3">
                New to Netflix?{" "}
                <span className="text-white signUp" onClick={signUp}>
                  sign up now.
                </span>
              </p>
              <p className="b3b3b3">
                This page is protected by Google reCAPTCHA to ensure tou're nor
                a bot.
              </p>
              <h6 style={{ color: "blue" }}>Learn more.</h6>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;