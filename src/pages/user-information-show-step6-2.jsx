import React from "react";
import '../style/user-information-show-step6-2.css';

const CareerAssessment2 = () => {
    const NextPage=()=>{
        window.location.href="/user-information-show-step6-3";
      }
  return (
    <div className="assessment-container">
      <div className="assessment-box">
        <header className="assessment-header">
          <h1>Career Assessment 2 to 5</h1>
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "10%" }}></div>
            </div>
            <span className="progress-text">10% Completed</span>
          </div>
        </header>

        <div className="questions-container">
          <div className="question">
            <p>Going to work makes me extremely happy and I thoroughly enjoy my current work.</p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>I am extremely happy and satisfied with my current salary and compensation.</p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>I am proud that I have achieved my career goals which I dreamt of two to three years ago.</p>
            <div className="slider-wrapper">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
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

export default CareerAssessment2;
