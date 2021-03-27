import { useListAll } from "../../hooks/useListAll";
import {
  fieldLanguage,
  fieldsAboutMe,
  fieldsLinks,
  fieldsProjects,
  fieldsRoutes,
  fieldsTopics,
} from "../helpers/fieldsCardsHome";
import { Cards } from "./Cards";

export const ListFilters = ({ filters }) => {
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
      <Cards
        items={dataAboutMe.allAboutMe}
        field={{ ...fieldsAboutMe, ...fieldLanguage }}
      />
      <Cards
        items={dataProjects.projects}
        field={{ ...fieldsProjects, ...fieldLanguage }}
      />
      <Cards items={dataTopics.topics} field={fieldsTopics} />
      <Cards items={dataLinks.links} field={fieldsLinks} />
      <Cards
        items={dataRoutes.routes}
        field={{ ...fieldsRoutes, ...fieldLanguage }}
      />
    </>
  );
};
