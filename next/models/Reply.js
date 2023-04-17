const { Schema, model, models } = require("mongoose");

const ReplySchema = new Schema({
    reply:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    user_name:{
        type:String,
        required:true
    },
})

module.exports = models.Reply || model("Reply",ReplySchema)