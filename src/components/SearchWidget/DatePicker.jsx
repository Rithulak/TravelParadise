// components/DatePicker.jsx
import React from 'react';

const DatePicker = ({ label, value, onChange }) => {
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="date-picker">
      <label>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={today}
        className="date-field"
      />
    </div>
  );
};

export default DatePicker;