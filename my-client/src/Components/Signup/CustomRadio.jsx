import React from "react";
import {Flex} from '@chakra-ui/react'






const CustomRadio = ({handleChange,lable, id,  name, value}) => {
  return (
    <Flex gap='1rem'>
      <input
        onChange={handleChange}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <label htmlFor={id}>{lable}</label>
    </Flex>
  );
};

export default CustomRadio;