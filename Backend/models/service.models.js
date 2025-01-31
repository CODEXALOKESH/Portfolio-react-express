import mongoose from "mongoose";


const serviceSchema = mongoose.Schema({
    title:{
        type:String,
        required:true

    },
},
{timestamps:true})

export const Service = mongoose.model('Service',serviceSchema);