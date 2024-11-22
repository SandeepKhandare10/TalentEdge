import Card from "react-bootstrap/Card";
import "./StepFormOneCard.css";
import Button from "react-bootstrap/Button";
import ToggleButtonExample from "../ToggleButton/ToggleButtonExample";
import DateOfBirth from "../DateOfBirth/DateOfBirth";
import ExperienceCriteria from "../ExperienceCriteria/ExperienceCriteria";

const countryCodes = [
  { code: "+91" },
  { code: "+1" },
  { code: "+44" },
  { code: "+61" },
  { code: "+81" },
  { code: "+49" },
  { code: "+33" },
];

const StepFormOneCard = () => {
  return (
    <div className="master-container">
      <Card className="step-form-one-card">
        <div className="logo">
          <img
            src="https://cre.talentedge.com/img/upgrad-logo.svg"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <div className="heading">Basic Questionnaire</div>
        <form className="form">
          <div className="form-container">
            {/* First Name and Last Name Fields */}
            <div className="user-info">
              <div className="left-container">
                <div className="left-inner-container">
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    name="first_name"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <div className="right-container">
                <div className="right-inner-container">
                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    name="last_name"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Country Code and Phone Number Fields */}
            <div className="user-info">
              <div className="left-container">
                <div className="contact-info">
                  <div className="country-code">
                    <select
                      className="form-control"
                      id="CountryCode"
                      name="country_code"
                      defaultValue="+91" /* Set default value to +91 */
                    >
                      {countryCodes.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.code}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-number">
                    <div className="right-inner-container">
                      <label className="label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="PhoneNumber"
                        name="phone_number"
                        placeholder="Enter your phone number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-container">
                <div className="right-inner-container">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Other Components */}
            <ToggleButtonExample />
            <DateOfBirth />
            <ExperienceCriteria />
            <hr />

            <div className="user-info">
              <div className="next-button">
                <Button type="submit" className="submit">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default StepFormOneCard;
