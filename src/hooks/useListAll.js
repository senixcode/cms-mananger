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
    console.log(loading, error);
    if (loading === false && error === false) {
      setListFilters([
        {
          name: "Aboutme",
          items: aboutMeQueryResult.data.allAboutMe,
          fields: { ...fieldsAboutMe, ...fieldLanguage },
          shown: true,
        },
        {
          name: "Project",
          items: projectsQueryResult.data.projects,
          fields: { ...fieldsProjects, ...fieldLanguage },
          shown: true,
        },
        {
          name: "Topic",
          items: topicsQueryResult.data.topics,
          fields: fieldsTopics,
          shown: true,
        },
        {
          name: "Link",
          items: linksQueryResult.data.links,
          fields: fieldsLinks,
          shown: true,
        },
        {
          name: "Route",
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
  };
};
