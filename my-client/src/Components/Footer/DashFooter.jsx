import React from "react";
import { Box, SimpleGrid, Text, Stack } from "@chakra-ui/react";
import { dashFooterLinkData } from "../../wrappers_data_store/footersLinkData";
import FooterLinksCard from "./FooterLinksCard";





const DashFooter = () => {
  return (
    <Box bg="rgb(59,131,2)" color="rgb(255, 255, 255)">
      <SimpleGrid columns={[2, 3, 5]} spacingX="2rem" m="0 1rem" p="1.5rem">
        <Stack spacing={5}>
          <Text >2022 MyNetDiary Inc.</Text>
          <Text>
            All rights reserved. MyNetDiary is a registered trademark of
            MyNetDiary Inc.
          </Text>
        </Stack>
        {dashFooterLinkData?.map((data) => {
          return (
            <Box height="" key={data.id} color="white">
              <FooterLinksCard items={data.items} />
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default DashFooter;
