import { useListAll } from "../../hooks/useListAll";
import { Cards } from "./Cards";

export const ListFilters = ({ filters }) => {
  const { error, loading, listFilters } = useListAll();

  if (error) return <p>Error!!</p>;
  if (loading) return <p>Loading</p>;

  return (
    <>
      {!error &&
        !loading &&
        listFilters.map((filter,index) => (
          <Cards key={index} items={filter.items} field={filter.fields} />
        ))}
    </>
  );
};
