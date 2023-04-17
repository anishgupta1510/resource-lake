import Post from "@/models/Post"
import connectDB  from "@/middleware/db"

const fn = async(req,res) => {
    if(req.method === 'PUT'){
        const {id , new_post} = req.body;
        
        try{
            const result = await Post.updateOne(
                { _id:id },
                {
                    $set : {
                        post : 
                            new_post
                        
                    }
                },    
            )
            res.status(200).json({
                message:"data updated success",
                new_data:result,
            })
        }catch(err){
            console.log(err)
        }

    } 
}

export default connectDB(fn);