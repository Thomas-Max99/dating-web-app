import mongoose from 'mongoose';

const cardSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,'please provide a name'],
        minlength: 5
    },
    imageUrl:{
        type:String,
        required: [true,'Please provide an image url']
    }
},{
    timestamps:{
        currentTime:()=>Math.floor(Date.now()/1000)
    }
})

export default mongoose.model('cards',cardSchema);