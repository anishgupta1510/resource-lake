import React from 'react'
import { FiMessageCircle } from "react-icons/fi"
import {Box , useDisclosure , Text , Modal , ModalOverlay , ModalContent , ModalHeader} from "@chakra-ui/react"
import ReplyForm from './ReplyForm'
const Reply = ({id}) => {

    const {isOpen,onOpen,onClose} = useDisclosure();


    const handleclick = () => {
        onOpen();
    }

  return (
    <>
    
        <Box onClick={handleclick} >
            <FiMessageCircle/>
        </Box>




        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInRight" >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Reply
                    <ReplyForm onClose={onClose} id={id} />
                </ModalHeader>
            </ModalContent>
        </Modal>

    </>
  )
}

export default Reply
