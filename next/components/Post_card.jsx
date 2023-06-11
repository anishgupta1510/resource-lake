import {
  Flex,
  Box,
  Text,
  Divider,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import React , {useContext} from "react";
import { SlOptions } from "react-icons/sl";

import axios from "axios";
import UserContext from "@/context/UserContext";
import Post_update from "./Post_update";
import Reply from "./Reply";

const Post_card = ({ ele }) => {
  const ele_id = ele?._id;
  const toast = useToast();

  const {userInfo} = useContext(UserContext)

  const handledelclick = async () => {
    
    try {
      await axios.delete("/api/del_post", {
        // id: ele_id,
        params:{id:ele_id}
      });
      toast({
        title: "Post Deleted",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
    }
  };

  // console.log(ele);
  return (
    <>
      <Flex flexDirection={"row"}>
        <Flex flexDirection={"column"} width={"full"}>
          <Box
            bg={"whitesmoke"}
            p="3"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box display={"inline-block"}>
              Post By
              <Text marginLeft={"5px"} color={"blue.500"} display={"inline"}>
                {ele.user_name}
              </Text>
              <Box>
                <Text color={"blue.500"}>
                  email
                  {" - " + ele.email}
                </Text>
              </Box>
            </Box>
            <Box>
              {
                  (userInfo?.email === ele?.email) && <Menu>
                  <MenuButton as={Button}>
                    <SlOptions />
                  </MenuButton>
                  <MenuList size="xs">
                    <MenuItem _hover={{ bg: "blue.500", color: "white" }}>
                      {/* <Text>Update</Text> */}
                      <Post_update id={ele?._id} data={ele?.post} />
                    </MenuItem>
                    <MenuItem
                      _hover={{ bg: "red.500", color: "white" }}
                      onClick={handledelclick}
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              }
            </Box>
          </Box>
          <Box boxShadow={"xs"} p="2">
            {ele.post}
            <Flex>
              <Text cursor={"pointer"} marginLeft={"5px"} >
                 <Reply id={ele?._id} />
              </Text>
            </Flex>
            <Flex>
              Replies
            </Flex>
            <Divider
              color={"grey"}
              marginTop={"5px"}
              marginBottom={"5px"}
              width={"80%"}
            />
            <Text color={"blue.500"} >
              Posted On
              {" - " + ele.date_posted}
            </Text>
          </Box>
        </Flex>
        <Box display={"inline"}></Box>
      </Flex>
    </>
  );
};

export default Post_card;
