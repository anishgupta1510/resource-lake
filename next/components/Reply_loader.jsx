import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import { SpinStretch } from 'react-cssfx-loading'
const Reply_loader = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} marginLeft={"50%"} >
        <SpinStretch
            height={"50px"}
            width={"50px"}
            duration='3s'
            color='#0096FF'
        />
        <Text color={"blue.500"} marginTop={"10px"}>
            Loading Replies...
        </Text>
    </Flex>
  )
}

export default Reply_loader
