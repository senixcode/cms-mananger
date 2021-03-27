import React from "react";
import { Filter } from "../molecules/Filter";

export const Filters = ({ filters, handleChangeFilter }) => (
  <div className="row d-flex justify-content-end">
    {filters.map((filter, index) => (
      <Filter key={index} filter={filter} handleChangeFilter={handleChangeFilter} />
    ))}
  </div>
);
