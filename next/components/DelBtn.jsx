import client from '@/content/sanity-client'
import del from '@/utils/Delete'
import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure , Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { MdDelete } from "react-icons/md"

const DelBtn = ({id}) => {

    const { isOpen , onOpen , onClose } = useDisclosure()
    const toast = useToast()
    const router = useRouter()

    const handleclick = () => {
        // del(id)
        client.delete(id).then()
        .catch(err=>console.log(err))
        // onClose();
        toast({
            title:'File deleted',
            status:"success",
            duration:3000,
            isClosable:true
        })
        setTimeout(()=>{
            router.reload()
        },1000)
    }

  return (
    <>  
        {
        }
    
        <Button color={"white"} onClick={onOpen} bg="red.500" _hover={{bg:"blue.500" , color:"white"}} rounded="full" >
            <MdDelete/>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay/>
            <ModalContent>
                <ModalBody>
                    <Box textAlign={"center"} >
                        <Text fontWeight={"bold"} marginBottom="30px" >
                            Do you want to delete this file?
                        </Text>
                    </Box>  
                    <Flex justifyContent={"space-around"} >
                        <Button colorScheme={"whatsapp"} onClick={handleclick} >
                            Confirm
                        </Button>
                        <Button colorScheme={"red"} onClick={onClose} >
                            Cancel
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

export default DelBtn