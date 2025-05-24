import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Calendar from "react-calendar";
import { FormDataContext } from './FormDataContext';
import "react-calendar/dist/Calendar.css";
import "./Book.css";

function Book() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const { setCurrentFormData } = useContext(FormDataContext);

  const handleBookClick = () => {
    if (!selectedTime) {
      alert("Please select a time.");
      return;
    }

    setCurrentFormData(prev => ({
      ...prev,
      dateSelect: date.toDateString(),
      timeSelect: selectedTime,
    }));

    navigate('/confirm');
  };

  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <div className="container">
      <button className="infoBack-btn">
        <img
          src={`${process.env.PUBLIC_URL}/back.png`}
          alt="Back"
          className="infoBack-img"
          onClick={() => navigate("/barber")}
        />
      </button>

      <h2 className="bookTitle">Select your Date</h2>

      <div className="calendar-dropdown-wrapper">
        <div className="calendar-wrapper">
          <Calendar onChange={setDate} value={date} />
        </div>

        <div className="containerBoard">
          <div className="timeBoard">
            <div className="button-board">
              <p>Select a Time:</p>

              <div className="time-row">
                {times.slice(0, 4).map((time) => (
                  <button
                    key={time}
                    className={time === selectedTime ? "selected" : ""}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="time-row">
                {times.slice(4).map((time) => (
                  <button
                    key={time}
                    className={time === selectedTime ? "selected" : ""}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedTime && (
            <p className="selectedDate">
              You selected:{" "}
              <strong>
                {date.toDateString()}, {selectedTime}
              </strong>
            </p>
          )}

          <div className="confirmBut-container">
            <button className="confirmBut" onClick={handleBookClick}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
