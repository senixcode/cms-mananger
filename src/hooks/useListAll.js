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
  LINK,
  PROJECT,
  ROUTE,
  TOPIC,
} from "../componentes/helpers/filters";
import { filterByStatus } from "../componentes/helpers/filterByStatus";

export const useListAll = (filters) => {
  const {
    loading,
    error,
    aboutMeQueryResult,
    projectsQueryResult,
    topicsQueryResult,
    linksQueryResult,
    routesQueryResult,
  } = useQueryListAll();
  const [listFilters, setListFilters] = useState([]);

  useEffect(() => {
    if (loading === false && error === false && filters) {
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
      //newListFilters = newListFilters.filter(l => l.shown === true)
      newListFilters = filterByStatus(newListFilters, "shown", true);
      console.log(newListFilters);
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
