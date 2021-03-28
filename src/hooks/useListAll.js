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

export const useListAll = () => {
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
    if (loading === false && error === false) {
      setListFilters([
        {
          name: ABOUTME,
          items: aboutMeQueryResult.data.allAboutMe,
          fields: { ...fieldsAboutMe, ...fieldLanguage },
          shown: true,
        },
        {
          name: PROJECT,
          items: projectsQueryResult.data.projects,
          fields: { ...fieldsProjects, ...fieldLanguage },
          shown: true,
        },
        {
          name: TOPIC,
          items: topicsQueryResult.data.topics,
          fields: fieldsTopics,
          shown: true,
        },
        {
          name: LINK,
          items: linksQueryResult.data.links,
          fields: fieldsLinks,
          shown: true,
        },
        {
          name: ROUTE,
          items: routesQueryResult.data.routes,
          fields: { ...fieldsRoutes, ...fieldLanguage },
          shown: true,
        },
      ]);
    }
  }, [
    loading,
    error,
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
    setListFilters
  };
};
