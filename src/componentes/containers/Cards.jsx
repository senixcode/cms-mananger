import React from "react" 
import { Card } from "../molecules/Card";
export const Cards = ({ items, field }) => {
  if (!items) return <p>Error items Cards</p>;
  return (
    <div className="row py-2">
      {items.map((item) => (
        <div key={item.id} className="p-1">
          <Card
            title={field.title ? item[field.title] : false}
            subtitle={item[field.subtitle]}
            language={field.language ? item[field.language] : false}
            description={field.description ? item[field.description] : false}
            links={field.links ? item[field.links] : false}
          />
        </div>
      ))}
    </div>
  );
};