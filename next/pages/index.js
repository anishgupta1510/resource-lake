import FileForm from "@/components/FileForm";
import Search from "@/components/Search";
import client from "@/content/sanity-client";
import UserContext from "@/context/UserContext";
import {
  Box,
  Flex,
  Select,
  useMediaQuery,
  Text,
  Button,
  useToast,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useState , useEffect } from "react";

const index = ({initialdata}) => {
  const { userInfo  } = useContext(UserContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleupclick = () => {
    if (userInfo === null) {
      toast({
        title: "Login to upload",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      onOpen();
    }
  };

  const handleclick = () => {
    
  }

  const [isSmaller] = useMediaQuery("(max-width: 768px)");
  const [data,setdata] = useState(initialdata);
  // useEffect(()=>{
  //   const subscription = client.listen(`*[_type == 'post']`)
  //   .subscribe((event) => setdata((prevdata) => [...prevdata,event.document] ) )

  //   return () => subscription.unsubscribe();
  // } , [] );
  let params={}

  useEffect(()=>{
    const connection = client.listen(`*[_type == "post"]`,params={}).subscribe((update)=>{
      setdata(update.result)
    })
    return ()=>{
      connection.unsubscribe()
    }
  },[])

  const [branch,setbranch] = useState("");
  const [sem,setsem] = useState("")

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        marginTop="10px"
      >
        <Box width={isSmaller ? "80vw" : "40vw"} display>
          <Text marginTop={"5px"} fontSize="2xl">
            Select Branch
          </Text>
          <Select placeholder="Branch" marginTop={"5px"} onChange={(e)=>setbranch(e.target.value)} >
            <option>Cse</option>
            <option>It</option>
            <option>Ece</option>
            <option>Eee</option>
          </Select>
        </Box>

        <Box width={isSmaller ? "80vw" : "40vw"} marginTop={"5px"}>
          <Text marginTop={"5px"} fontSize="2xl">
            Select Semester
          </Text>
          <Select placeholder="Semester" marginTop={"5px"} onChange={(e)=>setsem(e.target.value)} >
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
            <option>VII</option>
            <option>VIII</option>
          </Select>
        </Box>
        <Button colorScheme={"telegram"} marginTop="15px" onClick={handleclick} >
          Search
        </Button>
        <Button
          marginTop={"15px"}
          colorScheme="linkedin"
          onClick={handleupclick}
        >
          Upload Document
        </Button>
        <Text marginTop={"10px"} fontSize="3xl" >
          Search
        </Text>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <FileForm onClose={onClose} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="red" >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Search initialdata={data} branch={branch} sem={sem} /> 

      </Flex>
    </>
  );
};

export default index;

export async function getStaticProps(context){
  const data = await client.fetch(`*[_type == "post"]`)
  return {
    props:{
      initialdata:data,
    },
    revalidate:10
  }
}
