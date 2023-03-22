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
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import Title from "./Title";

const NavBar = () => {
  const [isSmaller] = useMediaQuery("(max-width: 768px)");
  const { userInfo, logout, login } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isSmaller) {
    return (
      <>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          boxShadow={"md"}
          padding="5px"
        >
          <Title />
        </Flex>
        <Button
          colorScheme={"telegram"}
          onClick={onOpen}
          marginTop="10px"
          marginLeft={"10px"}
          position="sticky"
          top={"5"}
          zIndex="1000"
        >
          Menu
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexDirection="column"
            >
              <Title />
              <Box textAlign={"center"} marginBottom="10px" >
                <Text
                  color={"blue.500"}
                  fontSize="2xl"
                  textDecoration={"underline"}
                >
                  Account Info
                </Text>
              </Box>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                {!userInfo && (
                  <>
                    <LoginBtn />
                  </>
                )}
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
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return (
      <>
        <Box
          position={"sticky"}
          top={"0"}
          zIndex="9999"
          p="4"
          boxShadow={"md"}
          height="8vh"
          width={"full"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          bg={"white"}
        >
          <Title />
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
