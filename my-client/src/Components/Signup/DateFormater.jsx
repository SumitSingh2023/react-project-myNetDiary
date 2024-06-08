import React from "react";
import { Stack, Select } from "@chakra-ui/react";
import { yearAlgo, monthAlgo, dayAlgo } from "./algorithm.js";



const DateFormater = ({
  handleChange,
  yearValue,
  monValue,
  dayValue,
  yearName,
  monName,
  dayName,
}) => {
  return (
    <Stack direction="row" spacing={5}>
      <Select
        value={dayValue}
        onChange={handleChange}
        name={dayName}
        variant={"flushed"}
      >
        {dayAlgo()}
      </Select>
      <Select
        value={monValue}
        onChange={handleChange}
        name={monName}
        variant={"flushed"}
      >
        {monthAlgo()}
      </Select>
      <Select
        value={yearValue}
        onChange={handleChange}
        name={yearName}
        variant={"flushed"}
      >
        {yearAlgo()}
      </Select>
    </Stack>
  );
};

export default DateFormater;