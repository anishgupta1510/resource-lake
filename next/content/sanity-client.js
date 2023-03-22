import { createClient } from "next-sanity"

const client = createClient({
    projectId:"obmx9g3w",
    dataset:"production",
    useCdn:false,
    apiVersion:"2022-03-25",
    token:'skyAeWEs2vdvBxyzRHVpCi2yZxPHOJtKOpsOm5VtyFFRd0efp4PsHQFeS80MUbpvxzeZw7Z1lGxRzEcGkcjQsvo3isBPzUeDyRS5LgayyYzjjfDLd7boKV0dgUH3XdzNHmXsxyEyKf9AHFWmK4kZJgR9vh1D9Uzxk8RNlu0ELlpAG6AhbWIm'
    
})

export default client;