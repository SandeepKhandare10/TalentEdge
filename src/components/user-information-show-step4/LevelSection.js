import React from 'react';

const LevelSection = () => {
  const levels = ['Individual Contributor', 'Mid-Managerial', 'Leadership'];

  return (
    <div className="mb-4">
      <h5>Level</h5>
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
