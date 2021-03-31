import { useMutation, useQuery } from "@apollo/client";
import { forEachFormRef } from "../componentes/containers/Form";

export const useManangerPage = (form, get, add) => {
  const { query, variables } = get;
  const { error, loading, data } = useQuery(query, { variables });
  const [createAboutme] = useMutation(add, {
    //automatic refresh
    refetchQueries: [{ query, variables }],
    awaitRefetchQueries: true,
  });
// formRef dynamic
  const handleSubmit = (e, formRef) => {
    e.preventDefault();
    let input = {};
    // parse and get -> parameters for sending
    forEachFormRef(form, formRef, (key, value) => (input[key] = value));
    //save
    createAboutme({ variables: { input } });
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
