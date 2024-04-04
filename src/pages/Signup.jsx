import React from 'react';
import "../CSS/Signup.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function Signup() {

    const navigate = useNavigate();
    


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setPasswordError("Passwords do not match");
          return;
      }
        try {
          const response = await axios.post('http://localhost:3000/api/signup', formData);
          console.log(response.data);
          navigate('/Login')
          // Optionally, redirect user to a success page or perform other actions
      } catch (error) {
          console.error('Error signing up:', error);
      }
        
    };

    return (
    <div className="divsignup">
  <div className="divsignup-2">
    <div className="divsignup-3">
      <div className="divsignup-4">
        <div className="divsignup-5">
          <div className="divsignup-6">Sign Up</div>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="divsignup-8"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="divsignup-8"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="divsignup-8"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="divsignup-8"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="divsignup-8"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
            {passwordError && <p>{passwordError}</p>}
          <button type="submit" className="divsignup-10" onclick="validateForm()">
            Sign Up
          </button>
          </form>
          <a className="divsignup-11">Already have an account ?</a>
          <a
            className="divsignup-12" onClick={()=>navigate("/Login")}>
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
