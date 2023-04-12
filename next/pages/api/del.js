import connectDB from "@/middleware/db";
import Data from "@/models/Data";

const fn = async(req,res) => {
    if(req.method == "DELETE"){
        const {id} = req.body;
        try{
            const data = await Data.deleteOne({id});
            res.status(201).json({
                message:"Data deletion success",
            })
        }catch(error){
            console.log(error);
        }
    }
}

export default connectDB(fn);