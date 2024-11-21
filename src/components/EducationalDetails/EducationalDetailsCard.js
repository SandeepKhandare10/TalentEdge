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
    <div className="master-container-edu">
      <Card className="edu-details-card">
        <div className="logo-edu">
          <img
            src="https://cre.talentedge.com/img/upgrad-logo.svg"
            alt="Logo"
            className="logo-img-edu"
          />
        </div>
        <div className="heading-edu">Educational Details</div>
        <form className="form-edu">
          {/* This div is for complete form elements. */}
          <div className="form-container-edu">
            {/* Undergraduate Section */}
            <div className="user-info-edu">
              <div className="degree-edu">
                <label className="label-edu">
                  Do you have an Undergraduate Degree?
                </label>
                <div className="options-edu">
                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="underGrad" 
                        id="underGradYes"
                        value="Yes"
                        checked={underGrad === "Yes"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
                      <label
                        className="form-check-label-edu"
                        htmlFor="underGradYes"
                      >
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="underGrad" 
                        id="underGradNo"
                        value="No"
                        checked={underGrad === "No"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
                      <label className="form-check-label-edu" htmlFor="underGradNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
              {underGrad === "Yes" && <Component1 labelCompo={"Under Graduate Degree"}/>}
              {underGrad === "No" && <Component2/>}    
            

            <hr />

            {/* Postgraduate Section */}
            <div className="user-info-edu pg-degree">
              <div className="degree-edu">
                <label className="label-edu">
                  Do you have a Postgraduate Degree?
                </label>
                <div className="options-edu">
                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="postGrad" 
                        id="postGradYes"
                        value="Yes"
                        checked={postGrad === "Yes"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
                      <label className="form-check-label-edu" htmlFor="postGradYes">
                        Yes
                      </label>
                    </div>
                  </div>

                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="postGrad" 
                        id="postGradNo"
                        value="No"
                        checked={postGrad === "No"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
                      <label className="form-check-label-edu" htmlFor="postGradNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
                {postGrad === "Yes" && <Component1 labelCompo={"Post Graduate Degree"}/>}
                {postGrad === "No" && <Component2/>}    
            </div>

            <hr />

            {/* Submit Button */}
            <div className="user-info-edu pg-degree">
              <div className="next-button-edu">
                <Button
                  as="input"
                  type="submit"
                  className="submit-edu"
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
