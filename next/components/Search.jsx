import client from '@/content/sanity-client';
import { Box , Input, SimpleGrid, useMediaQuery , Text, Flex } from '@chakra-ui/react'
import { createClient } from 'next-sanity';
import React, { useEffect, useState } from 'react'
import PdfCard from './PdfCard';

const Search = ({initialdata,branch,sem, filterdata, setfilterdata}) => {

    const [isSmaller] = useMediaQuery("(max-width: 768px)")
    const [search,setsearch] = useState("");
    const [data,setdata] = useState(initialdata);
    // console.log(initialdata[0].branch)
    useEffect(()=>{
        let temp1 = [];
        let temp2 = [];
        data.map((ele)=>{
            if( ele.branch === branch || branch === "" ){
                temp1.push(ele)
            }
        })
        temp1.map((ele)=>{
            if( ele.semester === sem || sem === "" ){
                temp2.push(ele)
            }
        })
        setfilterdata(temp2)
    },[branch,sem])


  return (
    <>
    
        <Box marginTop={"10px"} width={
            isSmaller?"80vw":"20vw"
        }>
            <Input onChange={(e)=>setsearch(e.target.value)} />
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
                    filterdata?.filter((val)=>{
                        if(search === ""){
                            return val
                        }
                        else if( val.file_name.toLowerCase().includes(search.toLowerCase()) ){
                            return val
                        }
                    }).map((val,key)=>{
                        return(
                            <>
                            
                                <PdfCard val={val} />
                            
                            </>
                        )
                    })
                }
            </SimpleGrid>

        </Box>
    
    </>
  )
}

export default Search

