import React from 'react'
import ContactForm from '../components/ContactPage/ContactForm'

const Contact = () => {
  return (
    <div className='container mx-auto h-full flex flex-1 flex-col justify-center items-center  '>

    <h1 className='font-bold'>Welcome to Contact Page</h1>
     <div><ContactForm/></div> 
    </div>
  
  )
}

export default Contact