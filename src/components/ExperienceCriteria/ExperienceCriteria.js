import React, { useState } from "react";
import "./ExperienceCriteria.css";

const ExperienceCriteria = () => {
  const [selectedCriteria, setSelectedCriteria] = useState("");

  const handleGenderSelect = (gender) => {
    setSelectedCriteria(gender); // Update the state with the selected gender
  };

  return (
    <div className="experience-criteria">
      <label className="label">Experience Criteria</label>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`criteria-button ${
            selectedCriteria === "Man" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Man")}
        >
          
          Fresher
        </button>
        <button
          type="button"
          className={`criteria-button ${
            selectedCriteria === "Woman" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Woman")}
        >
          
          Early Career (0-3)
        </button>
        <button
          type="button"
          className={`criteria-button ${
            selectedCriteria === "Non-Binary" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Non-Binary")}
        >
          Mid Career (4-8)
        </button>
        <button
          type="button"
          className={`criteria-button ${
            selectedCriteria === "Other" ? "selected" : ""
          }`}
          onClick={() => handleGenderSelect("Other")}
        >
          Senior Professional(8+)
        </button>
      </div>
    </div>
  );
};

export default ExperienceCriteria;
