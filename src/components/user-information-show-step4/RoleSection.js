import React from 'react';

const RoleSection = () => {
  const roles = ['Non-Tech', 'Tech-Coding', 'Tech-Non Coding'];

  return (
    <div className="mb-4">
      <h5>Nature of Role</h5>
      <div className="d-flex flex-wrap gap-2">
        {roles.map((role, index) => (
          <button key={index} className="btn btn-outline-secondary">
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSection;
