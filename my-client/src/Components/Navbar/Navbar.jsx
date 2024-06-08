import React, { useState, useEffect } from "react";
import logo from "../../Assets/mynet-home-img/logo-main.svg";
import logo2 from "../../Assets/mynet-home-img/logo-dark.svg";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";
import { Box, Image, Stack, HStack, Flex,  Button} from "@chakra-ui/react";
import initialItems from "../../wrappers_data_store/navbarDropdownData";
import { FaBars } from "react-icons/fa";





const Navbar = () => {
  const [style, setStyle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navStyleFunc = () => {
    window.scrollY >= 110 ? setStyle(true) : setStyle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navStyleFunc);
  }, []);

  const handleMobile = () => {
    setIsOpen(!isOpen);
  };

  const itemProps = isOpen
    ? {
        w: "50%",
        bg: "white",
        color: "green.500",
        pos: "absolute",
        top: "70px",
        right: 0,
        display: "flex",
        flexDirection: "column",
      }
    : {
        display: { sm: "none", md: "block" },
        direction: "row",
        spacing: {sm: 7, xl: 12},
        pos: { md: "absolute", xl: "static" },
        left: { md: "50%", xl: '' },
        transform : {md: 'translate(-50%, 65%)', xl: 'none'},
        zIndex: 50,
      };

  const btnProps = isOpen
    ? {
        display: "block",
        w: "50%",
        p: "1rem",
        bg: "white",
        textAlign: "center",
      }
    : {
        display: { sm: "none", md: "block" },
      };


  return (
    <Flex
      bg={style ? "white" : "#23a55b"}
      justify="space-between"
      align="center"
      color={style ? "blue" : "white"}
      px={4}
      h={{ sm: "70px", md: "100px" }}
      pos="sticky"
      top={0}
      zIndex={100}
    >
      <Link to="/">
        <Image
          w={{ sm: "9rem", md: "12rem", lg: "15rem" }}
          src={style ? logo2 : logo}
        />
      </Link>

      <Stack {...itemProps} >
        {initialItems?.map((data) => {
          const {id, title, items} = data
          return (
            <Dropdowns key={id} title={title} items={items} />
          );
        })}
      </Stack>
      <Box display={{ sm: "block", md: "none" }} fontSize="2rem">
        <FaBars onClick={handleMobile} />
      </Box>
      <HStack spacing={4} {...btnProps} >
        <Link to={`/signup/${1}`}>
          <Button
            bg={isOpen ? "green" : "#f39c20"}
            size={{ sm: "sm", md: "md", xl: "lg" }}
            borderRadius="22px"
            _hover={{ bg: "#f39c20" }}
            color={style ? "white" : "white"}
          >
            SIGN UP
          </Button>
        </Link>
        <Link to={`/login`}>
          <Button
            variant="outline"
            size={{ sm: "sm", md: "md", xl: "lg" }}
            border="2px solid green"
            borderRadius="22px"
            color={isOpen ? "green.500" : style ? "blue" : "white"}
            _hover={{ bg: "" }}
          >
            SIGN IN
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
