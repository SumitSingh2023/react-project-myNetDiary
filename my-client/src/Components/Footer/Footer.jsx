import React from "react";
import { Link } from "react-router-dom";
import {
  Flex, Box, Image, Text, Heading, Stack, SimpleGrid,
} from "@chakra-ui/react";

import { footerLinkData } from "../../wrappers_data_store/footersLinkData";
import { myTexture } from "../Home/MyTexture";
import GplayStoreBox from "../Home/GplayStoreBox";
import RankingStars from "../Home/RankingStars";
import FooterLinksCard from "./FooterLinksCard";
import MediaStrips from "./MediaStrips";
import CopyRights from "./CopyRights";
import texture from "../../Assets/mynet-home-img/pattern-grunge-400x400.jpg";
import myNetDiaryLogo from "../../Assets/mynet-home-img/logo-dark.svg";




const smallScreenChange = (display) => {
  return (
    <Stack display={display} spacing="2rem">
      <GplayStoreBox navApple="." navPlayStore="." />
      <Stack direction={{ md: "column", lg: "row" }} justify="space-evenly">
        <RankingStars rating_value="4.8" />
        <Text>• 61,383 Ratings</Text>
      </Stack>
      <MediaStrips />
    </Stack>
  );
};





const Footer = () => {
  const specs = myTexture(texture);

  return (
    <Box {...specs}>
      <Flex gap={8} display={{sm: 'block', md:  'flex'}}>
        <Stack w="30%" spacing="2rem" p="1rem">
          <Link to="/">
            <Image src={myNetDiaryLogo} objectFit="contain" />
          </Link>
          {smallScreenChange({ sm: "none", md: "block" })}
        </Stack>

        <SimpleGrid
          columns={{ sm: "2", md: "2", lg: "4" }}
          spacing="2rem"
          p="1.5rem"
        >
          {footerLinkData?.map((data) => {
            return (
              <Box key={data.id} color="#46618A">
                <Heading as="h4" size="md" mb={8}>
                  {data.title}
                </Heading>
                <FooterLinksCard items={data.items} />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
      <Box w="50%" mt="3rem">
        {smallScreenChange({ sm: "block", md: "none" })}
      </Box>
      <Box mt="3rem">
        <CopyRights />
      </Box>
    </Box>
  );
};

export default Footer;