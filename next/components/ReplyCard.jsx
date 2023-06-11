import React, { useContext } from 'react'
import {Flex , Box , Text , Button ,useToast} from '@chakra-ui/react'
import UserContext from "@/context/UserContext";
import { MdDelete } from "react-icons/md"
import axios from 'axios'

const ReplyCard = ({data,postemail}) => {
    const  {userInfo} = useContext(UserContext);
    const toast = useToast()
    const handledelclick = async() => {
        console.log(data._id)
        const docid = data?._id
        try{
            await axios.delete(`/api/replies/del_reply?id=${docid}`)
            toast({
                title:'Reply deleted',
                duration:3000,
                isClosable:true,
                status:'success'
            })
        }catch(err){
            console.log(err)
            toast({
                title:'Error',
                duration:3000,
                isClosable:true,
                status:'error'
            })
        }
    }

  return (
    <>
    
        <Flex m="5px" flexDirection={"column"} width={"full"} boxShadow={"xs"} >
            <Box bg={"whitesmoke"} p="2" width={"full"} >
                {
                    `Replied by `
                }
                <Text display={"inline-block"} color={"blue.500"} >
                    {
                        data.user_name + " |"
                    }
                </Text>
                
                <Text display={"inline-block"} color={"blue.500"} >
                    {
                        data.email + " |"
                    }
                </Text>
                <Text display={"inline-block"} color={"gray.500"} >
                    {
                        data.date_replied
                    }
                </Text>
                {
                    ( data.email === userInfo?.email || postemail === userInfo?.email ) && <>
                        <Button marginLeft="5px" color="red.500" _hover={{bg:"blue.500" , color:"white"}} onClick={handledelclick} >
                                <MdDelete/>
                        </Button>
                    </>
                }
            </Box>
            <Box padding="5px"  >
                {
                    data.reply
                }
            </Box>
        </Flex>
    
    </>
  )
}

export default ReplyCard
