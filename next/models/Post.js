const { Schema , model , models} = require("mongoose");

const PostSchema = new Schema({
    post : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    user_name : {
        type:String,
        required:true
    },
    date_posted : {
        type:String,
        required:true
    },
});

module.exports = models.Post || model("Post",PostSchema);
