import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {AiOutlineMail, AiFillGithub, AiFillYoutube} from 'react-icons/ai'
const Contact = () => {

  return (
    <div className='contact'>
       <div className='contact-child'> 
        <div className='icon'>
        <AiOutlineMail color='blue' size={30}/>
        </div>
        <a className='submit' href="mailto:eathandueno@gmail.com">
        <div className='google'>

          <span >M</span>
          <span className='red'>y</span>
          <span className='yellow'>G</span>
          <span className=''>m</span>
          <span className='yellow'>a</span>
          <span className='red'>i</span>
          <span>l</span>
        </div>

        </a>
      </div>
      <div className='contact-child'> 
        <div className='icon'>
          <AiFillGithub size={30}/>

        </div>
        <a className='submit github' href="https://github.com/eathandueno">My Github</a>
      </div>
      <div className='contact-child'> 
        <div className='icon'>
          <AiFillYoutube  size={30}/>

        </div>
      
        <a className='submit red-background' href="https://github.com/eathandueno">My Youtube</a>
      </div>

    </div>
    
  )
}

export default Contact