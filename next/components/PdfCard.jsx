import UserContext from '@/context/UserContext'
import { Card, CardBody , Text , Box, Divider} from '@chakra-ui/react'
import React, { useContext } from 'react'
import DelBtn from './DelBtn'

const PdfCard = ({val}) => {
    const {userInfo} = useContext(UserContext)
  return (
    <>
    
        <Card >
            <CardBody bg={"whitesmoke"} >
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
                <Text fontSize={"xl"} >
                    {
                        val.file_name
                    }
                </Text>
                <DelBtn id={val?.doc_id} val={val} />
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} marginTop="3px" >
                    <Text color={"grey"} fontSize="xs" >
                        Uploaded by
                    </Text>
                    <Text color={"blue.500"} >
                        {
                            val.email === userInfo?.email ? `You` : val.author
                        }
                    </Text>
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
                        <Text color={"grey"} fontSize="xs" >
                            Uploaded on
                        </Text>
                        <Text color={"blue.500"} >
                            {
                                val.date_uploaded
                            }
                        </Text>
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
                            <Text color={"grey"} fontSize="xs" >
                                For Branch
                            </Text>
                            <Text color={"blue.500"} >
                                {
                                    val.branch
                                }
                            </Text>
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} >
                            <Text color={"grey"} fontSize="xs" >
                                For Semester
                            </Text>
                            <Text color={"blue.500"} >
                                {
                                    val.semester
                                }
                            </Text>
                </Box>
                <Divider height={"2px"} />
                <a href={val.file_url} target="_blank" >
                    <Text color={"blue"} textDecoration="underline" marginTop={"4px"} >
                        File Link
                    </Text>
                </a>
            </CardBody>
        </Card>
    
    </>
  )
}

export default PdfCard