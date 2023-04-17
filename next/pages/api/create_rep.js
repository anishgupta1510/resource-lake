import connectDB from "@/middleware/db";
import Reply from "@/models/Reply";

const fn = async(req,res) => {
    if(req.method === 'POST'){
        const {reply , email , user_name} = req.body;

        const data = new Reply({
            email,
            reply,
            user_name,
        });

        try{
            const result = await data.save();
            res.status(200).json({
                message:"Reply successfully inserted",
                data:result
            });
        }catch(err){
            console.log(err)
        }

    }
}

export default connectDB(fn);