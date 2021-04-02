import { useMutation, useQuery } from "@apollo/client";
import { forEachFormRef } from "../componentes/containers/Form";
// mananger form, table and actions crud
export const useManangerPage = (form, get, saved, updated, deleted) => {
  const { query, variables } = get;
  const { error, loading, data } = useQuery(query, { variables });
  const optionsRefresh = OptionsRefresh(query, variables);
  const [Saved] = useMutation(saved, optionsRefresh);
  const [Updated] = useMutation(updated, optionsRefresh);
  const [Deleted] = useMutation(deleted, optionsRefresh);
  // saved and update dynamic
  const handleSubmit = (e, formRef, edit, setEdit) => {
    e.preventDefault();
    let input = {};
    if (edit.state) form = [{ name: "id" }, ...form];
    // parse and get values inputs -> parameters for sending
    forEachFormRef(form, formRef, (key, value) => (input[key] = value));
    if (edit.state) input.id = parseInt(input.id);
    input = { variables: { input } };
    edit.state ? Updated(input) : Saved(input);
    // reset edit
    setEdit({ state: false, data: {} });
    //clear form
    formRef.current.reset();
  };

  const handleDelete = (row) => {
    const { id } = row;
    Deleted({ variables: { id } });
  };

  return {
    error,
    loading,
    data,
    handleSubmit,
    handleDelete,
  };
};

const OptionsRefresh = (query, variables) => ({
  refetchQueries: [{ query, variables }],
  awaitRefetchQueries: true,
});
