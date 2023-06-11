import React, { useContext } from 'react'
import { Box  , Textarea , Button, useToast} from '@chakra-ui/react'
import { useState } from 'react';
import UserContext from '@/context/UserContext';
import axios from 'axios';

const ReplyForm = ({onClose , id}) => {

    const handleclose = () => {
        onClose();
    }

    const [Reply,setReply] = useState("");
    const {userInfo} = useContext(UserContext);
    const toast = useToast();

    const handlereplyclick = async(e) => {
        e.preventDefault();
        const reply = Reply;

        if(reply.length === 0){
            toast({
                title:'Reply cannot be empty',
                duration:3000,
                isClosable:true,
                status:'info'
            })
            return;
        }

        const email = userInfo.email;
        const user_name = userInfo.displayName;
        const date = new Date();
        const date_replied = date.toISOString().substring(0,10)
        const post_id = id

        const data = {
            reply:reply,
            email:email,
            user_name:user_name,
            date_replied:date_replied,
            post:post_id
        }

        try{
            const response = await axios.post('api/replies/Add_reply',data)
            toast({
                title:'Reply Posted',
                duration:3000,
                isClosable:true,
                status:"success"
            })
            console.log(response)

        }catch(err){
            console.log(err)
            toast({
                title:"Error",
                duration:3000,
                isClosable:true,
                status:'error'
            })
        }

        handleclose();
    }

  return (
    <>
    
    <Box>
        <Box display={"flex"} alignItems={"center"} margin={"10px"} >
            <Textarea placeholder='Write Your Reply' onChange={ (e) => setReply(e.target.value) } resize={"none"}  />
        </Box>
        <Button colorScheme='facebook' marginLeft={"10px"} onClick={handlereplyclick} >
            Reply
        </Button>
        <Button colorScheme='red'  marginLeft={"8px"} onClick = {handleclose}  >
            Close
        </Button>
        </Box>
    
    </>
  )
}

export default ReplyForm
