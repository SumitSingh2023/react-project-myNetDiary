import React from "react";
import { Text, Container } from "@chakra-ui/react";





const QuoteBox = ({ children}) => {
  return (
    <Container maxWidth="80%" textAlign='center'>
      <Text
        color="#55599f"
        fontWeight="600"
        fontSize={{ sm: "1.3rem", md: "2rem" }}
      >
        {children}
      </Text>
    </Container>
  );
};

export default QuoteBox;