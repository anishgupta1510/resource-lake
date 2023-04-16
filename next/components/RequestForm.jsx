import UserContext from '@/context/UserContext';
import { Box , Button, Input, Text, Textarea, useToast} from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useState } from 'react'

const RequestForm = ({onClose}) => {
    const [req,setreq] = useState("");
    const {userInfo} = useContext(UserContext);
    const toast = useToast();

    const handleclick = async(e) => {
        e.preventDefault();
        const post = req;
        const email = userInfo.email;
        const user_name = userInfo.displayName;
        const date = new Date();
        const date_posted = date.toISOString().substring(0,10)
        console.log(date_posted)
        const data = {
            post:post,
            email:email,
            user_name:user_name,
            date_posted:date_posted
        }

        try{
            const response = await axios.post('api/Add_post',data)
            console.log(response.data)
            toast({
                title:'Request Posted',
                duration:3000,
                isClosable:true,
                status:"success"
            })
        }catch(err){
            console.log(err)
            toast({
                title:"Error",
                duration:3000,
                isClosable:true,
                status:'error'
            })
        }

        onClose();
    }

  return (
    <>
        <Box display={"flex"} alignItems={"center"} margin={"10px"} >
            <Textarea placeholder='write your request' onChange={(e)=>setreq(e.target.value)} resize={"none"} />
            
        </Box>
        <Button colorScheme='facebook' marginLeft={"10px"} onClick={handleclick} >
            Post
        </Button>
    </>
  )
}

export default RequestForm