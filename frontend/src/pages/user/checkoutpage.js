import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './checkout.css';

const Checkout = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="checkout-container">
      <h1>Choose the Date and Time for your order pickup</h1>
      <div className="date-time-container">
        <div className="date-picker-container">
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="time-picker-container">
          <label>Select Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="ui green button" >
          Confirm Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
