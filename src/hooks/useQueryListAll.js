import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
import { GET_LINKS } from "../graphql/querys/linksQuerys";
import { GET_PROJECTS } from "../graphql/querys/projectQuery";
import { GET_ROUTES } from "../graphql/querys/routesQuery";
import { GET_TOPICS } from "../graphql/querys/topicsQuery";

export const useQueryListAll = (language) => {
  const aboutMeQueryResult = useQuery(GET_ABOUTME,{variables:{param:language}});
  const projectsQueryResult = useQuery(GET_PROJECTS,{variables:{param:language}});
  const topicsQueryResult = useQuery(GET_TOPICS);
  const linksQueryResult = useQuery(GET_LINKS);
  const routesQueryResult = useQuery(GET_ROUTES,{variables:{param:language}});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (
      aboutMeQueryResult.loading === false &&
      projectsQueryResult.loading  === false &&
      topicsQueryResult.loading === false &&
      linksQueryResult.loading === false &&
      routesQueryResult.loading === false
    ) {
      //finish loading everything
      setLoading(false);
    }
  }, [
    aboutMeQueryResult.loading,
    projectsQueryResult.loading,
    topicsQueryResult.loading,
    linksQueryResult.loading,
    routesQueryResult.loading,
  ]);

  useEffect(() => {
    if (
      aboutMeQueryResult.error &&
      projectsQueryResult.error &&
      topicsQueryResult.error &&
      linksQueryResult.error &&
      routesQueryResult.error
    ) {
      //finish loading all the errores
      setError(true);
    }
  }, [
    aboutMeQueryResult.error,
    projectsQueryResult.error,
    topicsQueryResult.error,
    linksQueryResult.error,
    routesQueryResult.error,
  ]);

  return {
    loading,
    error,
    aboutMeQueryResult,
    projectsQueryResult,
    topicsQueryResult,
    linksQueryResult,
    routesQueryResult,
  };
};
