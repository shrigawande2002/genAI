import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
import Images from '../Models/genImg.js';

dotenv.config();


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


export const createPost = async (req, res) => {

    const { author, image, prompt } = req.body;

    console.log(req.body)
    const photoURL = await cloudinary.uploader.upload(image);

    try {

        if (!photoURL) {
            return res.status(400).send({ status: "error", message: 'photo is not present' });
        }

        if (!prompt) {
            return res.status(400).send({ status: "error", message: 'Prompt is not present' });
        }

        if (!author) {
            return res.status(400).send({ status: "error", message: 'Author is not present' });
        }

        const newPost = await Images.create({
            author,
            image: photoURL?.secure_url,
            prompt
        });

        return res.status(201).send({ status: "success", message: 'Post created successfully', post: newPost });

    } catch (err) {
        console.log(err)
        res.status(500).send({ status: "error", message: 'Something went wrong' })
    }



}

export const getAllPosts = async (req, res) => { 

    try {
      const   posts = await Images.find({});
        res.status(200).send({ status: "success", data: posts })
    } catch (err) {
        console.log(err)
        res.status(500).send({ status: "error", message: 'Something went wrong' })
    }
}

