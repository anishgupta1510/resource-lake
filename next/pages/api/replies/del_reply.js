import connectDB from "@/middleware/db";
const Reply = require("@/models/Reply")

const fn = async(req,res) => {

    if(req.method === 'DELETE'){
        const {id} = req.query;
        try{
            const data = await Reply.deleteOne({_id:id});
            res.status(201).json({
                message:"Reply deleted",
            })
        }catch(err){
            console.log(err);
        }
    }

}

export default connectDB(fn);