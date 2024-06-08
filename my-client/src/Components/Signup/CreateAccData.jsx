import React, { useState, useEffect } from "react";

import {
  Box,Container,FormControl,Flex,Stack,UnorderedList,ListItem,
  Button,FormHelperText,Input,useToast,InputRightElement,
  InputGroup, FormLabel,
} from "@chakra-ui/react";

import { warning, success, error } from "./validations";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BackButton from "./BackButton";
import SignMedia from "./SignMedia";
import { inpReqErr, errorEmail, errorPassword } from "./validations.js";
import { postRequest, getUserData } from "../../ApiReq/Api";

const weightData = JSON.parse(sessionStorage.getItem("userWeight"));
const aboutData = JSON.parse(sessionStorage.getItem("userAbout"));






const CreateAccData = () => {
  const [toggle, setToggle] = useState(false);
  const [pwdShow, setpwdShow] = useState(false);
  const [pwdToggle, setPwdToggle] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState([]);
  const { firstName, email, password } = formData;

  const toast = useToast();
  const navigate = useNavigate();

  const isNameReqErr = inpReqErr(firstName);
  const isValidEmail = errorEmail(email);
  const isValidPwd = errorPassword(password);

  useEffect(() => {
    getUserData()
      .then((data) => setSignupData(data))
      .catch((err) => console.log(err));
  }, []);

  const isRepeatedUser = () => {
    return signupData.some((elem) => elem.email === email);
  };
  const status = isRepeatedUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (isNameReqErr || isValidEmail || isValidPwd) {
      warning("check input field", toast);
    } else if (status) {
      warning("email already exist", toast);
    } else if (weightData=== null ||  aboutData === null) {
      warning("error to store in weight and about data", toast)} else {
      const path = "/signupUsers";
      postRequest(path, {
        username: formData.firstName,
        email: formData.email,
        password: formData.password,
        weights: weightData,
        abouts: aboutData,
      });
      success("Account created successfully", toast);
      
      setTimeout(() => {
        navigate(`/signup/${4}`);
      }, 1500);
    }
  };


  return (
    <Stack spacing="2rem">
      <Container bg="#e6e6ff" p="1rem">
        <strong>If you already use MyNetDiary app on your mobile phone:</strong>{" "}
        to access your information on the website, you need to{" "}
        <Link to="/login"> Sign In </Link> (not Sign Up!) with the same email
        and password as you use in the mobile app. If you haven't created an
        account in the app, please create an account in the app first Boxgo to
        Sign In on the website.
      </Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={8} w="90%" m="0 auto">
          <SignMedia />
          <Flex m="auto" align="center" gap="1rem">
            <Box w="40%" h="0.2rem" bg="grey"></Box>
            <Box
              w="10%"
              rounded="100%"
              border="1px solid grey"
              textAlign="center"
            >
              or
            </Box>
            <Box w="40%" h="0.2rem" bg="grey"></Box>
          </Flex>
          <Button
            w="full"
            onClick={() => setToggle(!toggle)}
            colorScheme="twitter"
          >
            CONTINUE WITH EMAIL
          </Button>
        </Stack>

        {toggle && (
          <Stack p={8} spacing={8}>
            <FormControl id="first-name" isRequired isInvalid={isNameReqErr}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" onChange={handleChange} name="firstName" />
            </FormControl>
            <FormControl id="email" isRequired isInvalid={isValidEmail}>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={handleChange} name="email" />
            </FormControl>
            {status ? error("email already exist!") : ""}
            <FormControl id="pwd" isRequired isInvalid={isValidPwd}>
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
              <FormHelperText
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => setPwdToggle(!pwdToggle)}
              >
                check password instrcuctions
              </FormHelperText>
              {pwdToggle ? (
                <UnorderedList>
                  <ListItem>At least eight characters</ListItem>
                  <ListItem>At least one lowercase character (a-z)</ListItem>
                  <ListItem>At least one uppercase character (A-Z)</ListItem>
                  <ListItem>At least one digit (0-9)</ListItem>
                  <ListItem>At least one symbol (!,@,#,$,%,^,&,*)</ListItem>
                </UnorderedList>
              ) : (
                ""
              )}
            </FormControl>
            <Box textAlign="center">
              <Button type="Submit" colorScheme="blue" p="1.5rem">
                NEXT
              </Button>
            </Box>
          </Stack>
        )}
      </form>
      <Box>
        <BackButton />
      </Box>
    </Stack>
  );
};

export default CreateAccData;