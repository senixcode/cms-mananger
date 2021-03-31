import { useMutation, useQuery } from "@apollo/client";
import { forEachFormRef } from "../componentes/containers/Form";

export const useManangerPage = (form,get,add) => {
const {query, variables} = get
     const { error, loading, data } = useQuery(query, {variables});
  const [createAboutme] = useMutation(add,{
    refetchQueries: [{ query, variables}],
    awaitRefetchQueries: true,
  });

  const handleSubmit = (e, formRef) => {
    e.preventDefault();
    let input = {};
    forEachFormRef(form, formRef, (key, value) => (input[key] = value));
    createAboutme({ variables:{input} });
    formRef.current.reset();
  };

  return {
    error,
    loading,
    data,
    handleSubmit
  }
}