import {
  Alert,AlertIcon,AlertDescription,
} from "@chakra-ui/react";



export const inpReqErr = (identifier) => {
  if (identifier === "") {
    return true;
  }
  return false;
};


export const errorEmail = (identifier) => {
  if (
    identifier === "" ||
    (identifier !== "" && !identifier.includes("@" && "."))
  ) {
    return true;
  }
  return false;
};



const strongPwdPattern = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const errorPassword = (identifier) => {
  if (
    identifier === "" ||
    (identifier !== "" && identifier.search(strongPwdPattern) === -1)
  ) {
    return true;
  }
  return false;
};



const monName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function getCurrentDate(separator = " ", targetValue = 15) {
  let newDate = new Date();
  let date = newDate.getDate();
  let monNum = newDate.getMonth() + 1;
  let month;
  monName.filter((el, i) => monNum === i + 1).map((elem) => (month = elem));

  let year = newDate.getFullYear();

  return `${date}${separator}${month}${separator}${year}`;
}






// *********

export const warning = (desc, toast) => {
  return toast({
    title: "Warning!",
    description: desc,
    status: "warning",
    duration: "2000",
    isClosable: true,
  });
};

export const success = (desc, toast) => {
  return toast({
    title: "Success!",
    description: desc,
    status: "success",
    duration: "1000",
    isClosable: true,
  });
};


export const error = (desc) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
};