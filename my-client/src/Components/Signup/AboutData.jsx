import React, { useState } from "react";
import { Box, Text, Stack, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DateFormater from "./DateFormater";
import HeightFormat from "./HeightFormat";
import BackButton from "./BackButton";
import CustomRadio from "./CustomRadio";
import ProgresStatus from "./ProgresStatus";
import { ageCalc } from "./algorithm";
import { warning} from "./validations";






const AboutData = () => {
  const [formData, setformData] = useState({
    gender: "",
    height: "",
    year: "",
    month: "",
    day: ""
  });
  const { gender, height, year, month, day } = formData;

  const userWeights = JSON.parse(sessionStorage.getItem("userWeight"));

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
    if (
      gender !== "" &&
      height !== "" &&
      year !== "" &&
      month !== "" &&
      day !== ""
    ) {
      sessionStorage.setItem('userAbout', JSON.stringify(formData));
      navigate(`/signup/${3}`);
    } else {
      warning("Please provide all input fields", toast);
    }
  };

  const userWeightKg = Math.floor(userWeights.actualWeight / 2.2046);
  let h = height.split(" ");
  let ft = +h[0];
  let inch = +h[2];
  const userHeightCm = ft * 30.48 + inch * 2.54;
  const userAgeYy = ageCalc(`${year}/${month}/${day}`);

  const femaleBMR = Math.round(
    655.1 + 9.563 * userWeightKg + Math.abs(1.85 * userHeightCm - 4.676 * userAgeYy)
  );
  const maleBMR = Math.round(
    66.47 + 13.75 * userWeightKg + Math.abs(5.003 * userHeightCm - 6.755 * userAgeYy)
  );

  const calory = (status) => {
    return (
      <ProgresStatus>{`Your daily budget: ${status} calories`}</ProgresStatus>
    );
  };

  return (
    <Stack spacing="2rem">
      <Text>To calculate your calorie and nutrient needs</Text>
      <Text>Your are:</Text>
      <Stack>
        {["Female", "Male"].map((elem, i) => (
          <CustomRadio
            key={i + 1}
            handleChange={handleChange}
            lable={elem}
            id={`radio${i + 1}`}
            name={"gender"}
            value={elem}
          />
        ))}
      </Stack>
      <Text>When were you born?</Text>
      <Box>
        <DateFormater
          handleChange={handleChange}
          yearValue={year}
          monValue={month}
          dayValue={day}
          yearName={"year"}
          monName={"month"}
          dayName={"day"}
        />
      </Box>
      <Text>How tall are you?</Text>
      <Box>
        <HeightFormat
          handleChange={handleChange}
          heightValue={height}
          heightName="height"
        />
      </Box>

      {/* calory  */}

      {gender === "" ||
      height === "" ||
      year === "" ||
      month === "" ||
      day === ""
        ? ""
        : gender === "Female"
        ? calory(femaleBMR)
        : gender === "Male"
        ? calory(maleBMR)
        : ""}

      <Box textAlign={"center"}>
        <Button onClick={handleNext} colorScheme={"blue"} p="1.5rem">
          NEXT
        </Button>
      </Box>
      <Box>
        <BackButton />
      </Box>
    </Stack>
  );
};

export default AboutData;