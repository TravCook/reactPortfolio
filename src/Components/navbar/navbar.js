import React from "react"
import "./navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Brand from "react-bootstrap/NavbarBrand"
import PicforPortfolio from "../../public/PicforPortfolio.jpg"



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
          <Button rel="noreferrer" href="https://github.com/travcook" target="_blank" className =" fa fa-github"><span class="tooltiptext">My Github</span></Button>
          <Button rel="noreferrer" href="https://www.linkedin.com/in/travis-cook93/" target="_blank"className =" fa fa-linkedin"><span class="tooltiptext">My Linkedin</span></Button>
          <Button rel="noreferrer" href="https://mail.google.com/?view=cm&fs=1&to=travismcook93@gmail.com" target="_blank"className =" fa fa-at"><span class="tooltiptext">Email Me</span></Button>
        </Col>
        <Col className="name">
          <a href="/">Travis M. Cook</a>
        </Col>
      </Row>
    </Navbar >
    </Container>
  )
}
export default Navigation