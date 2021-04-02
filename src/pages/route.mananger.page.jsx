import { ManangerTemplate } from "../componentes/template/Mananger";
import { useManangerPage } from "../hooks/useManangerPage";
import { types } from "../componentes/molecules/InputSwitch";
import { GET_ROUTES } from "../graphql/querys/routesQuery";
import { ADD_ROUTE, DELETE_ROUTE, UPDATE_ROUTE } from "../graphql/mutation/routeMutation";

const title = "Route Mananger";

const form = [
  { type: types.TEXT, name: "path" },
  { type: types.TEXT, name: "title" },
  { type: types.TEXTAREA, name: "description" },
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
  query: GET_ROUTES,
  variables: { param: null },
};

export const RouteManangerPage = () => {
  const {
    error,
    loading,
    data,
    handleSubmit,
    handleEdit,
    handleDelete,
    edit,
    setEdit,
  } = useManangerPage(form, get, ADD_ROUTE, UPDATE_ROUTE, DELETE_ROUTE);

  if (error) return <p>Error get route graphql</p>;
  if (loading) return <p>Loading route graphql...</p>;

  return (
    <ManangerTemplate
      title={title}
      form={{ inputs: [...form], edit, setEdit, handleSubmit }}
      table={{ items: [...data.routes], handleEdit, handleDelete }}
    />
  );
};
