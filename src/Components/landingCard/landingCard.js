import React from "react"
import "./landingCard.css"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function landingCard(){
  return(
    <Container>
    <Jumbotron className="landing" style={{ backgroundColor: "rgb(78, 67, 67, .85)", margin: "12% auto" }}>
      <div className="descriptionText">After switching careers from production to web development, I still have that desire to hand-craft the perfect product. Just because it is coding, does not mean it doesn't take craftsmanship to build. With tools like HTML, CSS, JS, React and many others at my disposal I can build anything that I set my mind to.</div>
      <Button style={{fontSize: "25px"}} href="/work"className="workButton" title="VIEW MY PROJECTS">VIEW MY PROJECTS</Button>
    </Jumbotron>
    </Container>
  )
}

export default landingCard