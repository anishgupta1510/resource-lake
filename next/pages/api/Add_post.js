import connectDB from "@/middleware/db";
import Post from "@/models/Post";

const fn = async(req,res) => {
    if(req.method == 'POST'){
        const {email,user_name,post,date_posted} = req.body;
        const data = new Post({
            email,
            user_name,
            post,
            date_posted
        });
        try{
            const data_inserted = await data.save();
            // console.log(data_inserted);
            res.status(200).json({
                message:'Post Data inseted successfully',
                data:data_inserted
            });
        }catch(err){
            console.log(err)
        }
    }
}

export default connectDB(fn)