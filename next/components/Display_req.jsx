import fetcher from '@/utils/fetcher'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useSWR from 'swr'
import Loader from './Loader'
import { Box, useMediaQuery } from '@chakra-ui/react'
import Post_card from './Post_card'

const Display_req = () => {

    const [post_data,set_post_data] = useState()
    const [isSmaller] = useMediaQuery('(max-width:768px)')

    const res = useSWR('/api/retrieve_post',fetcher,{
        refreshInterval:1000,
        revalidateOnFocus:true,
        revalidateOnMount:true,
        revalidateOnReconnect:true
    })

    useEffect(()=>{
        if(res.error){
            console.log(error);
            return;
        }
        if(res.data){
            set_post_data(res.data)
            // console.log(res.data)
        }
    },[res.data])

    if(res.isLoading){
        return(
            <>
            
                <Loader/>
            
            </>
        )
    }

  return (
    <>
    
        

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} >
            {
                post_data?.map((ele)=>{
                    return(
                        <Box width={"80vw"} p="3" >

                            <Post_card ele={ele} />

                        </Box>
                    )
                })
            }
        </Box>

    </>
  )
}

export default Display_req
