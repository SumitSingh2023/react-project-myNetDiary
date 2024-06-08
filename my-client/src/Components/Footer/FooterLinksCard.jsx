import React from "react";
import { Link } from "react-router-dom";
import { UnorderedList, ListItem } from "@chakra-ui/react";




const FooterLinksCard = ({ items }) => {
  return (
    <UnorderedList spacing={3}>
      {items?.map((e, index) => {
        return (
          <ListItem
            key={index + 1}
            _hover={{ textDecoration: "underline" }}
            fontSize="1.1rem"
          >
            <Link to={e.links}>{e.elem}</Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default FooterLinksCard;
