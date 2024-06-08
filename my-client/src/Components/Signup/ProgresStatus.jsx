import React from 'react'

import { BsCheckLg } from "react-icons/bs";
import {Flex} from "@chakra-ui/react";



const ProgresStatus = ({children}) => {
  return (
    <Flex align="center" gap="1rem" border="2px dashed green" padding="1rem">
      <BsCheckLg color="green" />
      <span style={{ color: "#466118A" }}>{children}</span>
    </Flex>
  );
}

export default ProgresStatus