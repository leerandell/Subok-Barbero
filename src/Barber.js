import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataContext';
import './Barber.css';

const barbers = [
  { id: 1, name: 'Barber Bon', description: 'Haircut + Wash + Hot Towel', services: ['Haircut', 'Wash', 'Hot Towel'] },
  { id: 2, name: 'Barber Eric', description: 'Haircut + Wash + Hot Towel', services: ['Haircut', 'Wash', 'Hot Towel'] },
  { id: 3, name: 'Barber Eddie', description: 'Haircut + Wash', services: ['Haircut', 'Wash'] },
  { id: 4, name: 'Barber John', description: 'Haircut + Wash', services: ['Haircut', 'Wash'] },
];

const Barber = () => {
  const navigate = useNavigate();
  const { setCurrentFormData } = useContext(FormDataContext);
  const [openId, setOpenId] = useState(null);

  const handleBookClick = (barberName, description, services) => {
    setCurrentFormData(prev => ({
      ...prev,
      barberName,
      description,
      services,
    }));
    navigate('/book');
  };

  const toggleDesc = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <button className="infoBack-btn" onClick={() => navigate("/info")}>
        <img src={`${process.env.PUBLIC_URL}/back.png`} alt="Back" className="adminBack-img" />
      </button>

      <h2 className="barberTitle">Choose your Barber</h2>
      <div className="barber-wrapper">

        {barbers.map((barber) => (
          <div key={barber.id}
            className={`barber-container ${openId === barber.id ? 'expanded' : ''}`}>
            
            <img src={`${process.env.PUBLIC_URL}/head.png`} alt="Barber" className="barberhead" />
            
            <button className="desc-toggle-btn" onClick={() => toggleDesc(barber.id)}>
              <h2 className="barber-name">{barber.name}</h2>
              {openId === barber.id ? '▲ ' : '▼'}
            </button>

            <div className={`barber-overlay ${openId === barber.id ? 'show' : ''}`}>
              <h2 className="specialties">Specialties</h2>
              {barber.services.map((service, index) => {
                let icon = '•';
                if (service.toLowerCase() === 'haircut') icon = '✂️ Haircut';
                else if (service.toLowerCase() === 'wash') icon = '🚿 Wash';
                else if (service.toLowerCase() === 'hot towel') icon = '♨️ Hot Towel';

                return (
                  <p key={index} className="barber-description">{icon}</p>
                );
              })}
            </div>

            <button
              className="barberBut"
              onClick={() => handleBookClick(barber.name, barber.description, barber.services)}>
              Choose
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Barber;
