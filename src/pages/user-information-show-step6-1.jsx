import React from "react";
import "../style/user-information-show-step6-1.css";

const CareerAssessment1 = () => {
    const NextPage=()=>{
        window.location.href="/user-information-show-step6-2";
      }
  return (
    <div className="assessment-container">
      <div className="assessment-box">
        <header className="assessment-header">
          <h1>Career Assessment 1 to 5</h1>
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "0%" }}></div>
            </div>
            <span className="progress-text">0% Completed</span>
          </div>
        </header>

        <div className="questions-container">
          <div className="question">
            <p>
              I am fully aware of the current job market trends and know what
              will be in demand over the next four to five years.
            </p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="0" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I clearly know which skills I lack and how critical it is for me
              to acquire them to have a rewarding and bright career in the next
              3 years.
            </p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="0" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I am clear about the top five companies that I need to strive
              after to achieve my career aspirations.
            </p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="0" />
              <span>10 Absolutely</span>
            </div>
          </div>
        </div>

        <footer className="assessment-footer">
          <button className="next-button"onClick={NextPage}>Next ➔</button>
        </footer>
      </div>
    </div>
  );
};

export default CareerAssessment1;
