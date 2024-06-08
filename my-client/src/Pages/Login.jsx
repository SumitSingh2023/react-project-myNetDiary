import React, {useState, useEffect} from "react";
import { Box, Text, Stack, Image, Center } from "@chakra-ui/react";
import LoginData from "../Components/Login/LoginData";
import Logo from "../Assets/mynet-home-img/logo-main.svg";
import CardHeading from "../Components/Home/CardHeading";
import { getUserData } from "../ApiReq/Api";

import CopyRights from "../Components/Footer/CopyRights";
import GplayStoreBox from "../Components/Home/GplayStoreBox";
import RankingStars from "../Components/Home/RankingStars";






const Login = () => {
  const [signupData, setSignupData] = useState([]);

  useEffect(() => {
    getUserData()
      .then((data) => setSignupData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      background='#23a55b url("https://www.mynetdiary.com/images/bg-start-signup@1x.png") no-repeat center'
      h="100vh"
    >
      <Center py="1rem">
        <Image w="20%" textAlign="center" src={Logo} />
      </Center>
      <Box
        h="max-content"
        w="70%"
        m="0 auto"
        bg="white"
        shadow={
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        }
        borderRadius="1.5rem"
      >
        <CardHeading txtColor={"#268FD0"}>Sign In</CardHeading>
        <LoginData signupData={signupData}/>
      </Box>

      <Box mt="3rem" textAlign="center">
        <Text
          color="#46618A"
          fontSize={{ sm: "1.4rem", lg: "1.8rem" }}
          p="2rem"
        >
          Download Free MyNetDiary App
        </Text>
        <Box m="auto" w="40%">
          <GplayStoreBox navApple="." navPlayStore="." />
        </Box>
        <Stack spacing={2} m="2rem" justify="center" align="center">
          <Box fontSize={{ sm: "1.5rem", lg: "2rem" }}>
            <RankingStars rating_value="" />
          </Box>
          <Text color="#46618A" fontSize={{ sm: "1.2rem", lg: "1.5rem" }}>
            50,907 reviews & counting
          </Text>
        </Stack>
      </Box>
      <CopyRights />
    </Box>
  );
};

export default Login;