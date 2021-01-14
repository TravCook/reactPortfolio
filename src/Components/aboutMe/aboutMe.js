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
    <Card className="centerCard" style={{ width: '80%' }}>
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
  </Col>
  <Col className="abtCol">
    <Card className="centerCard" style={{ width: '80%' }}>
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
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col className="abtCol">
    <Card className="centerCard" style={{ width: '80%' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '45px'}}>
          Who am I?
        </Card.Title>
        <Card.Text className="aboutMe">
       <h3>What I enjoy coding</h3>
         <ul>
           <li>Back-end functionality</li>
           <li>React front-ends</li>
           <li>Any problem that needs solving, it's like a puzzle to me!</li>
         </ul>
       <h3>My Free-Time includes</h3>
         <ul>
           <li>Family time, and lots of it</li>
           <li>Side-Projects
             <ul>
               <li>Social Media Landing Page Generator</li>
               <li>Text based adventure webApp</li>
             </ul>
           </li>
           <li>SoloLearn
             <ul>
               <li>C++</li>
               <li>C#</li>
               <li>React</li>
             </ul>
           </li>
         </ul>
       <h3>What I Listen to while I Code</h3>
       <ul>
         <li>Run the Jewels</li>
         <li>Heavy Metal</li>
         <li>NPR</li>
       </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  )
}
export default aboutMe