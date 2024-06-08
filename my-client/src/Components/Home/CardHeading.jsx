import React from "react";
import { Heading } from "@chakra-ui/react";





const CardHeading = ({children, txtColor='#0091ff'}) => {
  return (
    <Heading
      p="2rem 0"
      textAlign="center"
      as="h3"
      size={{ sm: "xl", md: "2xl", lg: "3xl" }}
      color={txtColor}
    >
      {children}
    </Heading>
  );
};

export default CardHeading;
