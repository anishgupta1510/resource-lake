import client from "@/content/sanity-client";
import UserContext from "@/context/UserContext";
import del from "@/utils/Delete";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";

const DelBtn = ({ id, val }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [isclicked, setisclicked] = useState(false);
  const handleclick = async () => {
    // del(id)
    // client.delete(id).then()
    // .catch(err=>console.log(err))
    // toast({
    //     title:'File deleted',
    //     status:"success",
    //     duration:3000,
    //     isClosable:true
    // })
    // setTimeout(()=>{
    //     router.reload()
    // },1000)
    // console.log(id);
    // console.log("deleted called")
    try {
      await axios.delete("/api/del", {
        // id:id
        params: { id: id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { userInfo } = useContext(UserContext);

  return (
    <>
      {userInfo?.email === val?.email && (

          <div className="bg-red-500 text-white p-3 rounded-full cursor-pointer" onClick={onOpen}>
              <MdDelete />
          </div>
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box textAlign={"center"}>
              <Text fontWeight={"bold"} marginBottom="30px">
                Do you want to delete this file?
              </Text>
            </Box>
            <Flex justifyContent={"space-around"}>
              <Button colorScheme={"whatsapp"} onClick={handleclick}>
                Confirm
              </Button>
              <Button colorScheme={"red"} onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DelBtn;
