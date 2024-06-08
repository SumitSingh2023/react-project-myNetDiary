import React from "react";

import { Box} from "@chakra-ui/react";
import BgBox from "../Components/Signup/BgBox";
import AboutData from "../Components/Signup/AboutData";




const AboutYourself = () => {
  return (
    <Box>
      <BgBox data={<AboutData />} title="Tell Us About Yourself" boxWidth={{sm: '85%', md: '60%'}} terms={true} />
    </Box>
  );
};

export default AboutYourself;
