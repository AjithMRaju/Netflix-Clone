import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ searchMovie, name }) => {
  console.log(searchMovie);
  return (
    <Container className="pt-5 mb-5 ">
      <h3 className="main-Title mb-3">{name}</h3>
      <Row>
        {searchMovie.map((items, index) => (
          <Fragment>
            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card items={items} />
            </Col>
          </Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
