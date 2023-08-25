import UserContext from "@/context/UserContext";
import React, { useContext } from "react";
import DelBtn from "./DelBtn";
import { motion } from "framer-motion";
import { BiSolidDownload } from "react-icons/bi";
import {FcDownload} from "react-icons/fc"
const PdfCard = ({ val }) => {
  const { userInfo } = useContext(UserContext);
  return (
    // <Card>
    //   <CardBody bg={"whitesmoke"}>
    //     <div className="flex flex-col">
    //         <Box
    //           display={"flex"}
    //           alignItems="center"
    //           justifyContent={"space-between"}
    //         >
    //           <Text fontSize={"xl"}>{val.file_name}</Text>
    //           <FileLink val={val} />
    //           <DelBtn id={val?._id} val={val} />
    //         </Box>
    //         <Box
    //           display={"flex"}
    //           alignItems="center"
    //           justifyContent={"space-between"}
    //           marginTop="3px"
    //         >
    //           <Text color={"grey"} fontSize="xs">
    //             Uploaded by
    //           </Text>
    //           <Text color={"blue.500"}>
    //             {val.email === userInfo?.email ? `You` : val.author}
    //           </Text>
    //         </Box>
    //         <Box
    //           display={"flex"}
    //           alignItems="center"
    //           justifyContent={"space-between"}
    //         >
    //           <Text color={"grey"} fontSize="xs">
    //             Uploaded on
    //           </Text>
    //           <Text color={"blue.500"}>{val.date_uploaded}</Text>
    //         </Box>
    //         <Box
    //           display={"flex"}
    //           alignItems="center"
    //           justifyContent={"space-between"}
    //         >
    //           <Text color={"grey"} fontSize="xs">
    //             Branch
    //           </Text>
    //           <Text color={"blue.500"}>{val.branch}</Text>
    //         </Box>
    //         <Box
    //           display={"flex"}
    //           alignItems="center"
    //           justifyContent={"space-between"}
    //         >
    //           <Text color={"grey"} fontSize="xs">
    //             Semester
    //           </Text>
    //           <Text color={"blue.500"}>{val.semester}</Text>
    //         </Box>
    //         <Divider height={"2px"} />
    //     </div>
    //   </CardBody>
    // </Card>
    <Card val={val} userInfo={userInfo} />
  );
};

export default PdfCard;

const FileLink = ({ val }) => {
  return (
    <a href={val.file_url} target="_blank">
      {/* <div>
          <BiSolidDownload />
      </div> */}
      Download
    </a>
  );
};

const Card = ({ val, userInfo }) => {
  return (
    <div className="flex flex-col gap-4 shadow-md border-t-[3px] border-blue-600 rounded-sm p-3 w-[25rem] cursor-pointer hover:scale-105 transition-all duration-300">
      <div>{val.file_name}</div>
      <div className="flex flex-col gap-2">
        <Description
          name="Uploaded by"
          value={val.email === userInfo?.email ? `You` : val.author}
        />
        <Description name="Uploaded on" value={val.date_uploaded} />
        <Description name="Uploaded by" value={val.branch} />
        <Description name="Uploaded by" value={val.semester} />
      </div>
      <div className="flex gap-4 justify-end">
        <div>
          {/* <DelBtn id={val?._id} val={val} /> */}
          <FileLinkbtn val = {val} />
        </div>
        <div>
          <DelBtn id={val?._id} val={val} />
        </div>
      </div>
    </div>
  );
};

const Description = ({ name, value }) => {
  return (
    <div className="flex justify-between text-sm">
      <div className="text-gray-500">{name}</div>
      <div className="text-blue-500">{value}</div>
    </div>
  );
};

const FileLinkbtn = ({val}) => {
  {
    console.log(val.file_url)
  }
  return (
    <div className="w-90" >
      <a href={val?.file_url} target="_blank">
        <FcDownload/>
      </a>
    </div>
  )
}
