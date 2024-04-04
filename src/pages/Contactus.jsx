import React from 'react';
import "../CSS/Contactus.css";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import axios from 'axios';
export default function Contactus() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }

    try {
      // Send form data to server
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      console.log(response.data);
      navigate('/')
      // Handle success, show a success message or redirect the user
    } catch (error) {
      console.error(error);
      // Handle error, show an error message to the user
    }
  };
  
    return (
        <div className="divcontact">
        <div className="divcontact-2">
          <div className="divcontact-3">
            <div className="divcontact-4">CONTACT</div>
            <div className="divcontact-5">
              <div className="divcontact-6">
                <div className="columncontact">
                  <div className="divcontact-7">
                    <div className="divcontact-8">Contact Information</div>
                    <div className="divcontact-9">
                      <div className="divcontact-10">
                        <div className="divcontact-11">Address</div>
                        <div className="divcontact-12">
                          123 Main Street Cityville, State 56789 Countryland
                        </div>
                        <div className="divcontact-13">Lets Talk</div>
                        <div className="divcontact-14">asdffg@rku.ac.in</div>
                        <div className="divcontact-15">General Support</div>
                        <div className="divcontact-16">+ 91 96856 95235</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-formcontact">
                  <h2>Contact Us</h2>
                  <form onSubmit={handleSubmit} method="post" >
                    <div className="form-groupcontact">
                      <label htmlfor="name">Your Name:</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-groupcontact">
                      <label htmlfor="email">Your Email:</label>
                      <input type="email" id="email" name="email"  value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-groupcontact">
                      <label htmlfor="phone">Phone Number:</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-groupcontact">
                      <label htmlfor="subject">Subject:</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="form-groupcontact">
                      <label htmlfor="message">Your Message:</label>
                      <textarea id="message" name="message"   value={formData.message} onChange={handleChange} />
                    </div>
                    <div className="form-groupcontact">
                      <button type="submit" >Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}

