import { useState } from "react";
import {
  setFilterStorage,
  validateFiltersStorage,
} from "../componentes/helpers/filters";

export const useFilters = () => {
  const [filters, setFilters] = useState(validateFiltersStorage());

  const handleChangeFilter = async (filter) => {
    const newFilters = await Promise.all(
      filters.map((f) =>
        f.name === filter.name ? { ...f, checked: !f.checked } : f
      )
    );
    setFilterStorage(newFilters);
    setFilters(newFilters);
  };

  return {
    filters,
    handleChangeFilter,
  };
};
