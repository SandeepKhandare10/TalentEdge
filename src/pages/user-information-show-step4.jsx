import React from "react";
import TargetWorkDomain from "../components/user-information-show-step4/target-work-domain";
import TargetCTC from "../components/user-information-show-step4/target-ctc";
import TargetRoleType from "../components/user-information-show-step4/target-role-type";
import PreferredWorkLocation from "../components/user-information-show-step4/preferred-work-location";
import UpgradLogo from "../images/upgrad.png";
import "../style/user-information-show-step4.css";

const FutureCareerInterest  = () => {
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
        <h3>Future Career Interest </h3>

        {/* Domain Section */}
        <TargetWorkDomain />

        {/* Nature of Role Section */}
        <TargetRoleType />

        {/* Current CTC Section */}
        <TargetCTC />

        {/* Level Section */}
        <PreferredWorkLocation />

        {/* Next Button */}
        <hr />

        <div className="text-start mt-4">
          <button
            className="btn btn-danger px-4 custom-white-text"
            onClick={NextPage}
          >
            <span className="me-2"> </span> Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FutureCareerInterest;
