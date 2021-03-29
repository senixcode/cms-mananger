import { useQueryListAll } from "./useQueryListAll";
import {
  fieldLanguage,
  fieldsAboutMe,
  fieldsLinks,
  fieldsProjects,
  fieldsRoutes,
  fieldsTopics,
} from "../componentes/helpers/fieldsCardsHome";
import { useEffect, useState } from "react";
import {
  ABOUTME,
  EN,
  ES,
  LINK,
  PROJECT,
  ROUTE,
  TOPIC,
} from "../componentes/helpers/filters";
import { filterByStatus } from "../componentes/helpers/filterByStatus";

export const useListAll = (filters) => {
  let cloneFilters = [...filters];
  let selectLanguage = null;
  let languages = cloneFilters.filter((f) => [EN, ES].includes(f.name) && f);
  if (languages[0].checked !== languages[1].checked) {
    selectLanguage = languages.filter((l) => l.checked === true)[0].name;
  }

  const {
    loading,
    error,
    aboutMeQueryResult,
    projectsQueryResult,
    topicsQueryResult,
    linksQueryResult,
    routesQueryResult,
  } = useQueryListAll(selectLanguage);
  const [listFilters, setListFilters] = useState([]);

  useEffect(() => {
    if (
      loading === false &&
      error === false &&
      filters &&
      aboutMeQueryResult.data &&
      projectsQueryResult.data &&
      topicsQueryResult.data &&
      linksQueryResult.data &&
      routesQueryResult.data
    ) {
      let newListFilters = [];
      filters.forEach((filter) => {
        switch (filter.name) {
          case ABOUTME:
            newListFilters.push({
              name: ABOUTME,
              items: aboutMeQueryResult.data.allAboutMe,
              fields: { ...fieldsAboutMe, ...fieldLanguage },
              shown: filter.checked,
            });
            break;
          case PROJECT:
            newListFilters.push({
              name: PROJECT,
              items: projectsQueryResult.data.projects,
              fields: { ...fieldsProjects, ...fieldLanguage },
              shown: filter.checked,
            });
            break;
          case TOPIC:
            newListFilters.push({
              name: TOPIC,
              items: topicsQueryResult.data.topics,
              fields: fieldsTopics,
              shown: filter.checked,
            });
            break;
          case LINK:
            newListFilters.push({
              name: LINK,
              items: linksQueryResult.data.links,
              fields: fieldsLinks,
              shown: filter.checked,
            });
            break;
          case ROUTE:
            newListFilters.push({
              name: ROUTE,
              items: routesQueryResult.data.routes,
              fields: { ...fieldsRoutes, ...fieldLanguage },
              shown: filter.checked,
            });
            break;
          default:
            break;
        }
      });
      newListFilters = filterByStatus(newListFilters, "shown", true);
      setListFilters(newListFilters);
    }
  }, [
    loading,
    error,
    filters,
    aboutMeQueryResult.data,
    projectsQueryResult.data,
    topicsQueryResult.data,
    linksQueryResult.data,
    routesQueryResult.data,
  ]);

  return {
    error,
    loading,
    listFilters,
    setListFilters,
  };
};
