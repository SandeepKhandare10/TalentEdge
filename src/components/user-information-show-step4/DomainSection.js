import React, { useState } from "react";

const DomainSection = () => {
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
    "Core Engineering",
    "Animation & Graphics",
    "Media & Communication",
    "Education & Training",
    "Other",
  ];
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleClick = (domain) => {
    setSelectedDomain(domain); 
  };
  return (
    <div className="mb-4">
      <h6>Current Domain</h6>
      <div className="d-flex flex-wrap gap-2">
        {domains.map((domain, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary ${
              selectedDomain === domain ? "btn-primary text-white" : ""
            }`}
            onClick={() => handleClick(domain)} // Set selected domain on click
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainSection;
