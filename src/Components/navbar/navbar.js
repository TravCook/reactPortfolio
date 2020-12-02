import React from "react"
import "./navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Navigation(){
  return (
    <Container fluid="true">
    <Navbar>
      <Row>
        <Col className="dropdown">
          <DropdownButton className="ddButton" id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="/work">Projects</Dropdown.Item>
          <Dropdown.Item href="/aboutme">About Me</Dropdown.Item>
          <Dropdown.Item href="/contact">Contact Me</Dropdown.Item>
          </DropdownButton> 
        </Col>
        <Col className="mediaButtons">
          <Button rel="noreferrer" href="https://github.com/travcook" target="_blank" className ="fa fa-github"></Button>
          <Button rel="noreferrer" href="https://www.linkedin.com/in/travis-cook93/" target="_blank"className ="fa fa-linkedin"></Button>
          <Button rel="noreferrer" href="https://twitter.com/spillthe_TCook" target="_blank"className ="fa fa-twitter"></Button>
        </Col>
        <Col className="name">
          Travis M. Cook
        </Col>
      </Row>
    </Navbar >
    </Container>
  )
}
export default Navigation