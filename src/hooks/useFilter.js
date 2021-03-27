import { useState } from "react";

const FILTER_DEFAULT = [
  { name: "About Me", checked: true },
  { name: "Projects", checked: true },
  { name: "Links", checked: true },
  { name: "Routes", checked: true },
];

const FILTERS = "filters"

export const useFilters = () => {
  const getFiltersStorage = () => localStorage.getItem(FILTERS);
  const setFilterStorage = (filters) =>
    localStorage.setItem(FILTERS, JSON.stringify(filters));

  const validateFiltersStorage = () => {
    const data = getFiltersStorage();
    if (data) {
      return JSON.parse(data);
    } else {
      setFilterStorage(FILTER_DEFAULT);
      return FILTER_DEFAULT;
    }
  };
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
