import React from "react";
import { Flex , Text } from "@chakra-ui/react"
import Link from "next/link";
const Title = () => {
  return (
    <Link href={"/"}>
      <Flex alignItems={"center"}  >
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
    </Link>
  );
};

export default Title;
