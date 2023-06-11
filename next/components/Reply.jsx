import React, { useContext } from 'react'
import { FiMessageCircle } from "react-icons/fi"
import {Box , useDisclosure , Text , Modal , ModalOverlay , ModalContent , ModalHeader, useToast} from "@chakra-ui/react"
import ReplyForm from './ReplyForm'
import UserContext from '@/context/UserContext'
const Reply = ({id}) => {

    const {isOpen,onOpen,onClose} = useDisclosure();

    const {userInfo} = useContext(UserContext);
    const toast = useToast();
    const handleclick = () => {

        if(userInfo === null){
            console.log("huh")
            toast({
                title:'Login to Reply',
                isClosable:true,
                duration:3000,
                status:'info'
            })
            return;
        }
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
