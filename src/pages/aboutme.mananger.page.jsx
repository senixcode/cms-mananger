import { ManangerTemplate } from "../componentes/template/Mananger";
import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
import { ADD_ABOUTME, DELETE_ABOUTME, UPDATE_ABOUTME } from "../graphql/mutation/aboutMeMutation";
import { useManangerPage } from "../hooks/useManangerPage";
import { useState } from "react";
import { types } from "../componentes/molecules/InputSwitch";

const title = "AboutMe Mananger";

const form = [
  { type: types.TEXTAREA, name: "name" },
  {
    type: types.SELECT,
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
  const { error, loading, data, handleSubmit, handleDelete } = useManangerPage(
    form,
    get,
    ADD_ABOUTME,
    UPDATE_ABOUTME,
    DELETE_ABOUTME
  );
  const [edit, setEdit] = useState({
    state: false,
    data: {},
  });
  
  if (error) return <p>Error get aboutme graphql</p>;
  if (loading) return <p>Loading aboutme graphql...</p>;

  const handleEdit = (row) => {
    const { __typename, ...data } = row;
    setEdit({
      state: true,
      data,
    });
  };

  return (
    <ManangerTemplate
      title={title}
      form={{ inputs: [...form], edit, setEdit, handleSubmit }}
      table={{ items: [...data.allAboutMe], handleEdit, handleDelete }}
    />
  );
};
