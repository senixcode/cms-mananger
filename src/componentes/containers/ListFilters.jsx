import { useListAll } from "../../hooks/useListAll";
import { Cards } from "./Cards";

export const ListFilters = ({ filters }) => {
  const { error, loading, listFilters } = useListAll(filters);

  if (error) return <p>Error!!</p>;
  if (loading) return <p>Loading</p>;

  return (
    <>
      {!error && !loading && listFilters.length > 0 ? (
        listFilters.map((filter, index) =>  (
          <Cards key={index} items={filter.items} field={filter.fields} />
        ))
      ) : (
        <p> Without filters</p>
      )}  
    </>
  );
};
