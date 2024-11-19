import React from "react";
import '../style/user-information-show-step6-5.css'
const CareerAssessment5 = () => {
  const NextPage=()=>{
    window.location.href="/success";
  }
  return (
    <div className="assessment-container">
      <div className="assessment-card">
        <div className="header">
          <h2>Career Assessment 5 to 5</h2>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "98%" }}></div>
            </div>
            <span className="progress-text">98% Completed</span>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <p>
              I believe I am a highly valuable resource to my organization for
              the skills I possess and my educational background.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              My colleagues/peers have a high regard for me due to my
              contribution towards work.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I am considered to be a high-potential employee in my organization
              and my managers foresee me in a bigger role in the next two to
              three years.
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

export default CareerAssessment5;
