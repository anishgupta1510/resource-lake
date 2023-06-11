import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Spin } from 'react-cssfx-loading'
const Reply_loader = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} >
        <Spin
            height={"20px"}
            width={"20px"}
            duration='3s'
            color='#0096FF'
        />
    </Flex>
  )
}

export default Reply_loader
