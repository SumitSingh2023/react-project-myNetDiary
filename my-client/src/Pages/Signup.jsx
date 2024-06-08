import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import WeightPlan from "./WeightPlan";
import AboutYourself from './AboutYourself';
import CreateAccount from './CreateAccount';
import MemberShip from './MemberShip';



const comp = [
  {id: 1, page: <WeightPlan />}, 
  {id: 2, page: <AboutYourself />}, 
  {id: 3, page: <CreateAccount />},
  {id: 4, page: <MemberShip />}
]





const Signup = () => {
  const {id} = useParams();
  return (
    <Box>
      {
        comp.filter((el) => el.id==id).map((elem)=> {
          return <Box key={elem.id}>{elem.page}</Box>
        })
      }
    </Box>
  )
}

export default Signup;