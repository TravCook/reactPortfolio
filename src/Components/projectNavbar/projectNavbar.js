import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import "./projectNavbar.css"

function projectNavbar(){
  return(
    <Container fluid="true">
      <Navbar className="projectNav">
        <Col lg="3" className="leftCol">
          <Button className="projButton" href="/work">Back to my Projects</Button>
        </Col>
        <Col>
          <Button href="/work/plbuilder">Playlist Builder</Button>
        </Col>
        <Col>
          <Button href="/work/celestnav">Celestial Navigator</Button>
        </Col>
        <Col>
          <Button href="/work/campify">Campify</Button>
        </Col>
        <Col>
          <Button href="/work/NoteTaker">Note Taker</Button>
        </Col>
        <Col lg="3"></Col>
      </Navbar>
    </Container>
  )
}

export default projectNavbar