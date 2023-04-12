import connectDB from "@/middleware/db";
import Data from "@/models/Data";

const fn = async(req,res) => {
    if(req.method == 'GET'){
        try{
            const data = await Data.find({});
            res.send(data);
        }catch(err){
            res.send(err);
        }
    }
}

export default connectDB(fn);