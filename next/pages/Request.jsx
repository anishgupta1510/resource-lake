import Back_Home from '@/components/Back_Home'
import Request_doc from '@/components/Request_doc'
import { Flex , Box } from '@chakra-ui/react'
import React from 'react'

const Request = () => {
  return (
    <>
    
        Request page

        <Flex flexDirection={"column"} p="4" >
          <Back_Home/>
          <Box paddingTop={"4"} >
            <Request_doc/>
          </Box>
        </Flex>
    
    </>
  )
}

export default Request