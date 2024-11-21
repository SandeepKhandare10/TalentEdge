import React from "react";
import "../style/success.css";
import ThumbsUp from "../images/ThumbUpIcon.png"; // Thumbs-up icon
import UpgradLogo from "../images/upgrad.png"; // upGrad logo
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Success = () => {
  const NextPage = () => {
    window.location.href = "/upgrad-career-page";
  };

  // Function to generate the PDF
  const generatePDF = async () => {
    const page = document.getElementById("pdf-content"); // ID for the content to be captured
    const canvas = await html2canvas(page, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait orientation
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("upgrad-career-planner.pdf");
  };

  return (
    <div id="pdf-content" className="success-container">
      <div className="content">
        {/* Header inside the card */}
        <div className="header">
          <img src={UpgradLogo} alt="upGrad Logo" className="logo" />
        </div>
        {/* Horizontal line */}
        <hr className="horizontal-line" />
        {/* Progress bar */}
        <div className="sucessprogress-bar">
          <div className="successprogress-text">100% </div>
          <span className="completedWord">Completed</span>
        </div>

        {/* Thumbs-up icon and congratulations message */}
        <img src={ThumbsUp} alt="thumbs-up-icon" className="thumbs-up-logo" />
        <h1>Congratulations!</h1>
        <p>You have successfully submitted upGrad Career Health Assessment</p>
        <button className="back-button" onClick={NextPage}>
          Back to Home
        </button>
        <button className="download-button" onClick={generatePDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Success;
