import mongoose, { Schema } from 'mongoose'
const schema = new mongoose.Schema
const bookingSchema = new Schema({
    movie:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    seatNumber:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
})
export default mongoose.model("booking",bookingSchema)