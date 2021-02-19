import React from "react"
import "./aboutMe.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function aboutMe(){
  return(
  <Row className="container-fluid">
  <Col className="abtCol">
    <Card className="centerCard languages" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Text>
        <h4 className="listHeader">Front End Languages</h4>
         <div className="list">
           <div className = "item">HTML
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
           </div>
           <div className = "item">CSS
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
           </div>
           <div className = "item">React
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
           </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="centerCard languages" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Text>
          <h4 className="listHeader">Back End Languages</h4>
          <div className="list">
            <div className = "item">noSQL/Mongo
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">Node.js
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">Express
              <span className="fa fa-star "></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">SQL
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="centerCard languages" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Text>
        <h4 className="listHeader">Programming Languages</h4>
          <div className="list">
            <div className = "item">JavaScript
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">Python
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">C++
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">C#
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col className="abtCol">
    <Card className="centerCard technologies" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Title>
          <h3>Proficiencies</h3>
        </Card.Title>
      </Card.Body>
    </Card>
    <Card className="centerCard techCard" style={{ width: '80%' }}>
      <Card.Text>
        <h4>Deployment/Hosting</h4>
            <ul>
              <li>Heroku</li>
              <li>AWS</li>
            </ul>
      </Card.Text>
    </Card>
    <Card className="centerCard techCard" style={{ width: '80%' }}>
      <Card.Text>
        <h4>Workflow/Version Control</h4>
            <ul>
              <li>Github</li>
              <li>Trello</li>
              <li>VSCode</li>
            </ul>
      </Card.Text>
    </Card>
    <Card className="centerCard techCard" style={{ width: '80%' }}>
      <Card.Text>
        <h4>APIs/Integration</h4>
            <ul>
              <li>Google Geolocation API</li>
              <li>RIDB API</li>
              <li>Deezer API</li>
            </ul>
      </Card.Text>
    </Card>
    <Card className="centerCard techCard" style={{ width: '80%' }}>
      <Card.Text>
        <h4>Various JS libraries/Technologies</h4>
            <ul>
              <li>Type.it JS</li>
              <li>Parralax.js</li>
              <li>Full Calandar JS</li>
            </ul>
      </Card.Text>
    </Card>
    <Card className="centerCard techCard" style={{ width: '80%' }}>
      <Card.Text>
        <h4>Industry Practices</h4>
          <ul>
            <li>Responsive Design</li>
            <li>Testing/Multi-browser development</li>
            <li>Search Engine Optimization</li>
          </ul>
      </Card.Text>
    </Card>
  </Col>
  <Col className="abtCol">
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title><h4>Hard Skills</h4></Card.Title>
        <Card.Text>
          
            <p className="splitCardItem">Full-stack Web Development</p>
            <p className="splitCardItem">RESTful Api Integration</p>
            <p className="splitCardItem">Database Management</p>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title><h4>Soft Skills</h4></Card.Title>
        <Card.Text>
          
            <p className="splitCardItem">Agile Worker</p>
            <p className="splitCardItem">Attention to detail</p>
            <p className="splitCardItem">Fast Learner</p>
          
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title><h4>Experience/Education</h4></Card.Title>
          <Card.Text>
            
              <p className="splitCardItem">University of Denver Bootcamp</p>
              <p className="splitCardItem">Multiple projects from school</p>
              <p className="splitCardItem">Learning various new languages on Sololearn</p>
            
          </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title><h4>Personal Interests</h4></Card.Title>
          <Card.Text>
            
              <p className="splitCardItem">Sports (NHL, MLB, Premier League)</p>
              <p className="splitCardItem">Tabletop Gaming</p>
              <p className="splitCardItem">Video Game Speedrunning</p>
            
          </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  )
}
export default aboutMe