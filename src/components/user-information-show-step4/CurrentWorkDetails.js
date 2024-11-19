import React from "react";
import DomainSection from "./DomainSection";
import CTCSection from "./CTCSection";
import RoleSection from "./RoleSection";
import LevelSection from "./LevelSection";
import upGradLogo from "./UpGrad.png";

const CurrentWorkDetails = () => {

  const NextPage=()=>{
    window.location.href="/user-information-show-step5";
  }

  return (
    <div className="container mt-5">
      <div className="card p-4">
        {/* Logo and Horizontal Line */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Current Work Details</h3>
          <img src={upGradLogo} alt="upGrad Logo" className="upgrad-logo" />
        </div>
        <hr />

        {/* Domain Section */}
        <DomainSection />

        {/* Current CTC Section */}
        <CTCSection />

        {/* Nature of Role Section */}
        <RoleSection />

        {/* Level Section */}
        <LevelSection />

        {/* Next Button */}
        <div className="text-start mt-4">
          <button className="btn btn-danger px-4" onClick={NextPage}>
            <span className="me-2"> </span> Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentWorkDetails;
