import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
import { GET_LINKS } from "../graphql/querys/linksQuerys";
import { GET_PROJECTS } from "../graphql/querys/projectQuery";
import { GET_ROUTES } from "../graphql/querys/routesQuery";
import { GET_TOPICS } from "../graphql/querys/topicsQuery";
import { useQuery } from "@apollo/react-hooks";

export const useListAll = () => {
  const {
    loading: loadingAboutme,
    error: errorAboutme,
    data: dataAboutMe,
  } = useQuery(GET_ABOUTME);
  const {
    loading: loadingProjects,
    error: errorProjects,
    data: dataProjects,
  } = useQuery(GET_PROJECTS);

  const {
    loading: loadingTopics,
    error: errorTopics,
    data: dataTopics,
  } = useQuery(GET_TOPICS);

  const {
    loading: loadingLinks,
    error: errorLinks,
    data: dataLinks,
  } = useQuery(GET_LINKS);

  const {
    loading: loadingRoutes,
    error: errorRoutes,
    data: dataRoutes,
  } = useQuery(GET_ROUTES);

  let loadingAll = false;
  let errorAll = false;

  if (
    loadingAboutme ||
    loadingProjects ||
    loadingTopics ||
    loadingLinks ||
    loadingRoutes
  )
    loadingAll = true;
  if (errorAboutme || errorProjects || errorTopics || errorLinks || errorRoutes)
    errorAll = true;

  return {
    dataAboutMe,
    dataProjects,
    dataTopics,
    dataLinks,
    dataRoutes,
    loadingAll,
    errorAll,
  };
};
