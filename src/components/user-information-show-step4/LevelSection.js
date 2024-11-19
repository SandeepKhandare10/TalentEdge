import React from "react";


const LevelSection = () => {
  const levels = ["Individual Contributor", "Mid-Managerial", "Leadership"];

  return (
    <div className="mb-4">
      <h6>Level</h6>
      <div className="d-flex flex-wrap gap-2">
        {levels.map((level, index) => (
          <button key={index} className="btn btn-outline-secondary">
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSection;
