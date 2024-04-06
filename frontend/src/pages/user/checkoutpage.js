import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './checkout.css';

const Checkout = ({ onConfirmCheckout }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };


  return (
    <div className="checkout-container">
      <h1>Date and Time for Pickup</h1>
      <div className="date-time-container">
        <div className="date-picker-container">
          <label>Select Date:</label>
          <div style={{ border: "1px solid #000", borderRadius: "5px", padding: "5px" }}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="time-picker-container">
          <label>Select Time:</label>
          <div style={{ border: "1px solid #000", borderRadius: "5px", padding: "5px" }}>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
