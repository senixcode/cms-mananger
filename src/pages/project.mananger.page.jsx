import { ManangerTemplate } from "../componentes/template/Mananger";
import { useManangerPage } from "../hooks/useManangerPage";
import { types } from "../componentes/molecules/InputSwitch";
import { GET_PROJECTS_TEST } from "../graphql/querys/projectQuery";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "../graphql/mutation/projectMutation";
import { Loading } from "../componentes/atoms/Loading";
import { useQuery } from "@apollo/client";
import { GET_TOPICS_SELECT } from "../graphql/querys/topicsQuery";
import { useState } from "react";
import { GET_LINKS_SELECT } from "../graphql/querys/linksQuerys";

const title = "Project Mananger";

const form = [
  { type: types.TEXT, name: "title" },
  { type: types.TEXT, name: "titleSeo" },
  { type: types.TEXTAREA, name: "summary" },
  { type: types.TEXTAREA, name: "description" },
];
const selecteLanguage = {
  type: types.SELECT,
  name: "language",
  options: [
    { value: "EN", name: "en" },
    { value: "ES", name: "es" },
  ],
};
const get = {
  query: GET_PROJECTS_TEST,
  variables: {},
};

export const ProjectManangerPage = () => {
  const getTopics = useQuery(GET_TOPICS_SELECT);
  const getLinks = useQuery(GET_LINKS_SELECT);
  const [selectedTopicValue, setSelectedTopicValue] = useState([]);
  const [selectedLinkValue, setSelectedLinkValue] = useState([]);
  const editMultiSelectiones = (row) => {
    setSelectedTopicValue(JSON.parse(row.topics));
    setSelectedLinkValue(JSON.parse(row.links));
  };

  const {
    error,
    loading,
    data,
    handleSubmit,
    handleEdit,
    handleDelete,
    edit,
    setEdit,
  } = useManangerPage(
    form,
    get,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    editMultiSelectiones
  );
  const selectTopic = !getTopics.loading &&
    !getTopics.error && {
      type: types.MULTISELEC,
      options: getTopics.data.topics,
      name: "topics",
      state: {
        selectedValue: selectedTopicValue,
        setSelectedValue: setSelectedTopicValue,
      },
    };

  const selectLink = !getLinks.loading &&
    !getLinks.error && {
      type: types.MULTISELEC,
      options: getLinks.data.links,
      name: "links",
      state: {
        selectedValue: selectedLinkValue,
        setSelectedValue: setSelectedLinkValue,
      },
    };

  const SaveAddMultiSelectiones = () => ({
    topics: JSON.stringify(selectedTopicValue),
    links: JSON.stringify(selectedLinkValue),
  });

  if (error) return <p>Error get project graphql</p>;
  if (loading) return <Loading />;
console.log("projects",data.projects);
  return (
    <ManangerTemplate
      title={title}
      form={{
        inputs: [...form, selectTopic, selectLink, selecteLanguage],
        edit,
        setEdit,
        handleSubmit,
        SaveAddMultiSelectiones,
      }}
      table={{ items: [...data.projects], handleEdit, handleDelete }}
    />
  );
};
