import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    postTags: [String],
    attachedFile: String,
    likeAmount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ExperiencePost = mongoose.model('ExperiencePost', postSchema);

export default ExperiencePost;