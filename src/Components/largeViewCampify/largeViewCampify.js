import React from "react"
import Projects from "../../projects.json"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import "./largeViewCampify.css"


class largeViewCampify extends React.Component{
  state = {
    projectArr : Projects
  }
  render(){
    return(
      <Container fluid="yes">
        <Row>
          <Col lg="8" className="pageView">
            <iframe className="demo" src={(this.state.projectArr[3].link)} alt="live demo of webpage"></iframe>
          </Col>
          <Col className="infoCol">
            <Row>
              <Card className="width">
              <h1>Project Description</h1>
              <p>{this.state.projectArr[3].description}</p>
              </Card>
              <Card className="width">
                <h1>Project Contributions</h1>
                <ul>
                  <li>My main work was on the search funtion (finding the API, Getting queries working, rendering results)</li>
                  <li>Contributed to the functionality of the login system</li>
                  <li>Integrated the calendar.io technology</li>
                  <li>Helped finalize the system for pinning locations to your profile</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Contributors</h1>
                <ul>
                  <li>Katie Anillionis (github: https://github.com/kanilionis)</li>
                  <li>Andrea Ives (github: https://github.com/andreaives)</li>
                  <li>Johnathan Letourneau (github: https://github.com/ophza)</li>
                </ul>
              </Card>
              <Card className="width">
                <h1>Technologies Utilised</h1>
                <ul>
                  <li>We used a combination of HTML5, handlebars, and Javascript to render the main layout of this app.</li>
                  <li>Google geolocation API is used on search to find facilities near the user</li>
                  <li>Calandar.io</li>
                  <li>RIDB API was used for search query data</li>
                  <li>mySQL for database management</li>
                  <li>Hosted on Heroku</li>
                </ul>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default largeViewCampify