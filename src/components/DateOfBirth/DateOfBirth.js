import React from "react";
import "./DateOfBirth.css";

const DateOfBirth = () => {
  return (
    <div className="dob-container">
      <label htmlFor="dob" className="dob-label">
        Date of Birth
      </label>
      <div className="dob-dropdowns">
        {/* Month Dropdown */}
        <select className="form-select dob-dropdown" aria-label="Month">
          <option defaultValue>Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="3">April</option>
          <option value="3">May</option>
          <option value="3">June</option>
          <option value="3">July</option>
          <option value="3">August</option>
          <option value="3">September</option>
          <option value="3">October</option>
          <option value="3">November</option>
          <option value="3">December</option>
        </select>

        {/* Date Dropdown */}
        <select className="form-select dob-dropdown" aria-label="Date">
          <option defaultValue>Date</option>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Year Dropdown */}
        <select className="form-select dob-dropdown" aria-label="Year">
          <option defaultValue>Year</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i} value={2023 - i}>
              {2023 - i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateOfBirth;
