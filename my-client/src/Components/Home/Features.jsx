import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TestimoCard from "./TestimoCard";





const Features = (
  { featuresData = [], commonProps = {}, column = [1, 2, 3], spacings="40px" }
  
) => {
  return (
    <SimpleGrid columns={column} spacing={spacings} >
      {featuresData?.map((elem) => {
        const { id, src, title, desc, link } = elem;
        return (
          <TestimoCard
            key={id}
            src={src}
            title={title}
            info={desc}
            path={link}
            {...commonProps}
          />
        );
      })}
    </SimpleGrid>
  );
};


export default Features;