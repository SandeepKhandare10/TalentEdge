import React from 'react';
import '../style/UserInformationShowStep5.css';

const UserInformationShowStep5 = () => {
  const NextPage=()=>{
    window.location.href="/user-information-show-step6-2";
  }
  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h2>Let's Check your Current Career Health</h2>
        </header>
        <section className="instructions">
          <p><strong>Instructions -</strong></p>
          <ul>
            <li>Curious to analyze your career health and what lies ahead?</li>
            <li>Rate yourself on a scale of 0-10 where 0 = Not at all and 10 = Absolutely.</li>
            <li>
              There is no right or wrong answer. Make sure you respond to all the
              questions. Please be candid and honest as it will enable you to work
              towards your career growth.
            </li>
          </ul>
        </section>
        <footer className="footer">
          <button className="next-button" onClick={NextPage}>Next ➤</button>
        </footer>
      </div>
    </div>
  );
};

export default UserInformationShowStep5;
