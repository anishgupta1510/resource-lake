import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {Box , SimpleGrid , Input , Text } from "@chakra-ui/react"
import PdfCard from "./PdfCard";

const Display = ({ filterdata, sem, branch }) => {
  const [isSmaller] = useMediaQuery("(max-width: 768px)");
  const [search, setsearch] = useState("");
  const [data, setdata] = useState(filterdata);
  const [final_data, set_final_data] = useState(filterdata);

  useEffect(() => {
    setdata(filterdata);
    set_final_data(filterdata);
  }, [filterdata]);

  // console.log(final_data);

  useEffect(() => {
    let temp1 = [];
    let temp2 = [];
    data?.map((ele) => {
      if (ele.branch === branch || branch === "") {
        temp1.push(ele);
      }
    });
    temp1.map((ele) => {
      if (ele.semester === sem || sem === "") {
        temp2.push(ele);
      }
    });
    set_final_data(temp2);
  }, [branch, sem]);

  return (
    <>
      <Box marginTop={"10px"} width={isSmaller ? "80vw" : "20vw"}>
        <Input onChange={(e) => setsearch(e.target.value)} />
      </Box>

      <Box marginTop={"10px"} width={
            isSmaller?"80vw":"60vw"
        } >
            <Box marginBottom={"10px"} textAlign={"center"} >
                <Text fontSize={"3xl"} >
                    Result
                </Text>
            </Box>
            
            <SimpleGrid columns={[1,2,3]} gap="16px" >
                {
                    final_data?.filter((val)=>{
                        if(search === ""){
                            return val
                        }
                        else if(val.file_name.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }).map((val,key)=>{
                        return(
                            <>
                            
                                <PdfCard val={val} key={val.file_url} />
                            
                            </>
                        )
                    })
                }
            </SimpleGrid>

        </Box>

    </>
  );
};

export default Display;
