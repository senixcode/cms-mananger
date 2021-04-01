import { ManangerTemplate } from "../componentes/template/Mananger";
import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
import { ADD_ABOUTME } from "../graphql/mutation/aboutMeMutation";
import { useManangerPage } from "../hooks/useManangerPage";
import { useState } from "react";

const title = "AboutMe Mananger";

const form = [
  { type: "textarea", name: "name" },
  {
    type: "select",
    name: "language",
    options: [
      { value: "EN", name: "en" },
      { value: "ES", name: "es" },
    ],
  },
];

const get = {
  query: GET_ABOUTME,
  variables: { param: null },
};

export const AboutMeManangerPage = () => {
  const { error, loading, data, handleSubmit } = useManangerPage(
    form,
    get,
    ADD_ABOUTME
  );
  const [edit, setEdit] = useState({
    state: false,
    data: {},
  });
  if (error) return <p>Error get aboutme graphql</p>;
  if (loading) return <p>Loading aboutme graphql...</p>;
  const handleEdit = (row) => {
    const {name, language} = row
    setEdit({
      state: true,
      data: {name,language}
    });
  };
  return (
    <ManangerTemplate
      title={title}
      form={{ inputs: [...form], edit, setEdit, handleSubmit }}
      table={{ items: [...data.allAboutMe], handleEdit }}
    />
  );
};
