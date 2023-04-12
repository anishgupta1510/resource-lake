import connectDB from "@/middleware/db";
import Data from "@/models/Data";

const fn = async(req,res) => {

    if(req.method == 'POST'){
        const {file_name,author,branch,semester,date_uploaded,file_url,email} = req.body;
        const data = new Data({
            file_name,
            email,
            author,
            branch,
            semester,
            date_uploaded,
            file_url
        });
        try{
            const data_inserted = await data.save();
            res.status(200).json({
                message: "Data inserted successfully",
                data: data_inserted,
              });              
        }catch(err){
            console.log(err)
        }
    }
}

export default connectDB(fn);