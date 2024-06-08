import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";







const OfferMember = ({ title, desc, handleClick }) => {
  return (
    <Stack
      bg="white"
      border="2px solid #ECB31A"
      textAlign="center"
      p="0.5rem"
      spacing="1rem"
    >
      <Text fontSize={{ sm: "1.2rem", md: "1.5rem" }}>{title}</Text>
      <Text fontSize="1rem">{desc}</Text>
      <Button onClick={handleClick} colorScheme="blue">
        CONTINUE
      </Button>
    </Stack>
  );
};

export default OfferMember;
