import React from "react";
import { Box } from "@chakra-ui/react";
import BgBox from "../Components/Signup/BgBox";
import CreateAccData from "../Components/Signup/CreateAccData";






const CreateAccount = () => {
  return (
    <Box>
      <BgBox data={<CreateAccData />} title="Create Account" boxWidth={{sm: '85%', md: '60%'}} terms={true} />
    </Box>
  );
};


export default CreateAccount;