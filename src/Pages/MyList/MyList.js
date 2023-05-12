import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FibaseConfig/Config";
import { Row, Col, Container } from "react-bootstrap";
import RowPost from "../Row/RowPost";
import Requests from "../../Helpres/Requests";
import Card from "../../Pages/Card/Card";
import "./MyList.css";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../app/Features/UserSlice";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const userCollectionRef = collection(db, "cenima");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setMyList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, [userCollectionRef]);

  return (
    <div className="mylist-container pt-5">
      <NavBar />
      <Container className="mt-5">
        <h3 className="mylistTitle mb-4">My List</h3>
        <Row>
          {myList ? (
            myList.map((movie) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card items={movie?.movies} id={movie.id} remove />
              </Col>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </Container>

      <div className="pb-5">
        <RowPost
          title={"Suggested For You"}
          fetch_Url={Requests.fetchHorrorMovies}
        />
      </div>
    </div>
  );
};

export default MyList;
