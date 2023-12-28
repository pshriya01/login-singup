import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import React, { useState } from "react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios"

const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [username,setUsername]= useState("")
    const [phone,setPhone] =useState("")
    const toast = useToast();
    const handleSubmit = ()=>{
        
        console.log('submit')
        if(email && password && name && username && phone){
        let newuser={email,password,name,username,phone}
          axios.post('https://brand-wick-g0pa.onrender.com/users/signup',newuser)
          .then((res)=>{
            console.log(res.data)
            toast({
                title: 'Account created.',
                description: `${res.data.message}`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
          })
        }
        else{
            toast({
                title: "Input Fields are Required!",
                status: "warning",
                isClosable: true,
                position: 'top',
              });
              return;
        }
    }
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
        // border={"1px solid red"}
        padding={6}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} 
        width={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "40%",
          xl: "40%",
          "2xl": "40%",
        }}
      >
        <Heading size='lg' >Sign Up</Heading>
        <FormControl   isRequired>
          <FormLabel marginTop={"10px"} >Enter Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Username</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input  onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
            <MdOutlineEmail />
            </InputLeftElement>
            <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordLine color="gray.300" />
            </InputLeftElement>
            <Input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="number" placeholder="Eg. 4784581278" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            onClick={handleSubmit}
            type='submit'
          >
            SignUp
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Signup;
