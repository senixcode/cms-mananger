import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PROJECTS } from "../graphql/querys/projectQuery";
import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
import { Card } from "../componentes/containers/Card";
import { fieldLanguage, fieldsAboutMe, fieldsLinks, fieldsProjects, fieldsRoutes, fieldsTopics } from "../componentes/helpers/fieldsCardsHome";
import { GET_TOPICS } from "../graphql/querys/topicsQuery";
import { GET_LINKS } from "../graphql/querys/linksQuerys";
import { GET_ROUTES } from "../graphql/querys/routesQuery";


export const ListAllPage = () => {
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
    error:errorTopics,
    data: dataTopics,
  } = useQuery(GET_TOPICS);

  const {
    loading: loadingLinks,
    error:errorLinks,
    data: dataLinks,
  } = useQuery(GET_LINKS);

  const {
    loading: loadingRoutes,
    error:errorRoutes,
    data: dataRoutes,
  } = useQuery(GET_ROUTES);

  if (loadingAboutme || loadingProjects || loadingTopics || loadingLinks || loadingRoutes) return <p>Loading Message</p>;
  if (errorAboutme || errorProjects || errorTopics || errorLinks || errorRoutes) return <p>Error!!</p>;


  return (
    <>
      <Cards
        items={dataAboutMe.allAboutMe}
        field={{ ...fieldsAboutMe, ...fieldLanguage }}
      />
      <Cards
        items={dataProjects.projects}
        field={{ ...fieldsProjects, ...fieldLanguage }}
      />
      <Cards
        items={dataTopics.topics}
        field={fieldsTopics}
      />

      <Cards
        items={dataLinks.links}
        field={fieldsLinks}
      />
      <Cards
        items={dataRoutes.routes}
          field={{ ...fieldsRoutes, ...fieldLanguage }}
      />
    </>
  );
};

const Cards = ({ items, field }) => {
  if (!items) return <p>Error items Cards</p>;
  return (
    <div className="row py-2">
      {items.map((item) => (
        <div key={item.id} className="p-1">
          <Card
            title={field.title ? item[field.title] : false}
            subtitle={item[field.subtitle]}
            language={field.language ? item[field.language]: false}
            description={field.description ? item[field.description] : false}
            links={field.links ? item[field.links] : false}
          />
        </div>
      ))}
    </div>
  );
};
