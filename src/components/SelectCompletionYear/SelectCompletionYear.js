import './SelectCompletionYear.css';

const SelectCompletionYear = () => {
  const year = [2024, 2025, 2026, 2027, 2028];

  return (
    <div className="master-container-comp-year">
      <div className="completion-year">
        <div className="form-float-select-year">
          <label className="form-control-label-compo2">Completion year</label>
          <select className="form-control-compo2" id="UnderGradDegree">
            <option value="" selected>
              Select Year
            </option>
            {year.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectCompletionYear;
