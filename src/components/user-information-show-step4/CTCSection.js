import React, { useState } from "react";

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

  // State to track the selected CTC range
  const [selectedRange, setSelectedRange] = useState(null);

  const handleClick = (range) => {
    setSelectedRange(range); // Update the selected range
  };

  return (
    <div className="mb-4">
      <h6>Current CTC (lpa)</h6>
      <div className="d-flex flex-wrap gap-2">
        {ctcRanges.map((range, index) => (
          <button
            key={index}
            className={`btn btn-outline-secondary ${
              selectedRange === range ? "btn-primary text-white" : ""
            }`}
            onClick={() => handleClick(range)} // Set selected range on click
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CTCSection;
