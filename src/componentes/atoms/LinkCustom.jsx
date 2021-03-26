import React from "react";

export const LinkCustom = ({ name, href }) => (
  <a href={href} className="card-link">
    {name}
  </a>
);
