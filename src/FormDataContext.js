import { createContext, useState, useContext } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [currentFormData, setCurrentFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    barberName: '',
    description: '',
    timeSelect: '',
    dateSelect: ''
  });

  const addAppointment = () => {
    setAppointments(prev => [...prev, currentFormData]);
    setCurrentFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      barberName: '',
      description: '',
      timeSelect: '',
      dateSelect: ''
    });
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <FormDataContext.Provider
      value={{
        currentFormData,
        setCurrentFormData,
        appointments,
        addAppointment,
        clearAppointments
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
