import { ManangerTemplate } from "../componentes/template/Mananger";
import { useManangerPage } from "../hooks/useManangerPage";
import { types } from "../componentes/molecules/InputSwitch";
import { GET_LINKS } from "../graphql/querys/linksQuerys";
import {
  ADD_LINK,
  DELETE_LINK,
  UPDATE_LINK,
} from "../graphql/mutation/linkMutation";

const title = "Link Mananger";
const form = [
  { type: types.TEXT, name: "name" },
  { type: types.TEXT, name: "href" },
  { type: types.TEXT, name: "icon" },
];
const get = {
  query: GET_LINKS,
  variables: {},
};

export const LinkManangerPage = () => {
  const {
    error,
    loading,
    data,
    handleSubmit,
    handleEdit,
    handleDelete,
    edit,
    setEdit,
  } = useManangerPage(form, get, ADD_LINK, UPDATE_LINK, DELETE_LINK);

  if (error) return <p>Error get topic graphql</p>;
  if (loading) return <p>Loading topic graphql...</p>;

  return (
    <ManangerTemplate
      title={title}
      form={{ inputs: [...form], edit, setEdit, handleSubmit }}
      table={{ items: [...data.links], handleEdit, handleDelete }}
    />
  );
};
