import React from "react"
import "./aboutMe.css"

function aboutMe(){
  return(
    <>
      <div className="card languages">
        <h1 className="header">Languages</h1>
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
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
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
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <div className = "item">Node.js
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className = "item">Express
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
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
      </div>
      <div className="card technologies">
      <h1 className="header">Technologies</h1>
        <div className="list">
          <div className="techItem">Git/Github</div>
          <div className="techItem">Heroku</div>
          <div className="techItem">Parralax.js</div>
          <div className="techItem">Type.it JS</div>
          <div className="techItem">RIDB API</div>
          <div className="techItem">Deezer API</div>
          <div className="techItem">Postman</div>
          <div className="techItem">Google Geolocation API</div>
        </div>
      </div>
      <div className="card asAPerson">
      <h1 className="header">Who is Travis Cook?</h1>
        <h2>What I enjoy coding</h2>
          <ul>
            <li>Back-end functionality</li>
            <li>React front-ends</li>
            <li>Any problem that needs solving, it's like a puzzle to me!</li>
          </ul>
        <h2>My Free-Time includes</h2>
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
        <h2>What I Listen to while I Code</h2>
        <ul>
          <li>Run the Jewels</li>
          <li>Heavy Metal</li>
          <li>NPR</li>
        </ul>
      </div>
    </>
  )
}
export default aboutMe