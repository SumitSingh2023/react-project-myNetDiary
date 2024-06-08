import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";





const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      leftIcon={<MdKeyboardArrowLeft />}
      colorScheme="teal"
      variant="ghost"
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};

export default BackButton;