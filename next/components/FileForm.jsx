import { storage } from "@/firebase/firebase-config";
import upload from "@/utils/SanityUp";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useMediaQuery,
  useToast,
  Select,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useRef, useState } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import axios from "axios";
const FileForm = ({ onClose, filterdata, setfilterdata }) => {
  const filepickerref = useRef(null);
  const [filename, setfileName] = useState("");
  const [file, setfile] = useState(null);
  const [branch, setbranch] = useState("");
  const [sem, setsem] = useState("");
  const toast = useToast();
  const { userInfo } = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!isValid({ file, filename, branch, sem  , toast})) {
      setLoading(false);
      return;
    }
    const storageref = ref(storage, "/files/" + filename);
    const uploadTask = uploadBytesResumable(storageref, file);
    await uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.log(error);
        toast({
          title: "Error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const date = new Date();
          const data = {
            author: userInfo.displayName,
            filename: filename,
            date: date.toISOString().substring(0, 10),
            branch: branch,
            semester: sem,
            email: userInfo.email,
          };
          await upload(url, data);
          const test_data = {
            author: userInfo.displayName,
            file_name: filename,
            date_uploaded: date.toISOString().substring(0, 10),
            branch: branch,
            semester: sem,
            email: userInfo.email.toString(),
            file_url:url.toString()
          }
          try{
            const response = await axios.post("/api/insert",test_data);
            // console.log(response.data);
          }
          catch(error){
            console.error(error);
          }
          toast({
            title: "File Upload Success",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
          setLoading(false);
        });
      }
    );
  };

  const handlefilechange = (e) => {
    if (e.target.files) {
      const tempfile = e.target.files[0];
      setfile(tempfile);
    }
  };

  const removefile = () => {
    setfile(null);
  };

  const [isSmaller] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <FormControl gap={"6px"} padding="4px">
        <FormLabel>Give File Name</FormLabel>
        <Input
          placeholder="File Name"
          onChange={(e) => setfileName(e.target.value)}
        />
        <FormLabel marginTop={"5px"}>
          Branch (for which the file is related )
        </FormLabel>
        <Select
          placeholder="Branch"
          marginTop={"5px"}
          onChange={(e) => {
            setbranch(e.target.value);
          }}
        >
          <option>Cse</option>
          <option>It</option>
          <option>Ece</option>
          <option>Eee</option>
          <option>Mech</option>
          <option>Civil</option>
        </Select>
        <FormLabel marginTop={"5px"}>
          Semester (for which the file is related){" "}
        </FormLabel>
        <Select
          placeholder="Semester"
          marginTop={"5px"}
          onChange={(e) => {
            setsem(e.target.value);
          }}
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
        <Button
          colorScheme={"twitter"}
          margin="10px"
          onClick={() => filepickerref.current.click()}
        >
          Choose File
        </Button>
        <Input
          type={"file"}
          ref={filepickerref}
          onChange={handlefilechange}
          hidden
        />
        {file && (
          <>
            <Alert status="success" margin={"5px"}>
              <AlertIcon />
              File Selected
            </Alert>
            <Box>
              <Button colorScheme={"red"} onClick={removefile}>
                Remove File
              </Button>
            </Box>
          </>
        )}
        <Box>
          <Button
            colorScheme={"twitter"}
            marginTop="5px"
            onClick={handlesubmit}
            type="submit"
            isLoading={loading}
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default FileForm;

const isValid = ({ filename, branch, sem, file , toast }) => {
  if (filename === "") {
    toast({
      title: "Filename can't be empty",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }
  if (branch === "") {
    toast({
      title: "Branch Not Choosen",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }
  if (sem === "") {
    toast({
      title: "Semester Not Choosen",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }
  if (file === null) {
    toast({
      title: "No File choosen",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }
  return true;
};
