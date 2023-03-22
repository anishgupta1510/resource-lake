import { Accordion, AccordionButton, AccordionItem, Box , Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const InfoTab = () => {

    const  [isSmaller] = useMediaQuery('(max-width:768px)')

  return (
    <>
    
        <Box width={
            isSmaller?"80vw":"60vw"
        } boxShadow="xs" padding={"5px"} >
            <Box>
                <Text color={"blue.500"} fontSize="2xl" textDecoration={"underline"} >
                    How to Use:
                </Text>
            </Box>
            <Box fontSize={"md"}color="grey" >
                Search the branch and semester to get all the documents related to that branch/semester
            </Box>
            <Box color={"Highlight"} >
                Reload if changes don't occur!
            </Box>
        </Box>
    
    </>
  )
}

export default InfoTab