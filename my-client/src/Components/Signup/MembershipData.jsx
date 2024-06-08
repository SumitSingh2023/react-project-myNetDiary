import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,Text,HStack,Button,List,Image,ListItem,Flex,
  Heading,useToast,ListIcon,
} from "@chakra-ui/react";

import { MdDone } from "react-icons/md";
import OfferMember from "./OfferMember";
import BackButton from "./BackButton";


const ListElem = ({ children }) => {
  return (
    <ListItem>
      <ListIcon as={MdDone} color="#ECB31A" fontWeight="600" />
      {children}
    </ListItem>
  );
};



// **

const MembershipData = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handlePlans = () => {
    toast({
      title: `Thanks for subscribing plan`,
      position: "top",
      isClosable: true,
    });
    navigate(`/dashboard`)
  };

  const handleFreeMember = () => {
    navigate(`/dashboard`);
  };

  return (
    <Box>
      <Flex display={{ sm: "column", lg: "flex" }} gap="2rem">
        <Box bg="#FFE399" p="1rem" w={{ sm: "90%", lg: "60%" }} m="0 auto">
          <Heading as="h3" size="md" textAlign="center">
            Achieve your goals with Premium
          </Heading>
          <Text textAlign="center" mt="1.5rem">
            MyNetDiary <strong style={{ color: "#ECB31A" }}>Premium</strong>
            members report losing
            <strong> 3 times more </strong> weight than free users!
          </Text>
          <List spacing={3} mt="1.5rem">
            <ListElem>
              Lose weight faster and smarter with daily feedback and advice;
            </ListElem>
            <ListElem>
              Achieve long lasting results with AutoPilot and detailed Macro
              tracking;
            </ListElem>
            <ListElem>
              Premium Recipes, smart diet planning and tracking tools will guide
              you toward success;
            </ListElem>
          </List>

          <HStack
            justify="center"
            gap={{ sm: "1rem", lg: "2rem" }}
            m="2rem auto"
          >
            <Box pos="relative">
              <Image
                src="https://s3.amazonaws.com/img.mynetdiary.com/signup/ribbon.png"
                pos="absolute"
                top="0"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={10}
              />
              <OfferMember
                title="12 months"
                desc="$60 ( only $5 / month )"
                handleClick={handlePlans}
              />
            </Box>
            <Box>
              <OfferMember
                title="1 month"
                desc="$9 / month"
                handleClick={handlePlans}
              />
            </Box>
          </HStack>
          <Text color="grey" textAlign="center">
            Experience the entire program risk-free - two weeks money-back
            guarantee for our new users
          </Text>
        </Box>

        <Box
          bg="#F2F2F2"
          textAlign="center"
          p="1rem"
          w={{ sm: "90%", lg: "35%" }}
          m="0 auto"
        >
          <Heading as="h3" size="md">
            Free Membership
          </Heading>
          <List
            spacing={3}
            mt="1.5rem"
            textAlign={{ sm: "center", lg: "left" }}
          >
            <ListElem>Diet planning</ListElem>
            <ListElem>Food logging</ListElem>
            <ListElem>Exercise tracking</ListElem>
            <ListElem>Weight tracking</ListElem>
          </List>
          <Button onClick={handleFreeMember} colorScheme="blue" mt="2rem">
            CONTINUE
          </Button>
        </Box>
      </Flex>

      <Flex justify="center" align="center">
        <Text>Secured by</Text>
        <Image
          src="https://s3.amazonaws.com/img.mynetdiary.com/signup/pp-logo.png"
          transform="scale(0.5)"
        />
      </Flex>

      <Box>
        <BackButton />
      </Box>
    </Box>
  );
};

export default MembershipData;
