import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import RankingStars from "./RankingStars";
import {
  Box,Text,HStack,
} from "@chakra-ui/react";





const TopRating = ({children}) => {

  return (
    <Box>
      <Text fontSize={{sm: '0.8rem' , md: '1rem', lg: '1.3rem'}}>
        {children}
      </Text>
      <HStack
        spacing={1}
        mt="1rem"
        fontSize={{sm: '0.8rem' , md: '1rem', lg: '1.2rem'}}
      >
        <AiFillApple />
        <RankingStars rating_value="4.8" />
        <BsThreeDotsVertical />
        <DiAndroid />
        <RankingStars rating_value="4.6" />
      </HStack>
    </Box>
  );
};


export default TopRating;