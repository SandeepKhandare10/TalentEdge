import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./EducationalDetailsCard.css";
import Button from "react-bootstrap/Button";
<<<<<<< HEAD
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
=======
>>>>>>> master

const EducationalDetailsCard = () => {
  // State for Undergraduate and Postgraduate radio groups
  const [underGrad, setUnderGrad] = useState(null);
  const [postGrad, setPostGrad] = useState(null);

  return (
<<<<<<< HEAD
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
=======
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
                <label className="label">Do you have an Undergraduate Degree?</label>
                <div className="options">
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="underGrad" // Group name for undergrad
>>>>>>> master
                        id="underGradYes"
                        value="Yes"
                        checked={underGrad === "Yes"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
<<<<<<< HEAD
                      <label
                        className="form-check-label-edu"
                        htmlFor="underGradYes"
                      >
=======
                      <label className="form-check-label" htmlFor="underGradYes">
>>>>>>> master
                        Yes
                      </label>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="underGrad" 
=======
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="underGrad" // Group name for undergrad
>>>>>>> master
                        id="underGradNo"
                        value="No"
                        checked={underGrad === "No"}
                        onChange={(e) => setUnderGrad(e.target.value)}
                      />
<<<<<<< HEAD
                      <label className="form-check-label-edu" htmlFor="underGradNo">
=======
                      <label className="form-check-label" htmlFor="underGradNo">
>>>>>>> master
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            
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
=======
            <hr />

            {/* Postgraduate Section */}
            <div className="user-info pg-degree">
              <div className="degree">
                <label className="label">Do you have a Postgraduate Degree?</label>
                <div className="options">
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postGrad" // Group name for postgrad
>>>>>>> master
                        id="postGradYes"
                        value="Yes"
                        checked={postGrad === "Yes"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
<<<<<<< HEAD
                      <label className="form-check-label-edu" htmlFor="postGradYes">
=======
                      <label className="form-check-label" htmlFor="postGradYes">
>>>>>>> master
                        Yes
                      </label>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="container-of-options-edu">
                    <div className="form-check-edu">
                      <input
                        className="form-check-input-edu"
                        type="radio"
                        name="postGrad" 
=======
                  <div className="container-of-options">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="postGrad" // Group name for postgrad
>>>>>>> master
                        id="postGradNo"
                        value="No"
                        checked={postGrad === "No"}
                        onChange={(e) => setPostGrad(e.target.value)}
                      />
<<<<<<< HEAD
                      <label className="form-check-label-edu" htmlFor="postGradNo">
=======
                      <label className="form-check-label" htmlFor="postGradNo">
>>>>>>> master
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
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
=======
            <hr />

            {/* Submit Button */}
            <div className="user-info pg-degree">
              <div className="next-button">
                <Button as="input" type="submit" className="submit" value="Next" />
>>>>>>> master
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EducationalDetailsCard;
