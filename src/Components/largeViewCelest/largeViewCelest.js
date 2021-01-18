import React from "react"
import Projects from "../../projects.json"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import "./largeViewCelest.css"


class largeViewCelest extends React.Component{
  state = {
    projectArr : Projects
  }
  render(){
    return(
      <Container fluid="yes">
        <Row>
          <Col lg="8" className="pageView">
            <iframe className="demo" src={(this.state.projectArr[2].link)} alt="live demo of webpage"></iframe>
          </Col>
          <Col className="infoCol">
            <Row>
              <Card>
              <h1>Project Description</h1>
              <p>{this.state.projectArr[2].description}</p>
              </Card>
              <Card>
                <h1>Project Contributions</h1>
                <ul>
                  <li>My main work was on UI and UX for the app as well as the navbar and routing</li>
                  <li>Assisted in finding the right APIs for us to use</li>
                  <li>Helped in getting Auth0 integrated and running on the app</li>
                  <li>Connected the journal display to the backend mongoDB</li>
                </ul>
              </Card>
              <Card>
                <h1>Contributors</h1>
                <ul>
                  <li>Mark Brazee (github: https://github.com/MarkBrazee)</li>
                  <li>Madeline Cowell (github: https://github.com/MadelineCowell)</li>
                  <li>Devon Phillips (github: https://github.com/devonp702)</li>
                  <li>Andy Ives (github: https://github.com/andreaives)</li>
                  <li>Brendon Hart (github: https://github.com/hartbt)</li>
                </ul>
              </Card>
              <Card>
                <h1>Technologies Utilised</h1>
                <ul>
                  <li>Our UI for the site is built on React, with underlying Javascript</li>
                  <li>Used a combination of CSS and SASS for our styling, along with react-bootstrap</li>
                  <li>MongoDB backend for storing user profiles and journal entries</li>
                </ul>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default largeViewCelest