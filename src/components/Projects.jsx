import React from 'react'
import crypto from '../static/cryptoDisplay.mp4'
import todo from '../static/todoApp.mp4'
const Projects = () => {
  return (
    <div className='project-container'>
      <div className='project-individual'>
        <h5>Crypto Trade Simulator</h5>
        <video width={250} height={250} controls preload='none'>
          <source src={crypto} type='video/mp4' ></source>
          Your browser does not support HTML5 videos.
        </video>
        <a href='https://github.com/eathandueno/CryptoSocialNetwork'>Github Repository</a>
      </div>
      <div className='project-individual'>
        <h5>To Do App</h5>
        <video width={250} height={250} controls preload='none'>
          <source src={todo} type='video/mp4'></source>
        </video>
        <a href='https://github.com/eathandueno/FlaskToDoApp' >Github to ToDo App</a>
      </div>
    </div>
  )
}

export default Projects