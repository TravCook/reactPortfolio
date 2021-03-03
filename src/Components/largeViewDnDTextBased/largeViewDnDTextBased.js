import React from "react"
import Projects from "../../projects.json"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import "./largeViewDnDTextBased.css"


class largeViewDnD extends React.Component{
  state = {
    projectArr : Projects
  }
  render(){
    return(
      <Container fluid="yes">
        <Row>
          <Col lg="8" className="pageView">
            <iframe className="demo" src={(this.state.projectArr[1].link)} alt="live demo of webpage"></iframe>
          </Col>
          <Col className="infoCol">
            <Row>
              <Card className="width">
              <h1>Project Description</h1>
              <p>{this.state.projectArr[1].description}</p>
              </Card>
              <Card className="width">
                <h1>Project Contributions</h1>
                <ul>
                  <li>The UI/UX for this project is currently being built by myself</li>
                  <li>Currently have logic complete for dice rolling when creating a character</li>
                  <li>Login and Sign up authentication</li>
                  <li>Navbar built by me as well</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Contributors</h1>
                <ul>
                  <li>Travis Cook (github: https://github.com/travCook)</li>
                  <li>Donald Cook: Art, Design, Background</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Technologies Utilised</h1>
                <ul>
                  <li>The UI for the site is built on React, with underlying Javascript</li>
                  <li>Used CSS for the styling, along with react-bootstrap</li>
                  <li>MongoDB backend for storing user profiles and player's characters</li>
                  <li>App is hosted through AWS</li>
                </ul>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default largeViewDnD