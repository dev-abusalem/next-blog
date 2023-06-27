import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true
    },
    img:{
        type:String,
    },
    content:{
        type:String,
    },
    username:{
        type:String,
        require:true,
    },
},{timestamps:true});

export default mongoose.model("Post", PostSchema)