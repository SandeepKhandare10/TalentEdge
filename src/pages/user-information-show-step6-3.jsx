import React from "react";
import "../style/user-information-show-step6-3.css";

const CareerAssessment3 = () => {
  const NextPage=()=>{
    window.location.href="/user-information-show-step6-4";
  }
  return (
    <div className="assessment-wrapper">
      <div className="assessment-card">
        <header className="assessment-header">
          <h2>Career Assessment 3 to 5</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "46%" }}></div>
            </div>
            <span className="progress-text">
              <span className="progress-percentage">46%</span> Completed
            </span>
          </div>
        </header>

        <div className="assessment-questions">
          <div className="question">
            <p>
              If I were to change my job, I am highly confident to get a desired
              job and good salary hike in the next 30 days.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I have been approached by a lot of recruiters in the last six
              months due to my niche skills and unique value proposition.
            </p>
            <div className="slider-container">
              <span>0 Not at all</span>
              <input type="range" min="0" max="10" defaultValue="5" />
              <span>10 Absolutely</span>
            </div>
          </div>
          <div className="question">
            <p>
              I have a strong network of top professionals who can help me in
              getting my next dream job.
            </p>
            <div className="slider-container">
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

export default CareerAssessment3;
