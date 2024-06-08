import React from 'react'
import {Box} from '@chakra-ui/react'
import DashNavbar from '../Components/Navbar/DashNavbar'
import Dashbody from '../Components/Dashboard/Dashbody'
import DashFooter from '../Components/Footer/DashFooter'






const Dashboard = () => {
  return (
    <Box>
      <DashNavbar />
      <Dashbody />
      <DashFooter />
    </Box>
  )
}

export default Dashboard