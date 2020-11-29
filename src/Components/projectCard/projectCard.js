import React from "react"
import "./projectCard.css"

function ProjectCard(props){
  return(
    <div className="card">
      <img src={props.screenshot} alt="screenshot of this project"></img>
      <div className="projectName">{props.name}</div>
      <div className="projectDesc">{props.description}</div>
      <a as="button" rel="noreferrer" className="linkButton btn btn-lg" target="_blank" href={props.githublink}>Link to Github Repository</a>
    </div>
  )
}

export default ProjectCard