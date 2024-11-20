import React, { useState } from "react";

const LevelSection = () => {
  const levels = ["Individual Contributor", "Mid-Managerial", "Leadership"];

  // State to track the selected level
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleClick = (level) => {
    setSelectedLevel(level); // Update the selected level
  };

  return (
    <div className="mb-4">
      <h6>Level</h6>
      <div className="d-flex flex-wrap gap-2">
        {levels.map((level, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary ${
              selectedLevel === level ? "btn-primary text-white" : ""
            }`}
            onClick={() => handleClick(level)} // Set selected level on click
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSection;
