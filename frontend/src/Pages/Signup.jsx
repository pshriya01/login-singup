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
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import React, { useState } from "react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios"
import { Link } from "react-router-dom";

const Signup = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [username,setUsername]= useState("")
    const [phone,setPhone] =useState("")
    const toast = useToast();

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = ()=>{
        
        console.log('submit')
        if(email && password && name && username && phone){
            if (!isEmailValid(email)) {
                toast({
                    title: "Invalid Email",
                    description: "Please enter a valid email address.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                return;
            }
        let newuser={email,password,name,username,phone}
          axios.post('https://brand-wick-g0pa.onrender.com/users/signup',newuser)
          .then((res)=>{
            console.log(res.data)
            if(res.data.message==="User created successfully"){
                toast({
                    title: 'Account created.',
                    description: `${res.data.message}`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position:'top'
                  }) 
            }else{
                toast({
                    title: 'Info',
                    description: `${res.data.message}`,
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position:'top'
                  }) 
            }
           
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
        mt={"2%"}
        width={{
          base: "80%",
          sm: "80%",
          md: "80%",
          lg: "40%",
          xl: "40%",
          "2xl": "40%",
        }}
      >
        {/* <Image mt={"-80px"} ml={"180px"} borderRadius={"50%"} h={"100px"} src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif" /> */}
        <Heading fontFamily={"sans-serif"} size='lg' >Sign Up</Heading>
        <FormControl   isRequired>
          <FormLabel marginTop={"8px"} >Enter Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input isRequired="true" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Username</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input  isRequired="true" onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
            <MdOutlineEmail />
            </InputLeftElement>
            <Input isRequired="true" onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordLine color="gray.300" />
            </InputLeftElement>
            <Input isRequired="true" onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input isRequired="true" onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="number" placeholder="Eg. 4784581278" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            onClick={handleSubmit}
            type='submit'
            mb={2}
            fontFamily={"sans-serif"}
          >
            Sign Up
          </Button>
          
        </FormControl>
        <Text fontFamily={"sans-serif"} size={"md"}>Already have an account ? <Link style={{color:"teal",fontWeight:"600"}} to={'/signin'}>Sign In</Link></Text>
      </Box>
    </Flex>
  );
};

export default Signup;
