import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md";
import { HStack, Flex, Text } from "@chakra-ui/react";






const RankingStars = ({ rating_value }) => {
  return (
    <Flex gap='6px'>
      <HStack color="#fb9b22">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <MdStarHalf />
      </HStack>
      <Text>{rating_value}</Text>
    </Flex>
  );
};

export default RankingStars;