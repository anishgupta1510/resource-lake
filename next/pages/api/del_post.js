import connectDB from "@/middleware/db";

const Post = require("@/models/Post");

const fn = async(req,res) => {

    if(req.method === 'DELETE'){
        const {id} = req.query;
        try{
            const data = await Post.deleteOne({_id:id});
            res.status(201).json({
                message:"Post Deletion Success",
            })
        }catch(err){
            console.log(err)
        }
    }

}

export default connectDB(fn)