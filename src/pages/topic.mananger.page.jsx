import { ManangerTemplate } from "../componentes/template/Mananger";
import { useManangerPage } from "../hooks/useManangerPage";
import { useState } from "react";
import { types } from "../componentes/molecules/InputSwitch";
import {
  ADD_TOPIC,
  DELETE_TOPIC,
  UPDATE_TOPIC,
} from "../graphql/mutation/topicMutation";
import { GET_TOPICS } from "../graphql/querys/topicsQuery";

const title = "Topic Mananger";

const form = [{ type: types.TEXT, name: "name" }];

const get = {
  query: GET_TOPICS,
  variables: {},
};

export const TopicManangerPage = () => {
  const { error, loading, data, handleSubmit, handleDelete } = useManangerPage(
    form,
    get,
    ADD_TOPIC,
    UPDATE_TOPIC,
    DELETE_TOPIC
  );
  const [edit, setEdit] = useState({
    state: false,
    data: {},
  });

  if (error) return <p>Error get topic graphql</p>;
  if (loading) return <p>Loading topic graphql...</p>;

  const handleEdit = (row) => {
    const { __typename, ...data } = row;
    console.log("handleEdit", data);
    setEdit({
      state: true,
      data,
    });
  };
  console.log(data);
  return (
    <ManangerTemplate
      title={title}
      form={{ inputs: [...form], edit, setEdit, handleSubmit }}
      table={{ items: [...data.topics], handleEdit, handleDelete }}
    />
  );
};
