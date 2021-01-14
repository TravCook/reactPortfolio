import React from "react"
import "./projectCard.css"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"

function ProjectCard(props){
  return(
    <div className="card">
      <iframe className="sShot" src={props.link} alt="live view of current web page"></iframe>
      <h1 className="projectName">{props.name}</h1>
      <div>
      <Button rel="noreferrer" className="linkButton Button" target="_blank" href={props.githublink}>Link to Github Repository</Button>
      <Button rel="noreferrer" className="detailButton Button" href={props.url}> Take a closer look</Button>
      </div>
    </div>
  )
}

export default ProjectCard