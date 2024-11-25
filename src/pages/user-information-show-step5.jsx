import React from 'react';
import '../style/user-information-show-step5.css';

const UserInformationShowStep5 = () => {
  const NextPage = () => {
    window.location.href = "/user-information-show-step6-1";
  };

  return (
    <div className="step5-container">
      <div className="step5-card">
        <div className="step5-logo">
          <img
            src="https://cre.talentedge.com/img/upgrad-logo.svg"
            alt="Logo"
          />
        </div>
        <header className="step5-header">
          <h2>Let's Check your Current Career Health</h2>
        </header>
        <section className="step5-instructions">
          <p><strong>Instructions -</strong></p>
          <ul className="step5-list">
            <li className="step5-item">Curious to analyze your career health and what lies ahead?</li>
            <li className="step5-item">Rate yourself on a scale of 0-10 where 0 = Not at all and 10 = Absolutely.</li>
            <li className="step5-item">
              There is no right or wrong answer. Make sure you respond to all the
              questions. Please be candid and honest as it will enable you to work
              towards your career growth.
            </li>
          </ul>
        </section>
        <footer className="step5-footer">
          <button className="step5-next-btn" onClick={NextPage}>Next ➤</button>
        </footer>
      </div>
    </div>
  );
};

export default UserInformationShowStep5;
