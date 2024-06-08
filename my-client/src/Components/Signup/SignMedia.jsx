import React from 'react'
import { Button, Stack } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";



const SignMedia = () => {
  return (
    <Stack spacing='3rem'>
        <Button colorScheme="facebook" leftIcon={<FaFacebook />} py='1.5rem' >
          SIGN UP WITH FACEBOOK
        </Button>
        <Button colorScheme="teal" leftIcon={<FaGoogle />} py='1.5rem' >
          SIGN UP WITH GOOGLE
        </Button>
        <Button colorScheme="black" bg="black" leftIcon={<FaApple />} py='1.5rem' >
          SIGN UP WITH APPLE
        </Button>
    </Stack>
  )
}

export default SignMedia