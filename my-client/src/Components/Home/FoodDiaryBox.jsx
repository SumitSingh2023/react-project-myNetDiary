import React from "react";
import {
  Box,SimpleGrid,Text,Stack,Image,Button,
} from "@chakra-ui/react";




const FoodDiaryBox = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} m="0 auto" spacing="40px">
      <Stack spacing="20px " textAlign={{sm: 'center', lg: 'left'}}>
        <Text color="white" fontSize={{ sm: "2rem", md: "3rem", lg: "4rem" }}>
          Start Your Free Food Diary Today
        </Text>
        <Button
          colorScheme="green"
          borderRadius="35px"
          w='8rem'
          p='2rem'
          border="2px solid #c93e30"
          fontSize="20px"
        >
          SIGN UP
        </Button>
      </Stack>
      <Box>
        <Image
          src={
            "https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-your-free--devices@1x.png?v07092020"
          }
        />
      </Box>
    </SimpleGrid>
  );
};

export default FoodDiaryBox;