import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image, Flex, Stack, Text } from "@chakra-ui/react";
import CardLinkBtn from "./CardLinkBtn";




const ImageCarousel = ({carouselData}) => {
  return (
    <Carousel>
      {carouselData?.map((elem) => {
        const { id, src, name, benefit, qoute } = elem;
        return (
          <Flex
            display={{ sm: "block", md: "flex" }}
            key={id}
            w="90%"
            m="3rem auto"
            gap="2rem"
            justify="space-evenly"
          >
            <Image
              boxSize={{ sm: "200px", md: "400px" }}
              objectFit="contain"
              src={src}
            />
            <Stack
              maxW={{ sm: "50%", md: "" }}
              color="white"
              spacing={8}
              p="1rem 0"
              m="0 auto"
              textAlign={{ sm: "center", md: "left" }}
            >
              <Text fontSize={{ sm: "2rem", md: "3rem" }}>{name}</Text>
              <Text fontSize={{ sm: "1.3rem", md: "1.6rem" }}>{benefit}</Text>
              <Text fontSize={{ sm: "1.2rem", md: "1.5rem" }}>{qoute}</Text>
              <CardLinkBtn path="." color="white">
                MORE FEATURES
              </CardLinkBtn>
            </Stack>
          </Flex>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;