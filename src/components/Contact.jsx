import React from 'react'
import Form from 'react-bootstrap/Form'
const Contact = () => {
  return (
    <div className='contact'>
      <Form>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>     
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group> 
        <Form.Group>
          <Form.Label className='label'>Message</Form.Label>
          
        </Form.Group>
      </Form>

    </div>
    
  )
}

export default Contact