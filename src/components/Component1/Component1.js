const Component1 = () => {
  return (
    <div className="master-container">
      <div className="left-container">
        <div className="left-inner-container">
          <label className="label">Under Graduate Degree</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            name="first_name"
            placeholder="Select Degree"
          />
        </div>
      </div>
      <div className="right-container">
        <div className="right-inner-container">
          <label className="label">Year</label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            name="last_name"
            placeholder="Select Year"
          />
        </div>
      </div>
    </div>
  );
};

export default Component1;

