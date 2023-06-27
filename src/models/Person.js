import mongoose from "mongoose";


const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
});

module.exports = mongoose.model(PersonSchema)