import React from "react";
import { SwitchCustome } from "../atoms/SwitchCustom";

export const Filter = ({ filter, handleChangeFilter }) => (
  <div className="p-3">
    <SwitchCustome
      name={filter.name}
      checked={filter.checked}
      onChange={(e) => {
        let checked = e.target.checked;
        handleChangeFilter({ ...filter, checked });
      }}
    />
  </div>
);
