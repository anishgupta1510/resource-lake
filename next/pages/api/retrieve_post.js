import connectDB from "@/middleware/db";

const Post = require("@/models/Post")


const fn = async(req,res) => {
    if(req.method === 'GET'){
        try{
            const data = await Post.find({});
            res.send(data);
        }catch(err){
            res.send(err);
        }
    }
}

export default connectDB(fn);