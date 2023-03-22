import UserContext from "@/context/UserContext";
import {
  useMediaQuery,
  Box,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";

const NavBar = () => {
  const [isSmaller] = useMediaQuery("(max-width: 768px)");
  const { userInfo, logout, login } = useContext(UserContext);

  if (isSmaller) {
    return (
      <>
        smaller nav
      </>
    );
  } else {
    return (
      <>
        <Box
          position={"sticky"}
          top={"0"}
          zIndex="10"
          p="4"
          boxShadow={"md"}
          height="8vh"
          width={"full"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Flex alignItems={"center"}>
            <Text fontWeight={"bold"} fontSize="3xl">
              Resource
            </Text>
            <Text
              marginLeft={"1px"}
              fontWeight={"bold"}
              fontSize="3xl"
              color={"blue.500"}
            >
              Lake
            </Text>
          </Flex>
          <Box marginRight={"5px"}>
            {userInfo && (
              <>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius={"md"}
                    borderWidth="1px"
                    _hover={{
                      bg: "gray.400",
                    }}
                    _expanded={{
                      bg: "blue.400",
                    }}
                    _focus={{
                      boxShadow: "outline",
                    }}
                  >
                    <Flex alignItems={"center"} justifyContent="center">
                      <Image
                        src={userInfo.photoURL}
                        rounded="full"
                        height={"50px"}
                        marginRight="5px"
                      />
                      {userInfo.displayName}
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      {/* <Button  onClick={logout} colorScheme={"red"}>LogOut</Button> */}
                      <LogOutBtn />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </Box>
          {!userInfo && (
            <>
              <LoginBtn />
            </>
          )}
        </Box>
      </>
    );
  }
};

export default NavBar;
