import React from "react";
import ContactUsForm from "./ConatctUsForm";

const ContactForm = () => {
  return (
    <div className='container mx-auto h-full flex flex-1 flex-col justify-center items-center  '>
    
    <h1 className='font-bold'>ContactUs</h1>
     <p>Got a issue?Want to send feedback?Let us know </p> 
     <div>
        <ContactUsForm />
     </div>
    </div>
  );
};

export default ContactForm;