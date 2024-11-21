import React, { useState } from "react";
import "./ToggleButtonExample.css";

const ToggleButtonExample = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender); // Update the state with the selected gender
  };

  return (
    <div className="gender-selector">
      <label className="form-label">Gender</label>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`gender-button ${
            selectedGender === "Man" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Man")}
        >
          <span role="img" aria-label="man">
            👨
          </span>{" "}
          Man
        </button>
        <button
          type="button"
          className={`gender-button ${
            selectedGender === "Woman" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Woman")}
        >
          <span role="img" aria-label="woman">
            👩
          </span>{" "}
          Woman
        </button>
        <button
          type="button"
          className={`gender-button ${
            selectedGender === "Non-Binary" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Non-Binary")}
        >
          Non-Binary/Non-Conforming
        </button>
        <button
          type="button"
          className={`gender-button ${
            selectedGender === "Other" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Other")}
        >
          Other Gender
        </button>
        <button
          type="button"
          className={`gender-button ${
            selectedGender === "Prefer not to respond" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Prefer not to respond")}
        >
          Prefer not to respond
        </button>
      </div>
    </div>
  );
};

export default ToggleButtonExample;
