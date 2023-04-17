import React from 'react'
import {useDisclosure , Text , Modal , ModalOverlay , ModalContent , ModalHeader} from "@chakra-ui/react"
import UpdateForm from './UpdateForm';
const Post_update = ({id , data}) => {

    const {isOpen,onOpen,onClose} = useDisclosure();

    

  return (
    <>
    
        
        <Text onClick={onOpen} >
            Update
        </Text>



        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInRight" >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Post Request
                    {/* <RequestForm onClose = {onClose}  /> */}
                    <UpdateForm id={id} onClose={onClose} data={data} />
                </ModalHeader>
            </ModalContent>
        </Modal>
    
    </>
  )
}

export default Post_update