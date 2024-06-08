import React from "react";
import { Image, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const TestimoCard = ({

  title = "",
  src = "",
  info = "",
  imgShadow = "",
  divShadow = "",
  imgWidth = "",
  imgHeight = "",
  divWidth = "",
  divHeight = "",
  path = ".",
  hoverRules = {},
  txtalign = "center",
  titleColor = "#0091ff",
  infoColor = "#324d77",
  midLine = false,

}) => {

  return (
    <Box
      p="1rem"
      boxShadow={divShadow}
      w={divWidth}
      h={divHeight}
      borderRadius={midLine ? "2rem" : ""}
    >
      <Image
        boxShadow={imgShadow}
        m="auto"
        w={imgWidth}
        h={imgHeight}
        src={src}
        borderRadius="15px"
      />
      <Link to={path}>
        <Text
          p="0.5rem"
          textAlign={txtalign}
          color={titleColor}
          fontSize={{ sm: "1.5rem", md: "1.8rem" }}
          textDecoration="none"
          _hover={hoverRules}
        >
          {title}
        </Text>
      </Link>
      {midLine ? (
        <Box py="0.6rem" borderBottom="2px solid grey" maxWidth={100} />
      ) : (
        ""
      )}
      <Box textAlign={txtalign}>
        <Text
          py="0.6rem"
          color={infoColor}
          fontSize={{ sm: "1rem", md: "1.3rem" }}
          lineHeight={"2rem"}
        >
          {info}
        </Text>
      </Box>
    </Box>
  );
};

export default TestimoCard;