import React, { useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { API_KEY } from "../../Helpres/Requests";
import { FaSearch } from "react-icons/fa";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../FrontUI/SignInSection/Section5/SectionFive";
import Cards from "../Cards/Cards";
import axios from "../../Helpres/Axios";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [infom, setInfom] = useState("");

  const getMovie = async (e) => {
    e.preventDefault();
    console.log(query + "searching...");
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length > 0) {
      setSearchMovie(response.data.results);
      console.log(response.data.results);
    } else {
      setInfom("Enterd Movie Is Unavailable...!");
    }
  };

  return (
    <div className="mb-5">
      <NavBar />

      <Container className="pt-5 pb-5">
        <Form className="d-flex mt-5">
          <FormControl
            type="search"
            placeholder="Search For Movies And Shows"
            aria-label="search"
            className="me-2"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button onClick={getMovie} type="submit">
            <FaSearch />
          </Button>
        </Form>
      </Container>

      {searchMovie.length >= 1 ? (
        <Cards searchMovie={searchMovie} />
      ) : (
        <h2 className="text-white text-center pb-3">{infom}</h2>
      )}

      <Footer />
    </div>
  );
};

export default Search;
