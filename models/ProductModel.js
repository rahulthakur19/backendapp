import mongoose from "mongoose";

const User = mongoose.Schema({
    pid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    featured:{
        type:Boolean,
        required: true
    },
    rating:{
        type:Number
    },
    company:{
        type: String,
        required: true
    },
    create:{
        type:Date,
        required:true
    }
});

export default mongoose.model('Users', User);