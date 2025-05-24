import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataContext';
import "./Info.css";

function Info() {
  const { currentFormData, setCurrentFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentFormData);
    navigate('/barber');
  };

  return (
    <div className="container">
      <button className="infoBack-btn">
        <img
          src={`${process.env.PUBLIC_URL}/back.png`}
          alt="Back"
          className="infoBack-img"
          onClick={() => navigate("/home")}
        />
      </button>

      <div className="infoTitle">Enter your Information</div>

      <div className="info-container">
        <form onSubmit={handleSubmit} className="info-form">
          <div className="form-row">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={currentFormData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={currentFormData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Phone No.:</label>
            <input
              type="tel"
              name="phone"
              value={currentFormData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Email Add.:</label>
            <input
              type="email"
              name="email"
              value={currentFormData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="next-btn">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Info;
