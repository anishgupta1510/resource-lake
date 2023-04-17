import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Discussion_btn = () => {
  return (
    <>
      <Link href={"/Request"} >
        <Button colorScheme="telegram">Go to Discussion</Button>
      </Link>
    </>
  );
};

export default Discussion_btn;
