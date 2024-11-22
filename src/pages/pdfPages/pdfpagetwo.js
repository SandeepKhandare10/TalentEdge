import React from "react";
import "./PdfPageTwo.css";

const PdfPageTwo = () => {
  return (
    <div className="pdfpagetwo-container">
      <header className="pdfpagetwo-header">
        <h1>About Career Planner</h1>
      </header>
      <div className="pdfpagetwo-content">
        <div className="pdfpagetwo-chart-section">
          <div className="pdfpagetwo-chart">
            <div className="pdfpagetwo-center-circle">
              Set Your Career Wheel In Action
            </div>
          </div>
        </div>
        <div className="pdfpagetwo-text-section">
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
            an important role to set your career growth in motion.Your score
            could vary from high to low for each of the five factors. The
            factors where you score high are the signature career strengths.
            Factors where your score is medium or low could be pointing at your
            hidden areas of development; critical and essential to take your
            career to the next level.This assessment also highlights the
            combination of hard and soft skills you need to acquire to meet your
            desired career goal and also recommends suitable upskilling programs
            that could help you bridge this skill gap.
          </p>
          <p>
            You upGrad counselor, will help you further interpret the results of
            this assessment to create a tangible action plan to achieve your
            career goals.Your upGrad coach will help you to interpret each
            factor and will make you introspect over your hidden behavior
            patterns that prevent you from getting the career growth you are
            aiming for. A coaching session will help you to reflect over these
            previously unexplored blind spots about your career and empower you
            to take the right actions required to take your career to the next
            level over the next two to three years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfPageTwo;