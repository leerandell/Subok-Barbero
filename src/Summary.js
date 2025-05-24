import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';
import { useNavigate } from 'react-router-dom';
import "./Summary.css";

const Summary = () => {
  const { appointments } = useContext(FormDataContext);
  const navigate = useNavigate();

  const latest = appointments[appointments.length - 1];

  const handleBookingClick = () => {
    navigate("/home");
  };

  if (!latest) {
    return (
      <div className="container">
        <div className="summ-container">
          <h2>No appointment found</h2>
          <button className="appointBut" onClick={handleBookingClick}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="summ-container">
        <h2 className="confirmed">Appointment Confirmed</h2>
        <img src={`${process.env.PUBLIC_URL}/confirm.png`} alt="confirmed" className="confirmIcon" />
        <h2 className="fullNameSum">{latest.firstName} {latest.lastName}</h2>
        <h2 className="barberSum">Haircut with<strong> {latest.barberName}</strong></h2>
        <h2 className="dateAppoint">{latest.timeSelect} | {latest.dateSelect}</h2>
        <button className="appointBut" onClick={handleBookingClick}>Book Again</button>
      </div>
    </div>
  );
};

export default Summary;
