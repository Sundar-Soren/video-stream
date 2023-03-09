const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  replies: [
    {
      text: { type: String, required: true },
      user: { type: String, required: true },
    },
  ],
});

const videoSchema = new mongoose.Schema({
  link: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  comments: [commentSchema],
});

module.exports = mongoose.model("Video", videoSchema);
