import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const images = new Schema({
    author: {
         type: String,
         required: true
    },
    image: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    }
})

const Images = mongoose.model("Images", images);
export default Images;