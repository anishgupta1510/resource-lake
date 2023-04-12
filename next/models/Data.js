import { Schema, models, model } from "mongoose";


const DataSchema = new Schema({
    file_name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date_uploaded:{
        type:String,
        required:true
    },
    file_url:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = models.Data || model("Data",DataSchema);