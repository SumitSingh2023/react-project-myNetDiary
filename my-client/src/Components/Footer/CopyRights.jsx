import React from "react";
import { List, Flex, Text, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";





const CopyRights = () => {
  const hover = { textDecoration: "underline" };

  return (
    <Flex
      h="8rem"
      fontSize="1rem"
      color="#46618A"
      flexDirection={{sm: 'column', md: 'row'}}
      justify="space-between"
      align="center"
      p="1rem"
      border="1px solid grey"
    >
      <Text>Copyright © 2022 MyNetDiary Inc. All rights reserved.</Text>
      <List display="flex" justify="space-between" gap="1rem">
        <ListItem _hover={hover}>
          <Link to=".">Contact Us |</Link>
        </ListItem>
        <ListItem _hover={hover}>
          <Link to=".">FAQs |</Link>
        </ListItem>
        <ListItem _hover={hover}>
          <Link to=".">Privacy |</Link>
        </ListItem>
        <ListItem _hover={hover}>
          <Link to=".">Terms of Use </Link>
        </ListItem>
      </List>
    </Flex>
  );
};


export default CopyRights;