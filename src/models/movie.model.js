import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        index: true,
        unique: true,
    },
    director:{
        type:String,
        required:true,
        trim:true,
    },
    releaseyear:{
        type: Number,
        required: true,
    },
    language:{
        type:String,
        required: true,
    },
    rating:{
        type: Number,
        default:0,
    }
},{timestamps:true});


export const Movie = mongoose.model("Movie",movieSchema);