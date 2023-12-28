import React, { useState,useEffect } from 'react';
import Header2 from '../Header2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl="http://localhost:5007/api/auth";


    const ContactForm = () => {

      let navigate = useNavigate();

      const initialValues = {
        name:'Ronnie',
        email:'ronnie@gmail.com',
        phone:"333222",
        message:"Hi I have an inquiry"
    }
      const [values,setValues] = useState(initialValues);

      const handleInputChange = (e) => {
          const {name,value} = e.target;
          setValues({
              ...values,
              [name]:value
          })
      }


      console.log("these are the values"+values);

      const checkout = () => {

        fetch(`${baseUrl}/Contactform`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)

        })
        .then(console.log("Success"));
    }

  



    return(
        <>
                    <Header2/>
        <div id="contactContainer">

            <span className="ContactHeader">Contact Cafelicious</span><br></br>
            <span className="ContactSubHeader">Contact Cafelicious Here</span>

            <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label for="fname" className='control-label'>Name</label>
                                <input className='form-control' id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="message" className='control-label'>Message</label>
                                <input className='form-control' id="message"
                                name="message" value={values.message} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Send
                        </button>
                    </div>


        </div>
        </>
    )
}

export default ContactForm