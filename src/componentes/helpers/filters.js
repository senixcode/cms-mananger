export const FILTER_DEFAULT = [
  { name: "About Me", checked: true },
  { name: "Projects", checked: true },
  { name: "Links", checked: true },
  { name: "Routes", checked: true },
  { name: "EN", checked: true },
  { name: "ES", checked: true },
];

export const FILTERS = "filters";

export const getFiltersStorage = () => localStorage.getItem(FILTERS);

export const setFilterStorage = (filters) =>
  localStorage.setItem(FILTERS, JSON.stringify(filters));

export const validateFiltersStorage = () => {
  const data = getFiltersStorage();
  if (data) {
    return JSON.parse(data);
  } else {
    setFilterStorage(FILTER_DEFAULT);
    return FILTER_DEFAULT;
  }
};
