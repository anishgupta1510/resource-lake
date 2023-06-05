import { Box  , Textarea , Button, useToast} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const UpdateForm = ({onClose , data , id}) => {

  const [change_data,set_change_data] = useState()
  const toast = useToast();
  const handleclick = async() => {

    const data = {
      id:id,
      new_post:change_data
    }

    try{
      const response = await axios.put('/api/Update_post',data)
      // console.log(response)
      toast({
        title:"Post Updated",
        duration:3000,
        isClosable:true,
        status:"success",
      })
    }catch(err){
      console.log(err)
      toast({
        title:"Error Occured",
        duration:"3000",
        isClosable:true,
        status:"error",
      })
    }

    
    onClose();
  }

  return (
    <div>
        <Box>
        <Box display={"flex"} alignItems={"center"} margin={"10px"} >
            <Textarea placeholder='write your request' onChange={(e)=>set_change_data(e.target.value)} resize={"none"} defaultValue={data} />
        </Box>
        <Button colorScheme='facebook' marginLeft={"10px"} onClick={handleclick} >
            Update Post
        </Button>
        <Button colorScheme='red' onClick={onClose} marginLeft={"8px"} >
            Close
        </Button>
        </Box>
    </div>
  )
}

export default UpdateForm
