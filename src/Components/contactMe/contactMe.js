import React from "react"
import "./contactMe.css"

function contactMe(){
  return(
    <div class="jumbotron">
      <h1 class="display-4 Contactheader">Contact Me!</h1>
      <p class="lead">The button below will open up a blank email addressed to me, feel free to use it at any time as I usually check my emails compusively.</p>
      <hr class="my-4" />
      <div class="lead contactHead">Please contact me if:</div>
      <div class="lead">You have a project you would like to work with me on</div>
      <div class="lead">You wish to explore further employment from me</div>
      <div class="lead">You're a former classmate who misses me!</div>
      <div class="lead">You just really want/need someone to talk to right now</div>
      <a as="button" class="btn btn-primary btn-lg contactBtn" target="_blank" rel="noreferrer" href="https://mail.google.com/?view=cm&fs=1&to=travismcook93@gmail.com" role="button">Email ME!</a>
    </div>
  )
}

export default contactMe