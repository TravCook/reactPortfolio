import React from "react"
import Projects from "../../projects.json"
import ProjectCard from "../projectCard/projectCard.js"
import "./projectGrid.css"

class ProjectGrid extends React.Component{
  state = {
    projectArr : Projects
  }
  render(){
    return(
      <div className="projectsGrid container-fluid">
        {this.state.projectArr.map(project =>  (<ProjectCard key={project.id} {...project}  /> ))}
      </div>
    )
  }
}

export default ProjectGrid