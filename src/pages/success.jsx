import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../style/success.css";
import ThumbsUp from "../images/ThumbUpIcon.png"; // Thumbs-up icon
import UpgradLogo from "../images/upgrad.png"; // upGrad logo
import PageOne from "./pdfPages/pageone"; // Import PageOne component

const Success = () => {
  const pageOneRef = useRef(null); // Create a ref for the PageOne component

  const handleDownloadPDF = async () => {
    const element = pageOneRef.current; // Reference to PageOne
    if (!element) {
      alert("Page content not found!");
      return;
    }

    // Temporarily make PageOne visible
    element.style.display = "block";

    // Wait for the element to render properly
    await new Promise((resolve) => setTimeout(resolve, 500));

    html2canvas(element, { scale: 2, useCORS: true }) // Capture the content
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Career_Planner_Report.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      })
      .finally(() => {
        // Hide PageOne again
        element.style.display = "none";
      });
  };

  const NextPage = () => {
    window.location.href = "/upgrad-career-page";
  };

  return (
    <div className="success-container">
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
        <button className="download-button" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>

      {/* PageOne Component (Hidden) */}
      <div ref={pageOneRef} style={{ display: "none" }}>
        <PageOne />
      </div>
    </div>
  );
};

export default Success;