import Back_Home from '@/components/Back_Home'
import Display_req from '@/components/Display_req'
import Request_doc from '@/components/Request_doc'
import { Flex , Box , Alert , AlertIcon, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Request = () => {

  const [isSmaller] = useMediaQuery("(max-width: 768px)")

  return (
    <>

        <Flex flexDirection={"column"} p="4" >

          

          {
            isSmaller ? <>

            </> : <>
            <Back_Home/>
            </>
          }

          <Flex alignItems="center" justifyContent="center" width="auto" marginTop="5px" >
          <Alert status='info' width={
            isSmaller ? "80vw":"50vw"
          }  >
              <AlertIcon/>
              Kindly be respectful during discussions!
          </Alert>
          </Flex>

          <Box paddingTop={"4"} >
            <Request_doc/>
          </Box>
          <Box>
            <Display_req/>
          </Box>
        </Flex>
    
    </>
  )
}

export default Request