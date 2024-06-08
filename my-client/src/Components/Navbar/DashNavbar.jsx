import React, { useState, useEffect } from "react";
import myNetDiaryLogo from "../../Assets/mynet-home-img/logo-main.svg";
import { Link } from "react-router-dom";
import { Box, Image, Flex,Text, HStack, Stack } from "@chakra-ui/react";
import CalenderBox from "./CalenderBox";

import {FaCalendarAlt,FaChevronLeft, FaChevronRight, FaEllipsisV} from 'react-icons/fa'


const listArr = ['DASHBOARD', 'PLAN', 'FOOD', 'EXERCISE', 'ANALYSIS', 'COMMUNITY', 'SETTINGS'];


const DashNavbar = () => {
    const [calender, setCalender] = useState(false)

    const handleCalender = () => {
        setCalender(!calender)
    }


  return (
    <Box
      bg="rgb(59,131,2)"
      color="rgb(255, 255, 255)"
      px={4}
      h="125px"
      p= '0 3rem 0 3rem'
    >
      <Flex justify="space-between" align="center">
        <Link to="/">
          <Image w="250px" src={myNetDiaryLogo} alt="logo" color="white" />
        </Link>
        <HStack spacing={4} onClick={handleCalender} pos='relative'>
          <FaCalendarAlt />
          <FaChevronLeft />
          <FaChevronRight />
        </HStack>
        {
          calender? <Box pos='absolute' top='8rem' zIndex='50' color='black'>
              <CalenderBox />
          </Box> : ''
        }
        <HStack >
          <Image src='https://www.mynetdiary.com/img/Premium_planning_x2.png' transform='scale(0.5)' />
          <FaEllipsisV />
        </HStack>
      </Flex>
      <Stack direction="row" justifyContent='space-between'>
          {listArr?.map((elem, i) => {
            return (
              <Text cursor='pointer' key={i + 1} >{elem}</Text>
            );
          })}
      </Stack>
    </Box>
  );
};

export default DashNavbar;