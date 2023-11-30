import React from 'react'

const Contact = () => {
  return (
    <div className='contactSection'>
      <input type="text" placeholder='Enter Your Name' />
      <input type="text" placeholder='Enter Your Email' />
      <input type="text" placeholder='Enter Your Mo No' />
      <input type="textarea" placeholder='Send Your Feadback'  />
      <button>Submit</button>
    </div>
  )
}

export default Contact
