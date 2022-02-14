import ExperiencePost from "../models/ExperiencePost.js";

export const getPosts = async (req, res) => {
    try
    {
        const experiencePosts = await ExperiencePost.find();

        console.log(experiencePosts);

        res.status(200).json(experiencePosts);
    }
    catch (error)
    {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new ExperiencePost(post);

    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}