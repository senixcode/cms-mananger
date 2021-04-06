import { useQuery } from "@apollo/client";
import { useState } from "react";
import { types } from "../componentes/molecules/InputSwitch";
import { GET_LINKS_SELECT } from "../graphql/querys/linksQuerys";
import { GET_TOPICS_SELECT } from "../graphql/querys/topicsQuery";

export const useProject = () => {
  const getTopics = useQuery(GET_TOPICS_SELECT);
  const getLinks = useQuery(GET_LINKS_SELECT);
  const [selectedTopicValue, setSelectedTopicValue] = useState([]);
  const [selectedLinkValue, setSelectedLinkValue] = useState([]);
  const editMultiSelectiones = (row) => {
    setSelectedTopicValue(JSON.parse(row.topics));
    setSelectedLinkValue(JSON.parse(row.links));
  };
  const cleartMultiSelectiones = () => {
    setSelectedTopicValue([]);
    setSelectedLinkValue([]);
  };
  const selectTopic = !getTopics.loading &&
    !getTopics.error && {
      type: types.MULTISELEC,
      options: getTopics.data.topics,
      name: "topics",
      state: {
        selectedValue: selectedTopicValue,
        setSelectedValue: setSelectedTopicValue,
      },
    };

  const selectLink = !getLinks.loading &&
    !getLinks.error && {
      type: types.MULTISELEC,
      options: getLinks.data.links,
      name: "links",
      state: {
        selectedValue: selectedLinkValue,
        setSelectedValue: setSelectedLinkValue,
      },
    };

  const addSelectiones = () => ({
    topics: JSON.stringify(selectedTopicValue),
    links: JSON.stringify(selectedLinkValue),
  });

  const multiselect = {
    add:addSelectiones,
    edit:editMultiSelectiones,
    clear:cleartMultiSelectiones,
  }

  return {
      selectTopic,
      selectLink,
      multiselect
  }

}