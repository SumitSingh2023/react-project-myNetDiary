import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import BgBox from "../Components/Signup/BgBox";
import WeightData from "../Components/Signup/WeightData";





const WeightPlan = () => {
  return (
    <Box >
      <BgBox data={<WeightData />} title="Sign Up: Your Weight plan" boxWidth={{sm: '85%', md: '60%'}} terms={true} />
    </Box>
  );
};

export default WeightPlan;
