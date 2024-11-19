import React from "react";
import "../style/user-information-show-step6-4.css";

const CareerAssessment4 = () => {
  const NextPage=()=>{
    window.location.href="/user-information-show-step6-5";
  }
  return (
    <div className="assessment-container">
      <div className="assessment-card">
        <div className="header">
          <h2>Career Assessment 4 to 5</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "78%" }}></div>
            </div>
            <div className="progress-info">
              <span className="progress-percent">78%</span>
              <span className="progress-text">Completed</span>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <p>
              I am willing to sacrifice my comfort zone to continuously work
              towards improving myself.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              If required, I am willing to devote 10–12 hours each week to
              upskill in pursuit of my career growth.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I can easily unlearn and learn new skills to keep pace with
              changing work demands like automation and industry trends.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="next-button"onClick={NextPage}>Next ➔</button>
        </div>
      </div>
    </div>
  );
};

export default CareerAssessment4;
