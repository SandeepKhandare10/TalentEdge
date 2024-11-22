import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PdfPageOne from "./pdfpageone";
import PdfPageTwo from "./pdfpagetwo";
import "./pageone.css";

const PageOne = () => {
  // Create refs for each page component
  const pageRefs = [useRef(null), useRef(null)];

  // Function to generate the PDF with each page on a separate page
  const generatePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");  // Create new PDF document
    const pdfWidth = pdf.internal.pageSize.getWidth();  // Get PDF width
    const pdfHeight = pdf.internal.pageSize.getHeight();  // Get PDF height

    // Loop through each page and add content to the PDF
    for (let i = 0; i < pageRefs.length; i++) {
      const element = pageRefs[i].current;

      if (element) {
        try {
          // Use html2canvas to capture the component as a canvas
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
          });

          const imgData = canvas.toDataURL("image/png");  // Get image data
          const imgHeight = (canvas.height * pdfWidth) / canvas.width;  // Calculate height for aspect ratio

          // If it's the first page, add the image
          if (i === 0) {
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight); // Add first image on first page
          } else {
            // If it's the second page, add a new page first
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight); // Add second image on second page
          }

        } catch (error) {
          console.error(`Error generating page ${i + 1}:`, error);
        }
      }
    }

    // Save the generated PDF with the name "Career_Planner_Report.pdf"
    pdf.save("Career_Planner_Report.pdf");
  };

  return (
    <div className="pageone-container">
      {/* Ref for PdfPageOne */}
      <div ref={pageRefs[0]}>
        <PdfPageOne />
      </div>

      {/* Ref for PdfPageTwo */}
      <div ref={pageRefs[1]}>
        <PdfPageTwo />
      </div>

      {/* Button to trigger the PDF generation */}
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PageOne;