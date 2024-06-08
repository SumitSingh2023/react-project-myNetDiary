import React, { useState } from "react";

import {
  Box,Link,Flex,Text,Checkbox,InputGroup,Stack,InputRightElement,
  Button,FormControl,FormLabel,Input,useToast,
} from "@chakra-ui/react";

import { warning, success } from "../Signup/validations";
import { FaMobileAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import SignMedia from "../Signup/SignMedia";
import { inpReqErr } from "../Signup/validations";
import { useNavigate } from "react-router-dom";




const LoginData = ({ signupData }) => {
  const [pwdShow, setpwdShow] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const toast = useToast();
  const isEmailReqErr = inpReqErr(input.email);
  const isPwdReqErr = inpReqErr(input.password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const isAuthorised = () => {
    return signupData.some(
      (elem) => elem.email === input.email && elem.password === input.password
    );
  };

  const handleSignIn = () => {
    if (isEmailReqErr && isPwdReqErr) {
      warning("Please enter email & password", toast);
    } else if (isAuthorised()) {
      success("Login successfull", toast);
      setTimeout(() => {
        navigate(`/dashboard`);
      }, 1500);
    } else {
      warning("authorisation failed", toast);
    }
  };

  return (
    <Box w="80%" m="0 auto">
      <Flex bg="#e6e6ff" p="1rem">
        <span>
          <FaMobileAlt size="3rem" />
        </span>
        <span>
          If you use one of MyNetDiary’s mobile apps, please sign in with the
          same account name or email as you do in your MyNetDiary mobile app.
          You can see account name on the Settings screen in the mobile app.
        </span>
      </Flex>

      <Flex
        display={{ sm: "column", lg: "flex" }}
        gap="3rem"
        placeContent="center"
        m="3rem auto"
      >
        <Stack spacing="2rem">
          <FormControl id="email" isRequired>
            <FormLabel>Email or Account Name</FormLabel>
            <Input type="text" onChange={handleChange} name="email" />
          </FormControl>
          <FormControl id="pwd" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={pwdShow ? "text" : "password"}
                onChange={handleChange}
                name="password"
              />
              <InputRightElement w="4rem">
                <Button
                  h="1.5rem"
                  size="md"
                  rounded="100%"
                  onClick={() => setpwdShow(!pwdShow)}
                >
                  {pwdShow ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox>Remember me on this computer</Checkbox>
          <Stack direction="row" spacing="2rem" color="green" align="center">
            <Button
              onClick={handleSignIn}
              variant="solid"
              colorScheme={"green"}
            >
              SIGN IN
            </Button>
            <Link
              to="."
              textDecoration={"underline"}
              _hover={{ textDecoration: "none" }}
            >
              Forgot password?
            </Link>
          </Stack>
        </Stack>
        <Box display={{ sm: "none", lg: "block" }} w="4px" bg="#EEEBEB"></Box>
        <Box m={{ sm: "3rem 0", lg: "0" }}>
          <SignMedia />
        </Box>
      </Flex>
      <Text textAlign="center" m="2rem 0" py="1.5rem">
        No account?
        <Link
          to={`/signup/${1}`}
          color="green"
          textDecoration={"underline"}
          _hover={{ textDecoration: "none" }}
        >
          Sign Up
        </Link>
        , it's easy.
      </Text>
    </Box>
  );
};

export default LoginData;