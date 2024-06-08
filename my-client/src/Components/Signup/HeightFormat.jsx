import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
import { footInchHeight } from "./algorithm.js";





const HeightFormat = ({ handleChange, heightValue, heightName }) => {
  return (
    <Box>
      <Select
        onChange={handleChange}
        value={heightValue}
        name={heightName}
        variant="flushed"
      >
        {footInchHeight()}
      </Select>
    </Box>
  );
};

export default HeightFormat;
