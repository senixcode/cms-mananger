import React from "react";
import {
  fieldLanguage,
  fieldsAboutMe,
  fieldsLinks,
  fieldsProjects,
  fieldsRoutes,
  fieldsTopics,
} from "../componentes/helpers/fieldsCardsHome";
import { useListAll } from "../hooks/useListAll";
import { Cards } from "../componentes/containers/Cards";

export const ListAllPage = () => {
  const {
    dataAboutMe,
    dataLinks,
    dataProjects,
    dataRoutes,
    dataTopics,
    loadingAll,
    errorAll,
  } = useListAll();

  if (loadingAll) return <p>Loading Message</p>;
  if (errorAll) return <p>Error!!</p>;
  return (
    <>
      {/* About ME */}
      <Cards
        items={dataAboutMe.allAboutMe}
        field={{ ...fieldsAboutMe, ...fieldLanguage }}
      />
      {/* Projects */}
      <Cards
        items={dataProjects.projects}
        field={{ ...fieldsProjects, ...fieldLanguage }}
      />
      {/* Topics */}
      <Cards items={dataTopics.topics} field={fieldsTopics} />
      {/* Links */}
      <Cards items={dataLinks.links} field={fieldsLinks} />
      {/* Routes */}
      <Cards
        items={dataRoutes.routes}
        field={{ ...fieldsRoutes, ...fieldLanguage }}
      />
    </>
  );
};
