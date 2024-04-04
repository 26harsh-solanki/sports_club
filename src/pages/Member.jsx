import React, { useState } from 'react';
import "../CSS/Member.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Member() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    emergencyContact: '',
    relationship: '',
    emergencyPhone: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    for (const key in formData) {
      if (!formData[key]) {
        console.error(`Field "${key}" is empty`);
        return; // Stop form submission if any field is empty
      }
    }
    try {
      const response = await axios.post(' http://localhost:3000/api/membership', formData);
      console.log(response.data);
      navigate('/')
      // Optionally, you can handle success message or redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error
    }
    
  };

  return (
    <div className="container">
      <h2>Sports Club Membership Form</h2>
      <form onSubmit={handleSubmit} id="membership-form" method="post">
        <div className="section">
          <div className="section-title">Personal Information</div>
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input className='input1' type="text" id="first-name" name="firstName" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input className='input1' type="text" id="last-name" name="lastName" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input className='input1' type="text" id="phone" name="phone" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input className='input1' type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input className='input1' type="date" id="dob" name="dob" onChange={handleChange} required />
          </div>
          </div>
            <label>Gender:</label>
            <input className='input1' type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
            <label htmlFor="male">Male</label>
            <input className='input1' type="radio" id="female" name="gender" value="female" onChange={handleChange} required />
            <label htmlFor="female">Female</label>

        <div className="section">
          <div className="section-title">Emergency Contact Information</div>
          <div className="form-group">
            <label htmlFor="emergency-contact">Emergency Contact Name:</label>
            <input className='input1' type="text" id="emergency-contact" name="emergencyContact" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship:</label>
            <input className='input1' type="text" id="relationship" name="relationship" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="emergency-phone">Emergency Contact Number:</label>
            <input className='input1' type="text" id="emergency-phone" name="emergencyPhone" onChange={handleChange} required />
          </div>
        </div>
        
        <div className="form-group">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
      <div id="confirmation-message"></div>
    </div>
  );
}
