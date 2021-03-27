import React from "react";
import { Filters } from "../componentes/containers/Filters";
import { ListFilters } from "../componentes/containers/ListFilters";
import { useFilters } from "../hooks/useFilter";

export const HomePage = () => {
  const { filters, handleChangeFilter } = useFilters();
  return (
    <>
      <Filters filters={filters} handleChangeFilter={handleChangeFilter} />
      <ListFilters />
    </>
  );
};
