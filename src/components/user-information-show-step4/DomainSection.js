import React from 'react';

const DomainSection = () => {
  const domains = [
    'Digital Marketing', 'Sales & Marketing', 'Software & Tech', 'AI & ML', 'LAW',
    'Finance', 'HR', 'IT Management', 'Leadership', 'Operations & Supply chain',
    'Management', 'Product Management', 'Data Science', 'Analytics', 'Doctorate',
    'Healthcare Management', 'Core Engineering', 'Animation & Graphics',
    'Media & Communication', 'Education & Training', 'Other'
  ];

  return (
    <div className="mb-4">
      <h5>Current Domain</h5>
      <div className="d-flex flex-wrap gap-2">
        {domains.map((domain, index) => (
          <button key={index} className="btn btn-outline-secondary">
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainSection;
