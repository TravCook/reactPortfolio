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
        <Card.Title style={{fontSize: '45px'}}>
          Languages
        </Card.Title>
        <Card.Text>
        <h2 className="listHeader">Front End</h2>
         <div className="list">
           <div className = "item">HTML
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
           </div>
           <div className = "item">CSS
             <span className="fa fa-star "></span>
             <span className="fa fa-star "></span>
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
       <h2 className="listHeader">Back End</h2>
         <div className="list">
           <div className = "item">JavaScript
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
           </div>
           <div className = "item">SQL
             <span className="fa fa-star "></span>
             <span className="fa fa-star "></span>
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
           <div className = "item">NoSql
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
  </Col>
  <Col className="abtCol">
    <Card className="centerCard technologies" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '45px'}}>
          Technologies
        </Card.Title>
        <Card.Text>
          <div className="technologies">
            <div className="techItem">Git/Github</div>
            <div className="techItem">Heroku</div>
            <div className="techItem">Parralax.js</div>
            <div className="techItem">Type.it JS</div>
            <div className="techItem">RIDB API</div>
            <div className="techItem">Deezer API</div>
            <div className="techItem">Postman</div>
            <div className="techItem">Google Geolocation API</div>
            <div className="techItem">VSCode</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col className="abtCol">
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>Hard Skills</Card.Title>
        <Card.Text>
          <ul>
            <li>Full-stack Web Development</li>
            <li>RESTful Api Integration</li>
            <li>Database Management</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>Soft Skills</Card.Title>
        <Card.Text>
          <ul>
            <li>Agile Worker</li>
            <li>Attention to detail</li>
            <li>Fast Learner</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>Experience / Education</Card.Title>
          <Card.Text>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Card.Text>
      </Card.Body>
    </Card>
    <Card className ="threeStackCard">
      <Card.Body>
        <Card.Title style={{fontSize: '30px'}}>Personal Interests</Card.Title>
          <Card.Text>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  )
}
export default aboutMe