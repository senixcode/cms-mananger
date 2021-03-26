import React from "react";
import { LinkCustom } from "../atoms/LinkCustom";

export const Card = ({ title, subtitle, description, links,language }) => {
  return (
    <div className="card" style={{ maxWidth: "16em" }}>
      <div className="card-body">
        <Title title={title}/>
        <h6 className="card-subtitle mb-2 text-muted">{!language ? subtitle: `${subtitle} - ${language}` }</h6>
        <Description description={description} />
        <Links links={links} />
      </div>
    </div>
  );
};

const Title = ({ title }) => {
  if (!title) return <span></span>;
  return <h5 className="card-title">{title}</h5>
};

const Description = ({ description }) => {
  if (!description) return <span></span>;
  return <p className="card-text">{description}</p>;
};

const Links = ({ links }) => {
  if (!links) return <span></span>;
  return (
    <>
      {links.map(({ id, name, href }) => (
        <LinkCustom key={id} name={name} href={href} />
      ))}
    </>
  );
};
