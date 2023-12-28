import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import React from "react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Signup = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      width={"90%"}
      margin={"auto"}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      gap="30px"
      alignItems={"center"}
    >
      <Box
        border={"1px solid yellow"}
        width={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
      >
        <Image src="https://www.artbikashkendra.com/admin/assets/images/login.gif" />
      </Box>
      <Box
        border={"1px solid red"}
        width={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "40%",
          xl: "40%",
          "2xl": "40%",
        }}
      >
        <FormControl  border={"1px solid green"} isRequired>
          <FormLabel marginTop={"10px"} >Enter Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Name" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Username</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Username" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
            <MdOutlineEmail />
            </InputLeftElement>
            <Input type="text" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordLine color="gray.300" />
            </InputLeftElement>
            <Input type="password" placeholder="Password" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input type="number" placeholder="Eg. 4784581278" />
          </InputGroup>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Signup;
