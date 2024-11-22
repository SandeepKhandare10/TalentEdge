import React from 'react';
import './pdfPageOne.css';

const PdfPageOne = () => {
    return (
        <div className="pdfpageone-container">
            <div className="pdfpageone-content">
                <h1 className="pdfpageone-logo">upGrad</h1>
                <h2 className="pdfpageone-subtitle">CAREER PLANNER</h2>
                <div className="pdfpageone-footer">
                    <p>Vijay Pandey</p>
                    <p>Report Date: 06/11/2023</p>
                </div>
            </div>
        </div>
    );
};

export default PdfPageOne;