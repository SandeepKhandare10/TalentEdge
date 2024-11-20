import React from "react";
import DomainSection from "../components/user-information-show-step4/DomainSection";
import CTCSection from "../components/user-information-show-step4/CTCSection";
import RoleSection from "../components/user-information-show-step4/RoleSection";
import LevelSection from "../components/user-information-show-step4/LevelSection";
import UpgradLogo from "../images/upgrad.png";
import "../style/user-information-show-step3.css";

const CurrentWorkDetails = () => {
  const NextPage = () => {
    window.location.href = "/user-information-show-step5";
  };

  return (
    <div className="container">
      <div className="containerMini">
        {/* Logo and Horizontal Line */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img src={UpgradLogo} alt="upGrad Logo" className="upgrad-logo" />
        </div>
        <hr />
        <h3>Current Work Details</h3>

        {/* Domain Section */}
        <DomainSection />

        {/* Current CTC Section */}
        <CTCSection />

        {/* Nature of Role Section */}
        <RoleSection />

        {/* Level Section */}
        <LevelSection />

        {/* Next Button */}
        <hr />

        <div className="text-start mt-4">
          <button className="btn btn-danger px-4 custom-white-text" onClick={NextPage}>
            <span className="me-2"> </span> Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentWorkDetails;
