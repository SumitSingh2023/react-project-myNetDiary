import React from "react";
import {Box} from "@chakra-ui/react";
import BgBox from "../Components/Signup/BgBox";
import MembershipData from "../Components/Signup/MembershipData";






const MemberShip = () => {
  return (
    <Box>
      <BgBox data={<MembershipData />} title="Membership" boxWidth ='90%' terms={true} />
    </Box>
  )
}

export default MemberShip;