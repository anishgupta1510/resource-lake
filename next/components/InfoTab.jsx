import { Accordion, AccordionButton, AccordionItem, Box , Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Discussion_btn from './Discussion_btn'
import Link from 'next/link'

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
            <Box fontSize={"md"} fontWeight={"bold"} color={"grey"} >
                To request for a specific document you can go to the <Text display={"inline"} color={"blue.500"}  > <Link href={"/Request"} > Discussion
                </Link> </Text> section
            </Box>
            <Box fontSize={"md"}color="grey" >
                To Upload a document click on <Text display={"inline"} fontSize="lg" color={"blue.500"}  >Upload Document</Text>
            </Box>
        </Box>

        <Box width={
            isSmaller?"80vw":"60vw"
        } padding={"5px"} >
            <Discussion_btn/>
        </Box>
    
    </>
  )
}

export default InfoTab