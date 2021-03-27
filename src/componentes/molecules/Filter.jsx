import React from "react";

export const Filter = ({filter,handleChangeFilter }) => (
  <div className="p-3">
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id={filter.name}
        checked={filter.checked}
      //   defaultChecked={filter.checked}
        onChange={() => handleChangeFilter(filter)}
      />
      <label className="form-check-label" htmlFor={filter.name}>
        {filter.name}
      </label>
    </div>
  </div>
);
