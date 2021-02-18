import React from "react"
import "./landingCard.css"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import PicforPortfolio from "../../public/PicforPortfolio.jpg"
import Col from "react-bootstrap/Col"

function landingCard(){
  return(
    <Container>
    <Jumbotron className="landing" style={{ backgroundColor: "rgb(78, 67, 67, .85)", margin: "12% auto" }}>
      <Row>
        <Col className="col-4">
          <img className="picture" src={PicforPortfolio}></img>
        </Col>
        <Col className="col-8">
          <div className="descriptionText">Hello there! My name is Travis Cook and I am a recent graduate of the University of Denver's full-stack web development bootcamp, where we learned to make web based applications in just twelve weeks! Click the button below to take a look at some of my work.</div>
        </Col>
      </Row>
      <Row className="btnRow">
        <Button style={{fontSize: "25px"}} href="/work"className="workButton" title="VIEW MY PROJECTS">VIEW MY PROJECTS</Button>
      </Row>
    </Jumbotron>
    </Container>
  )
}

export default landingCard