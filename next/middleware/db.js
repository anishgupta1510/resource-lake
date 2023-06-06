import mongoose from "mongoose";
 
const connectDB = handler => async(req,res) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect("mongodb+srv://anish:anish@mern.jdkgghn.mongodb.net/food?retryWrites=true&w=majority",{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    return handler (req,res);
}

export default connectDB;