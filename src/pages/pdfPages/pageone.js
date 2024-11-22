import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./pageone.css";

const PageOne = () => {
  const generatePDF = async () => {
    const element = document.getElementById("pdf-page-content"); // Targeted div
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("pageone.pdf");
  };

  return (
    <div className="pageone-container">
      <div id="pdf-page-content" className="pageone-content">
        {/* Main Content */}
        <h1 className="pageone-logo">upGrad</h1>
        <h2 className="pageone-subtitle">CAREER PLANNER</h2>

        {/* Footer Information */}
        <div className="pageone-footer">
          <p className="pageone-name">Vijay Pandey</p>
          <p className="pageone-report-date">Report Date: 06/11/2023</p>
        </div>
      </div>
      {/* Button to trigger PDF download */}
      <button onClick={generatePDF} className="download-pdf-button">
        Download PDF
      </button>
    </div>
  );
};

export default PageOne;
