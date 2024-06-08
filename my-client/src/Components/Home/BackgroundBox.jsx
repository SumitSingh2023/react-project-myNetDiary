import React from "react";
import {Box,Flex,Image,Heading,HStack,
} from "@chakra-ui/react";
import GplayStoreBox from "./GplayStoreBox";
import TopRating from "./TopRating";






const BackgroundBox = () => {
  return (
    <Box>
      <Flex
        bg= '#05963d url(https://assets.mynetdiary.com/images/texture-noise@1x.png) 0 0 repeat'
        justify="space-between"
        h={{ sm: "", md: "90vh" }}
        color="white"
        p="2rem 0"
      >
        <Box px="1rem" w="30%" marginLeft={8}>
          <Image  marginLeft={-12}
            transform={{ sm: "scale(0.6)", md: "scale(0.8)", lg: "" }}
            src={`https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-left@1x.png`}
          />
          <Heading as="h2" size={{ sm: "2xl", lg: "4xl" }} py="0.5rem">
            Be Healthy for Life!
          </Heading>
          <Heading as="h6" size={{ md: "md", lg: "lg" }} mt={4} color='#FCF8B3' fontFamily='inherit'>
            Your weight loss, diet, and nutrition assistant.
          </Heading>
          <Box mt={6} size={{ md: "md" }}>
            <GplayStoreBox navApple={`.`} navPlayStore={`.`} />
          </Box>
        </Box>
        <HStack w="35%" pos="relative">
          <Image
            pos="absolute"
            top="0"
            zIndex={10}
            src={`https://s3.amazonaws.com/img.mynetdiary.com/images/iphonex@1x.png`}
          />
          <Image
            pos="absolute"
            top="50%"
            left="70%"
            zIndex={20}
            transform="scale(0.7)"
            src={`https://s3.amazonaws.com/img.mynetdiary.com/images/iwatch@1x.png`}
          />
        </HStack>
        <Box w="30%">
          <Image
            src={`https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-right@1x.png`}
          />
        </Box>
      </Flex>
      <Box p="1rem" color="blue.600">
        <TopRating>Top Rated: 61,383 reviews abd counting</TopRating>
      </Box>
    </Box>
  );
};

export default BackgroundBox;
