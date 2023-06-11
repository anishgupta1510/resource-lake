import connectDB from "@/middleware/db";
const Reply = require("@/models/Reply")

const fn = async(req,res) => {
    if(req.method === 'GET'){

        const {postid} = req.query;
        try{
            const data = await Reply.find({post:postid});
            res.send(data);
        }catch(err){
            res.send(err);
        }

    }
}

export default connectDB(fn);