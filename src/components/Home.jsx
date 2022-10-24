import React from 'react'
import profilePic from '../static/githubprofilepic.jpg'
const Home = () => {
  return (
    <div>
      <h1>Eathan Dueno</h1>
      <section className='main'>
        <div>
        <h4><strong>About me</strong></h4>
        <p>Hello! Welcome to my personal portfolio website. The more I grow as a developer I plan on implementing my front-end skills here to keep track of growth. I am an Air Force veteran and college student at Boise State University</p> 

        </div>
        <img className='profile' src={profilePic} alt='Profile pic' ></img>
      </section>
      <section className='projects'>
        <h4><strong>Projects</strong></h4>
        <ul>
          <li>Crypto Trade Simulator  
            <ul>
              <li>Full Stack Flask Implementation with MySQL database</li>
              <li>Utilized Kraken API to create custom  crypto portfolios</li>
              <li>Leverage OOP and Database Query to establish conversations for user experience</li>
            </ul>
          </li>
          <li>
              To Do App
              <ul>
                <li>Basic CRUD app</li>
                <li>Bcrypt Implementation for user security</li>
              </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home