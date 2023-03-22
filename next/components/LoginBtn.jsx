import UserContext from '@/context/UserContext'
import { auth, provider } from '@/firebase/firebase-config'
import { Button, useToast , Text } from '@chakra-ui/react'
import { signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'

const LoginBtn = () => {
    const toast = useToast();

    const handleclick = async() => {
        try{
            await signInWithPopup(auth,provider)
            toast({
                title:"Login Success",
                status:"success",
                duration:3000,
                isClosable:true
            })
        }
        catch(err){
            toast({
                title:"Error",
                status:"error",
                duration:3000,
                isClosable:true
            })
        }
    }

  return (
    <>
        
        <Button color={"blue.500"} onClick={handleclick} >
            Login with Google
        </Button>
    
    </>
  )
}

export default LoginBtn