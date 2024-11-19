import React from "react";
import "../style/UpgradCareerPage.css";
import UpgradLogo from "../images/upgrad.png"; // Adjust the path as necessary

const UpgradCareerPage = () => {

const NextPage=()=>{
  window.location.href="/user-information-show-step4";
}

  return (
    <div className="upgrad-career-page-container">
      <div className="upgrad-career-page-card">
        {/* Logo on top of the card */}
        <img
          src={UpgradLogo}
          alt="upGrad Logo"
          className="header-logo-image"
        />
        
        <header className="career-page-header">
          <hr className="header-line" />
          <h2>upGrad Career Planner</h2>
          <hr className="header-line" />
        </header>

        <main className="career-page-content">
          <p>
            The upGrad Career Planner is a simple yet insightful tool that helps
            you to discover the key skills you need to achieve your career goals
            and also helps you evaluate how prepared you are as a professional
            to achieve a powerful growth trajectory in your career over the next
            three to five years.
          </p>
          <p>
            This assessment helps you evaluate yourself on the five key factors
            which empower an individual to have a rewarding career. You can
            imagine these factors as spokes of a wheel where each factor plays
            an important role to set your career growth in motion. Your score
            could vary from high to low for each of the five factors. The
            factors where you score high are the signature career strengths.
            Factors where your score is medium or low could be pointing at your
            hidden areas of development; critical and essential to take your
            career to the next level. This assessment also highlights the
            combination of hard and soft skills you need to acquire to meet your
            desired career goal and also recommends suitable upskilling programs
            that could help you bridge this skill gap.
          </p>
          <p>
            Your upGrad counselor will help you further interpret the results of
            this assessment to create a tangible action plan to achieve your
            career goals. Your upGrad coach will help you to interpret each
            factor and will make you introspect over your hidden behavior
            patterns that prevent you from getting the career growth you are
            aiming for. A coaching session will help you to reflect over these
            previously unexplored blind spots about your career and empower you
            to take the right actions required to take your career to the next
            level over the next two to three years.
          </p>
        </main>
        <footer className="career-page-footer">
          <button className="career-page-button" onClick={NextPage}>Begin Now &raquo;</button>
        </footer>
      </div>
    </div>
  );
};

export default UpgradCareerPage;