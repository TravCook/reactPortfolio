import React from "react"
import "./landingCard.css"

function landingCard(){
  return(

      <div className="container">
        <h1 className="name">Travis M. Cook</h1>
        <div className="descriptionText">After switching careers from production to web development, I still have that desire to hand-craft the perfect product. Just because it is coding, does not mean it doesn't take craftsmanship to build. With tools like HTML, CSS, JS, React and many others at my disposal I can build anything that I set my mind to.</div>
        <a as="button" href="/work"className="workButton btn ">VIEW MY WORK</a>
      </div>

  )
}

export default landingCard