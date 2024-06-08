import React from "react";

import { HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { mediaIconsData } from "../../wrappers_data_store/iconsData";




const MediaStrips = () => {
  return (
    <HStack spacing={{sm: 2, lg: 4}} justify='center'>
      {mediaIconsData.map((elem) => {
        return (
          <Box
            key={elem.id}
            border="1px solid grey"
            p={{sm: '0.7rem', lg: '1rem'}}
            borderRadius="full"
            _hover={{
              color: elem.colors,
              cursor: "pointer",
              border: `1px solid ${elem.colors}`,
            }}
          >
            <Link to={elem.links}>{elem.icons}</Link>
          </Box>
        );
      })}
    </HStack>
  )
}

export default MediaStrips;