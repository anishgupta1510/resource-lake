import FileForm from "@/components/FileForm";
import InfoTab from "@/components/InfoTab";
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
  filter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Display from "@/components/Display";
import { Hypnosis } from "react-cssfx-loading";
import Loader from "@/components/Loader";
import Discussion_btn from "@/components/Discussion_btn";

const index = ({}) => {
  const { userInfo } = useContext(UserContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [filterdata, setfilterdata] = useState();

  // useEffect(()=>{
  //   const fun = async() => {
  //     try{
  //       const res = await axios.get('/api/read')
  //       setfilterdata(res.data)
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fun();
  // },[])
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  const res = useSWR("/api/read", fetcher, {
    refreshInterval: 1000,
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });
  useEffect(() => {
    if (res.error) {
      console.log(error);
      return;
    }
    if (res.data) {
      setfilterdata(res.data);
      // console.log(res.data);
    }
  }, [res.data]);

  // console.log(filterdata)

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

  const [isSmaller] = useMediaQuery("(max-width: 768px)");
  const [data, setdata] = useState(filterdata);
  // useEffect(()=>{
  //   const subscription = client.listen(`*[_type == 'post']`)
  //   .subscribe((event) => setdata((prevdata) => [...prevdata,event.document] ) )

  //   return () => subscription.unsubscribe();
  // } , [] );
  let params = {};

  // useEffect(() => {
  //   const connection = client
  //     .listen(`*[_type == "post"]`, (params = {}))
  //     .subscribe((update) => {
  //       setfilterdata([...filterdata, update.result]);
  //     });
  //   return () => {
  //     connection.unsubscribe();
  //   };
  // }, []);

  const [branch, setbranch] = useState("");
  const [sem, setsem] = useState("");

  if (res.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        marginTop="10px"
      >
        <InfoTab />
        <div className="lg:flex gap-8 w-1/2 justify-around">
          <Box width={"100%"}>
            <Text marginTop={"5px"} fontSize="xl">
              Search by Branch
            </Text>
            <Select
              placeholder="Branch"
              marginTop={"5px"}
              onChange={(e) => setbranch(e.target.value)}
            >
              <option>Cse</option>
              <option>It</option>
              <option>Ece</option>
              <option>Eee</option>
            </Select>
          </Box>
          <Box width={"100%"}>
            <Text marginTop={"5px"} fontSize="xl">
              Select by Semester
            </Text>
            <Select
              placeholder="Semester"
              marginTop={"5px"}
              onChange={(e) => setsem(e.target.value)}
            >
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
        </div>
        {/* <Button colorScheme={"telegram"} marginTop="15px" onClick={handleclick} >
          Search
        </Button> */}
        <div className="fixed z-50 bottom-10 flex justify-center items-center gap-4">
          <div>
            <Button
              colorScheme="linkedin"
              onClick={handleupclick}
            >
              Upload Document
            </Button>
          </div>
          <div>
            <Discussion_btn />
          </div>
        </div>
        <Text marginTop={"10px"} fontSize="3xl">
          Search
        </Text>
        <Text color={"grey"}>(by file name)</Text>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <FileForm
                filterdata={filterdata}
                setfilterdata={setfilterdata}
                onClose={onClose}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="red">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* <Search
          initialdata={data}
          branch={branch}
          sem={sem}
          filterdata={filterdata}
          setfilterdata={setfilterdata}
        /> */}
        {/* <Search
        
          filterdata={filterdata}
          branch={branch}
          sem={sem}

        /> */}

        <Display filterdata={filterdata} branch={branch} sem={sem} />
      </Flex>
    </>
  );
};

export default index;
