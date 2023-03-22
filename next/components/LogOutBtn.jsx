import { auth } from "@/firebase/firebase-config";
import { Button, useToast } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";

const LogOutBtn = () => {
  const toast = useToast();
  const handleclick = async () => {
    try {
      signOut(auth);
      toast({
        title:"Logout Success",
        status:"success",
        duration:3000,
        isClosable:true
      })
    } catch (error) {
        toast({
            title:"Error",
            status:"error",
            duration:3000,
            isClosable:true
        })
    }
  };

  return <Button colorScheme={"red"} onClick={handleclick} >Log Out</Button>;
};

export default LogOutBtn;
