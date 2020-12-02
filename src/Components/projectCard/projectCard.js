import React from "react"
import "./projectCard.css"
import Button from "react-bootstrap/Button"

function ProjectCard(props){
  return(
    <div className="card">
      <img className="sShot" src={props.screenshot} alt="screenshot of this project"></img>
      <div className="projectName">{props.name}</div>
      <div className="projectDesc">{props.description}</div>
      <Button rel="noreferrer" className="linkButton" target="_blank" href={props.githublink}>Link to Github Repository</Button>
    </div>
  )
}

export default ProjectCard