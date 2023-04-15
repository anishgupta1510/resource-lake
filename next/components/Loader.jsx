import React from "react";
import { Box , Text } from "@chakra-ui/react";
import { Hypnosis } from "react-cssfx-loading";
const Loader = () => {
  return (
    <>
      <Box
        flexDirection={"column"}
        minH={"90vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Hypnosis
          height={"80px"}
          width={"80px"}
          duration="3s"
          color="#0096FF"
        />
        <Text color={"Highlight"} marginTop={"10px"}>
          Loading...
        </Text>
      </Box>
    </>
  );
};

export default Loader;
