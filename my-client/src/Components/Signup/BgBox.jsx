import React from "react";
import { Box, Image, Center, Link, Text } from "@chakra-ui/react";
import Logo from "../../Assets/mynet-home-img/logo-main.svg";
import CardHeading from "../Home/CardHeading";






const BgBox = ({ data, title, boxWidth = "60%", terms = false }) => {
  return (
    <Box
      background='#23a55b url("https://www.mynetdiary.com/images/bg-start-signup@1x.png") no-repeat center'
      h="100vh"
    >
      <Center py="1rem">
        <Image w="20%" textAlign="center" src={Logo} />
      </Center>
      <Box
        h="max-content"
        w={{ sm: '85%', md: '70%' }}
        m="auto"
        bg="white"
        shadow={
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        }
        borderRadius="1.5rem"
      >
        <CardHeading txtColor={"#268FD0"}>{title}</CardHeading>
        <Box w={boxWidth} m="auto">
          {data}
        </Box>
      </Box>
      {terms && (
        <Text py="2rem" textAlign="center">
          By signing up, you are agreeing to the
          <Link color="green" textDecoration="underline" to=".">
            Terms of Service
          </Link>
        </Text>
      )}
    </Box>
  );
};

export default BgBox;