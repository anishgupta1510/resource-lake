import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Back_Home = () => {
  return (
    <>
    
        <Link href={"/"} >
            <Button colorScheme='telegram' >
                Back To Home
            </Button>
        </Link>
    
    </>
  )
}

export default Back_Home
