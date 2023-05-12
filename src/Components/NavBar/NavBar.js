import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../../Helpres/Requests";
import { Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "../../Helpres/Axios";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [genrs, setGenrs] = useState([]);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    const getGere = async () => {
      const response = await axios.get(
        `/genre/movie/list?api_key=${API_KEY}&language=malayalam`
      );
      setGenrs(response.data.genres);
      console.log(response.data.genres);
    };
    getGere();
  }, []);

  return (
    <div className="container ">
    <Navbar
      bg="none"
      expand="lg"
      fixed="top"
      className={`${show && "__navbar"} px-5`}
    >
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="logo">
              <img
                src="https://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_Netflix_Logo_Digital-Video-e1424532515143.png"
                alt="log"
                style={{ cursor: "pointer" }}
              />
            </div>
          </Link>


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="myList">
              My List
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Genres</Dropdown.Toggle>
              <Dropdown.Menu >
                {genrs ? (
                  genrs.map((item) => (
                    <Dropdown.Item key={item.id}>
                      <Link to={`/Categories/${item.id}/${item.name}`} >
                      
                      {item.name}
                      </Link>
                    </Dropdown.Item>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </Dropdown.Menu>
            </Dropdown>

            
          </Nav>

          <Link to="/Search" className="me-2">
            <span className="text-white">
              <FaSearch />
            </span>
          </Link>

          <Link to={"/profile"}>
            <div className="__avatar ">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                alt="avatar"
              />
            </div>
          </Link>
          
        </Navbar.Collapse>
    </Navbar>
      </div>
  );
};

export default NavBar;
