import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        index: true,
    },
    director:{
        type:String,
        required:true,
        trim:true,
    },
    poster:{
        type: String, //cloudinary url
        required: true,
    },
    releaseyear:{
        type: Number,
        required: true,
    },
    language:[{
        type:String
    }],
    rating:{
        type: Number,
        default:0,
    }
},{timestamps:true});


export const Movie = mongoose.model("Movie",movieSchema);