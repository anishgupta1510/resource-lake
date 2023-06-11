import connectDB from "@/middleware/db";
import Reply from "@/models/Reply";

const fn = async(req,res) => {

    if(req.method == 'POST'){

        const { reply , email , user_name , date_replied , post } = req.body;

        const data = new Reply({
            reply,
            email,
            user_name,
            date_replied,
            post
        });
        try{
            const data_inserted = await data.save();
            res.status(200).json({
                message:'Reply data inserted',
                data:data_inserted
            });
        }catch(err){
            console.log(err)
            res.status(500).json({ message: 'Error inserting reply data' });
        }

    }

}

export default connectDB(fn)
