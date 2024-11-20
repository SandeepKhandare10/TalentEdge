import React, { useState } from "react";

const TargetWorkDomain = () => {
  const domains = [
    "Digital Marketing",
    "Sales & Marketing",
    "Software & Tech",
    "AI & ML",
    "LAW",
    "Finance",
    "HR",
    "IT Management",
    "Leadership",
    "Operations & Supply chain",
    "Management",
    "Product Management",
    "Data Science",
    "Analytics",
    "Doctorate",
    "Healthcare Management",
  ];
  
  const [selectedDomains, setSelectedDomains] = useState([]);

  const handleClick = (domain) => {
    if (selectedDomains.includes(domain)) {
      // Remove the domain if already selected
      setSelectedDomains(selectedDomains.filter((d) => d !== domain));
    } else if (selectedDomains.length < 2) {
      // Add the domain if less than 2 are selected
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  return (
    <div className="mb-4">
      <h6>Target Work Domain</h6>
      <div className="d-flex flex-wrap gap-2">
        {domains.map((domain, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary ${
              selectedDomains.includes(domain) ? "btn-primary text-white" : ""
            }`}
            onClick={() => handleClick(domain)}
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TargetWorkDomain;
