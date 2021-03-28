export const ABOUTME = "Aboutme ",
  PROJECT = "Project ",
  TOPIC = "Topic",
  LINK = "Link ",
  ROUTE = "Route ",
  EN = "EN",
  ES = "ES";

export const FILTER_DEFAULT = [
  { name: ABOUTME, checked: true },
  { name: PROJECT, checked: true },
  { name: TOPIC, checked: true },
  { name: LINK, checked: true },
  { name: ROUTE, checked: true },
  { name: EN, checked: true },
  { name: ES, checked: true },
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
