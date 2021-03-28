import { useState } from "react";
import {
  setFilterStorage,
  validateFiltersStorage,
} from "../componentes/helpers/filters";
import { useListAll } from "./useListAll";

export const useFilters = () => {
  const [filters, setFilters] = useState(validateFiltersStorage());
  const { error, loading, listFilters, setListFilters } = useListAll();
  const handleChangeFilter = async (filter) => {
    const newFilters = await Promise.all(
      filters.map((f) =>
        f.name === filter.name ? { ...f, checked: filter.checked } : f
      )
    );
    const newlistFilters =
      !error &&
      !loading &&
      (await Promise.all(
        listFilters.map((l) =>
          l.name === filter.name ? { ...l, shown: filter.checked } : l
        )
      ));
    !error && !loading && setListFilters(newlistFilters);
    setFilterStorage(newFilters);
    setFilters(newFilters);
  };

  return {
    filters,
    handleChangeFilter,
  };
};
