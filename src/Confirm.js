import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';
import { useNavigate } from 'react-router-dom';
import "./Confirm.css";

const Confirm = () => {
  const { currentFormData, addAppointment } = useContext(FormDataContext);
  const navigate = useNavigate();

  const handleBookingClick = () => {
    addAppointment();
    navigate("/summary");
  };

  return (
    <div className="container">
      <h1 className="conTitle">Appointment Confirmation</h1>

      <div className="conf-container">
        <div className="confirm-box">
          <div className="confirm-row">
            <div className="conAlt">
              <span className="barberCon">Haircut with </span>
              <span className="barberCon">{currentFormData.barberName}</span>
              <p className="barberDesc" dangerouslySetInnerHTML={{ __html: currentFormData.description }}></p>
            </div>
          </div>

          <div className="confirm-columns">
            <div className="left-column">
              <div className="confirm-row">
                <span className="label">Client Name: </span>
                <span className="value">{currentFormData.firstName} {currentFormData.lastName}</span>
              </div>
              <div className="confirm-row">
                <span className="label">Email: </span>
                <span className="value">{currentFormData.email}</span>
              </div>
              <div className="confirm-row">
                <span className="label">Phone No.: </span>
                <span className="value">{currentFormData.phone}</span>
              </div>
            </div>

            <div className="right-column">
                <span className="label">Date: </span>
                <span className="value">{currentFormData.dateSelect}</span>
              <div className="confirm-row">
                <span className="label">Time: </span>
                <span className="value">{currentFormData.timeSelect}</span>
              </div>
            </div>
          </div>

          <div className="confirm-button-wrapper">
            <button className="backBut" onClick={() => navigate("/book")}>Back</button>
            <button className="conBut" onClick={handleBookingClick}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
