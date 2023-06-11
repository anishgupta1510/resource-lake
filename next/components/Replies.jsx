import React from 'react'
import fetcher from '@/utils/fetcher'
import { useState } from 'react'
import { useEffect } from 'react'
import useSWR from 'swr'
import ReplyCard from './ReplyCard'
import {Flex , Box} from '@chakra-ui/react'
import Loader from './Loader'

const Replies = ({post,postemail}) => {

    const [Replylist,setReplylist] = useState();

    const res = useSWR(`/api/replies/retrieve_replies?postid=${post}`,fetcher,{
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
            setReplylist(res.data);
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
    
       <Flex flexDirection={"column"} >
        {

            Replylist?.map((ele)=>{
                return (
                    <>
                    
                        <Box>
                            <ReplyCard data={ele} postemail={postemail} />
                        </Box>
                    
                    </>
                )
            })

        } 
       </Flex>

        
    
    </>
  )
}

export default Replies
