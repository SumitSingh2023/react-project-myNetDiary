import React from "react";
import {Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";





const CardLinkBtn = ({children, path='.', color='green'}) => {
  return (
    <Link to={path}>
      <Button
        rightIcon={<MdNavigateNext />}
        p="2rem"
        colorScheme={color}
        variant="outline"
        borderRadius="3rem"
      >
        {children}
      </Button>
    </Link>
  );
};

export default CardLinkBtn;