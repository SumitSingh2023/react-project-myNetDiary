import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,Input,Text,Stack,Button,Flex,InputGroup,
  InputRightElement,useToast,
} from "@chakra-ui/react";

import ProgresStatus from "./ProgresStatus";
import { getCurrentDate } from "./validations.js";
import CustomRadio from "./CustomRadio";
import { warning } from "./validations";

const gainLables = ["Gain ⅛ kg/week", "Gain ¼ kg/week", "Gain ½ kg/week"];
const lossLables = ["Lose 1 lb/week", "Lose 1½ lb/week", "Lose 2 lbs/week"];

const WeightData = () => {
  const [toggleTxt, setToggleTxt] = useState(false);
  const [formData, setformData] = useState({
    actualWeight: 0,
    targetWeight: 0,
    goal: "",
  });
  const { actualWeight, targetWeight } = formData;

  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (actualWeight !== 0 || targetWeight !== 0) {
      sessionStorage.setItem("userWeight", JSON.stringify(formData));
      setTimeout(() => {
        navigate(`/signup/${2}`);
      }, 500);
    } else {
      warning("Please provide all input fields", toast);
    }
  };

  return (
    <Flex flexDirection="column" gap="2rem">
      <Stack spacing={10}>
        <InputGroup>
          <Input
            onChange={handleChange}
            type="number"
            name="actualWeight"
            placeholder="How much do you weight?"
            value={actualWeight !== 0 ? actualWeight : ""}
            border="none"
            borderBottom="1px solid grey"
            isRequired
          />
          <InputRightElement w="4rem">
            <Button h="1.5rem">{toggleTxt ? "kg" : "lb"}</Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input
            onChange={handleChange}
            type="number"
            name="targetWeight"
            placeholder="What is your target weight?"
            value={targetWeight !== 0 ? targetWeight : ""}
            border="none"
            borderBottom="1px solid grey"
            isRequired
          />
          <InputRightElement w="4rem">
            <Button h="1.5rem">{toggleTxt ? "kg" : "lb"}</Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Text
        onClick={() => setToggleTxt(!toggleTxt)}
        textAlign={"center"}
        color={"#268FD0"}
        _hover={{
          color: "black",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {toggleTxt
          ? "Switch to English, US units (lbs, feet)"
          : "Switch to metric units (kg, cm)"}
      </Text>

      <Text>Your desired progress</Text>

      {actualWeight < targetWeight ? (
        <>
          <Stack>
            {gainLables?.map((ele, i) => {
              return (
                <CustomRadio
                  handleChange={handleChange}
                  lable={ele}
                  id={`radio${i + 1}`}
                  name={"goal"}
                  value={ele}
                  key={i + 1}
                />
              );
            })}
          </Stack>
          <ProgresStatus>{`Gaining ${Math.abs(actualWeight - targetWeight)} ${
            toggleTxt ? "kg" : "lb"
          } by ${getCurrentDate()}`}</ProgresStatus>
        </>
      ) : actualWeight !== 0 &&
        targetWeight !== 0 &&
        actualWeight === targetWeight ? (
        <ProgresStatus>Maintaining current weight</ProgresStatus>
      ) : actualWeight > targetWeight ? (
        <>
          <Stack>
            {lossLables?.map((ele, i) => {
              return (
                <CustomRadio
                  handleChange={handleChange}
                  lable={ele}
                  id={`radio${i + 1}`}
                  name={"goal"}
                  value={ele}
                  key={i + 1}
                />
              );
            })}
          </Stack>
          <ProgresStatus>{`Losing ${Math.abs(actualWeight - targetWeight)} ${
            toggleTxt ? "kg" : "lb"
          } by ${getCurrentDate()}`}</ProgresStatus>
        </>
      ) : (
        ""
      )}

      <Box textAlign={"center"}>
        <Button onClick={handleNext} variant="solid" mb={"2rem"}>
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default WeightData;
