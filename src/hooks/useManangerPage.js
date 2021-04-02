import { useMutation, useQuery } from "@apollo/client";
import { forEachFormRef } from "../componentes/containers/Form";
// mananger form, table and actions crud
export const useManangerPage = (form, get, add, update) => {
  const { query, variables } = get;
  const { error, loading, data } = useQuery(query, { variables });
  const [Save] = useMutation(add, {
    //automatic refresh
    refetchQueries: [{ query, variables }],
    awaitRefetchQueries: true,
  });
  const [Update] = useMutation(update, {
    //automatic refresh
    refetchQueries: [{ query, variables }],
    awaitRefetchQueries: true,
  });
  // formRef dynamic
  const handleSubmit = (e, formRef, edit, setEdit) => {
    e.preventDefault();
    let input = {};
    if (edit.state) form = [{name: "id" }, ...form];
    // parse and get values inputs -> parameters for sending
    forEachFormRef(form, formRef, (key, value) => (input[key] = value));
    if(edit.state) input.id = parseInt(input.id)
    input = { variables: {input}}
    edit.state ? Update(input) : Save(input);
    // reset edit
    setEdit({ state: false, data: {} });
    //clear form
    formRef.current.reset();
  };

  return {
    error,
    loading,
    data,
    handleSubmit,
  };
};
