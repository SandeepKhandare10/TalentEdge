import React, { useState } from 'react';
import '../style/user-information-show-step6-1.css';

const CareerAssessment1 = () => {
    const [progress, setProgress] = useState(0);
    const [rangeValues, setRangeValues] = useState({
        range1: 10,
        range2: 10,
        range3: 10,
    });

    const handleRangeChange = (name, value) => {
        setRangeValues((prev) => ({ ...prev, [name]: value }));
    };

    const rangeSlide1 = (value) => {
        document.getElementById("rangeValue1").textContent = value;
    };

    const rangeSlide2 = (value) => {
        document.getElementById("rangeValue2").textContent = value;
    };

    const rangeSlide3 = (value) => {
        document.getElementById("rangeValue3").textContent = value;
    };

    return (
        <div className="layout-screen py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-11 col-sm-12 col-12 mx-auto">
                        <div className="layout-box px-5 py-3">
                            <div className="logo d-flex justify-content-end">
                                <img src="https://cre.talentedge.com/img/upgrad-logo.svg" alt="Logo" />
                            </div>
                            <div className="question-progress">
                                <div className="progress-wrapper">
                                    <div className="bar" style={{ width: `${progress}%` }}></div>
                                </div>
                                <div className="completion-badge">
                                    <div className="outer-counter">
                                        <span className="count-wrap">
                                            <small id="step_1">{progress}% </small>
                                        </span>
                                    </div>
                                    Completed
                                </div>
                            </div>
                            <div className="qest-title">
                                <h3>Career Assessment 1 to 5</h3>
                            </div>

                            <form action="https://cre.talentedge.com/user-information-save-step6" method="POST" autoComplete="off" id="regForm">
                                <input type="hidden" name="_token" value="vGOn6uZd5Xo194Khx4jw2HhgOrKLcUbzRh8k65lX" />
                                <div className="form-data mt-4">
                                    <div className="quest-wrap">
                                        <div className="inner-wrap bg-light p-3">
                                            <div className="table-responsive">
                                                <table className="table mb-0">
                                                    <input type="hidden" name="step" value="1" />
                                                    <tbody>
                                                        <tr>
                                                            <td className="quest-width">
                                                                I am fully aware of the current job market trends and know what will be in demand over the next four to five years.
                                                            </td>
                                                            <td className="range-width">
                                                                <div className="slider container-fluid">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0">0</p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Not at all</span>
                                                                            </p>
                                                                        </div>
                                                                        <input type="hidden" name="question_id[]" value="1" />
                                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="10"
                                                                                value={rangeValues.range1}
                                                                                name="user_response[]"
                                                                                onChange={(e) => { handleRangeChange('range1', e.target.value); rangeSlide1(e.target.value); }}
                                                                                onMouseMove={(e) => rangeSlide1(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0" id="rangeValue1">
                                                                                {rangeValues.range1}
                                                                            </p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Absolutely</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="quest-width">
                                                                I clearly know which skills I lack and how critical it is for me to acquire them to have a rewarding and bright career in the next 3 years.
                                                            </td>
                                                            <td className="range-width">
                                                                <div className="slider container-fluid">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0">0</p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Not at all</span>
                                                                            </p>
                                                                        </div>
                                                                        <input type="hidden" name="question_id[]" value="2" />
                                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="10"
                                                                                value={rangeValues.range2}
                                                                                name="user_response[]"
                                                                                onChange={(e) => { handleRangeChange('range2', e.target.value); rangeSlide2(e.target.value); }}
                                                                                onMouseMove={(e) => rangeSlide2(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0" id="rangeValue2">
                                                                                {rangeValues.range2}
                                                                            </p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Absolutely</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="quest-width">
                                                                I am clear about the top five companies that I need to strive after to achieve my career aspirations.
                                                            </td>
                                                            <td className="range-width">
                                                                <div className="slider container-fluid">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0">0</p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Not at all</span>
                                                                            </p>
                                                                        </div>
                                                                        <input type="hidden" name="question_id[]" value="3" />
                                                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                            <input
                                                                                type="range"
                                                                                min="0"
                                                                                max="10"
                                                                                value={rangeValues.range3}
                                                                                name="user_response[]"
                                                                                onChange={(e) => { handleRangeChange('range3', e.target.value); rangeSlide3(e.target.value); }}
                                                                                onMouseMove={(e) => rangeSlide3(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                                                                            <p className="m-0 p-0" id="rangeValue3">
                                                                                {rangeValues.range3}
                                                                            </p>
                                                                            <p className="m-0 p-0">
                                                                                <span>Absolutely</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-4 col-md-5 col-sm-5 col-12">
                                            <button type="submit" className="btn btn-danger">
                                                Next <i className="fa fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerAssessment1;
