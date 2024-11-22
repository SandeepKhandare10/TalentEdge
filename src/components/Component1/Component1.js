import React from "react";
import "./Component1.css";

const Component1 = ({ labelCompo }) => {

  const degreeOptions = [
    {value: "btech"}, 
    {value: "bsc"}, 
    {value: "ba"}, 
    {value: "bcom"}, 
    {value: "be"}
  ];

  return (
    <div className="master-container-compo1">
      {/* Left container for Undergraduate Degree */}
      <div className="left-container-compo1">
        <div className="left-inner-container-compo1">
          <label className="label-compo1">{labelCompo}</label>
          <select className="form-control-compo1" id="UnderGradDegree">
            <option value="" selected>
              Select Degree
            </option>
            {degreeOptions.map((degree) => (
              <option key={degree.value} value={degree.value}>
                {degree.value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right container for Year */}
      <div className="right-container-compo1">
        <div className="right-inner-container-compo1">
          <label className="label-compo1">Year</label>
          <select className="form-control-compo1" id="UnderGradYear">
            <option value="" selected>
              Select Year
            </option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Component1;
