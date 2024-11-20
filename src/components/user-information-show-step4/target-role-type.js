import React, { useState } from "react";

const RoleSection = () => {
  const roles = ["Individual Contributor", "Mid-Managerial", "Leadership","CXO"];

  // State to track the selected role
  const [selectedRole, setSelectedRole] = useState(null);

  const handleClick = (role) => {
    setSelectedRole(role); // Update the selected role
  };

  return (
    <div className="mb-4">
      <h6>Target Role Type</h6>
      <div className="d-flex flex-wrap gap-2">
        {roles.map((role, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary ${
              selectedRole === role ? "btn-primary text-white" : ""
            }`}
            onClick={() => handleClick(role)} // Set selected role on click
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSection;
