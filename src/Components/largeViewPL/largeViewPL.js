import React from "react"
import Projects from "../../projects.json"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import "./largeViewPL.css"


class largeViewPL extends React.Component{
  state = {
    projectArr : Projects
  }
  render(){
    return(
      <Container fluid="yes">
        <Row>
          <Col lg="8" className="pageView">
            <iframe className="demo" src={(this.state.projectArr[0].link)} alt="live demo of webpage"></iframe>
          </Col>
          <Col className="infoCol">
            <Row>
              <Card className="width">
              <h1>Project Description</h1>
              <p>{this.state.projectArr[0].description}</p>
              </Card>
              <Card className="width">
                <h1>Project Contributions</h1>
                <ul>
                  <li>My main work was on the search funtion (finding the API, Getting queries working, rendering results)</li>
                  <li>Worked on functionality of adding songs to your current playlist</li>
                  <li>Worked on functionality of getting song to play</li>
                  <li>Added the export function to the web app</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Contributors</h1>
                <ul>
                  <li>Nora Curio (github: https://github.com/noracurcio)</li>
                  <li>Madeline Cowell (github: https://github.com/MadelineCowell)</li>
                  <li>Devon Phillips (github: https://github.com/devonp702)</li>
                  <li>Ryan Whitherspoon (github: https://github.com/ryanwit)</li>
                  <li>Colby Trahan (github: https://github.com/ctrahan94)</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Technologies Utilised</h1>
                <ul>
                  <li>HTML5, Javascript, CSS is what we used to build the main layout and functionality of our site</li>
                  <li>Used the deezer REST api and ajax to make the requests</li>
                  <li>typeit.JS</li>
                </ul>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default largeViewPL