import React from 'react';
import '../style/success.css';
import Thumsup from '../images/ThumbUpIcon.png'
const Success = () => {
  const NextPage=()=>{
    window.location.href="/upgrad-career-page";
  }
  return (
    <div className="container">
      <header className="header">
        <div className="logo">upGrad</div>
        <div className="progress">100% Completed</div>
      </header>
      <div className="content">
        <h1>Congratulations!</h1>
        <img
  src={Thumsup}
  alt="thumsup-logo"
  className="thumsup-logo"
/>
        <p>You have successfully submitted upGrad Career Health Assessment</p>
        <button className="back-button"onClick={NextPage}>Back to Home</button>
      </div>
    </div>
  );
};

export default Success;
