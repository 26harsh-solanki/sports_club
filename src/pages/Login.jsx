import React, { useState } from 'react';
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(6789);
            await axios.post('http://localhost:3000/api/login', formData);

            navigate('/'); // Redirect to home page upon successful login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    return (
        <div className="divlogin">
            <div className="divlogin-2">
                <div className="divlogin-3">
                    <div className="divlogin-4">
                        <div className="divlogin-5">
                            <div className="divlogin-6">Log In</div>
                        
                            <input
                                type="email"
                                className="divlogin-8"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                className="divlogin-8"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="divlogin-10" onClick={handleSubmit}>
                                Log In
                            </button>
                            <a className="divlogin-11">Forget Password?</a>
                            <a className="divlogin-12" onClick={() => navigate("/Signup")}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
