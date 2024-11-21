import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./EducationalDetailsCard.css";
import Button from "react-bootstrap/Button";
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";

const EducationalDetailsCard = () => {
  // State for Undergraduate and Postgraduate radio groups
  const [underGrad, setUnderGrad] = useState(null);
  const [postGrad, setPostGrad] = useState(null);

  return (
    <div className="master-container">
      <Card className="edu-details-card">
        <div className="logo">
          <img
            src="https://cre.talentedge.com/img/upgrad-logo.svg"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <div className="heading">Educational Details</div>
        <form className="form">
          {/* This div is for complete form elements. */}
          <div className="form-container">
            {/* Undergraduate Section */}
            <div className="user-info">
              <div className="degree">
                <label className="label">
                  Do you have an Undergraduate Degree?
                </label>
                <div className="options">
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="underGrad" 
                        id="underGradYes"
                        value="Yes"
                        checked={underGrad === "Yes"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="underGradYes"
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="underGrad" 
                        id="underGradNo"
                        value="No"
                        checked={underGrad === "No"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="underGradNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
                {underGrad === "Yes" && <Component1/>}
                {underGrad === "No" && <Component2/>}    
            </div>

            <hr />

            {/* Postgraduate Section */}
            <div className="user-info pg-degree">
              <div className="degree">
                <label className="label">
                  Do you have a Postgraduate Degree?
                </label>
                <div className="options">
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postGrad" 
                        id="postGradYes"
                        value="Yes"
                        checked={postGrad === "Yes"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="postGradYes">
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postGrad" 
                        id="postGradNo"
                        value="No"
                        checked={postGrad === "No"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="postGradNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Submit Button */}
            <div className="user-info pg-degree">
              <div className="next-button">
                <Button
                  as="input"
                  type="submit"
                  className="submit"
                  value="Next"
                />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EducationalDetailsCard;
