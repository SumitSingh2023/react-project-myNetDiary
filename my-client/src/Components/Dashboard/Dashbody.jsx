import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";




const Dashbody = () => {
  return (
    <Box
      display="flex"
      flexDirection='column'
      placeItems='center'
      border="3px solid green"
      gap='2rem'
      p='2rem'
    >
      <Heading as="h2" size="xl">
        Dashboard
      </Heading>
      <Image src="https://media.tenor.com/8tbLhifgyEEAAAAC/excited.gif" transform='scale(0.8)' />
    </Box>
  );
};

export default Dashbody;