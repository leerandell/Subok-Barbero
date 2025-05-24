import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const { appointments } = useContext(FormDataContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="adminBack-btn" onClick={() => navigate("/home")}>
        <img src={`${process.env.PUBLIC_URL}/back.png`} alt="Back" className="adminBack-img" />
      </button>
      <div className="adminT">Appointments</div>
      <div className="admin-container">
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
           ) 
           :
           (
          appointments.map((appointment, index) => (
          <div key={index} className="appoint-container">
            <div className="appoint-left">
              <p className="adminBarber">Haircut with <strong>{appointment.barberName}</strong></p>
              <p className="adminFullName"><strong className="strongAd">Name: </strong>{appointment.firstName} {appointment.lastName}</p>
              <p className="adminEmail"><strong className="strongAd">Email: </strong>{appointment.email}</p>
              <p className="adminPhone"><strong className="strongAd">Phone: </strong>{appointment.phone}</p>
            </div>

            <div className="adminDate">
              <p>{appointment.dateSelect} | {appointment.timeSelect}</p>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
