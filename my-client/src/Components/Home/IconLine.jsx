import React from "react";
import { Image, SimpleGrid } from "@chakra-ui/react";



const IconLine = ({ icons }) => {
  return (
    <SimpleGrid columns={[4, 4, 7]} spacing='15px' m='0 auto'>
      {icons.map((elem) => {
        return <Image key={elem.id} src={elem.icon} transform='scale(0.6)' />;
      })}
    </SimpleGrid>
  );
};

export default IconLine;