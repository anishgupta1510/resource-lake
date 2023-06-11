const { Schema, model, models } = require("mongoose");

const ReplySchema = new Schema({
  reply: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  date_replied: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required:true
  }
});

module.exports = models.Reply || model("Reply", ReplySchema);
