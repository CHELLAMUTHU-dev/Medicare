import React, { useState,useCallback } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import "./RegisterPopup.css";
import {toast} from 'react-toastify';
const RegisterPopup = ({ open, setOpen }) => {
  // State to manage form data can be added here if needed
  const url = 'https://medicare-ttk1.onrender.com'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const submitForm = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url+'/api/apply/appointment', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      
      const data = await response.data;
      toast.success('Appointment registered successfully!');
      setOpen(false); // Close the popup on successful submission
    } catch (error) {
      toast.error('Failed to register appointment. Please try again.');
    }
  }, [formData]);



  return (
    <Popup open={open} onClose={() => setOpen(false)} className="popup-content">
      <div className="popup">
        <button className="close-button" onClick={() => setOpen(false)}>
          x
        </button>
        <div className="popup-items">
          <h2>Register for Appointment</h2>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" required 
              value={formData.date}
              onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" required 
              value={formData.time}
              onChange={handleInputChange}/>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Popup>
  );
};
export default RegisterPopup;
