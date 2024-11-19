import React from "react";


const CTCSection = () => {
  const ctcRanges = [
    "0-3",
    "3-6",
    "7-9",
    "10-15",
    "16-25",
    "25-40",
    "40-50",
    "50+",
  ];

  return (
    <div className="mb-4">
      <h6>Current CTC (lpa)</h6>
      <div className="d-flex flex-wrap gap-2">
        {ctcRanges.map((range, index) => (
          <button key={index} className="btn btn-outline-secondary">
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CTCSection;
