import UserContext from '@/context/UserContext';
import { Button, Modal, ModalContent, ModalHeader, ModalOverlay, useDisclosure, useMediaQuery , Text, useToast} from '@chakra-ui/react'
import React, { useContext } from 'react'
import RequestForm from './RequestForm';

const Request_doc = () => {

    const {isOpen,onOpen,onClose} = useDisclosure();

    const [isSmaller] = useMediaQuery("(max-width: 768px)");
    const {userInfo} = useContext(UserContext);
    const toast = useToast();
    const check = () => {
        if(userInfo === null){
            // console.log("no")
            toast({
                title:"Login to post",
                status:"info",
                duration:3000,
                position:'bottom',
                isClosable:true
            })
            return
        }
        onOpen();
    }


  return (
    <>
    
        <Button onClick={ check } >
            <Text color={"blue.500"} >
                Generate Request
            </Text>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInRight" >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Post Request
                    <RequestForm onClose = {onClose} />
                </ModalHeader>
            </ModalContent>
        </Modal>
    
    </>
  )
}

export default Request_doc