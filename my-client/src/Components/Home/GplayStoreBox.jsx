import React from "react";

import { Image, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const GplayStoreBox = ({ navApple, navPlayStore }) => {
  return (
    <>
      <Grid px="1rem" templateColumns="repeat(2, 1fr)" gap={4}>
        <Link to={navApple}>
          <Image objectFit="cover" src={'https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg'} />
        </Link>
        <Link to={navPlayStore}>
          <Image objectFit="cover" src={'https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg'} />
        </Link>
      </Grid>
    </>
  );
};

export default GplayStoreBox;
