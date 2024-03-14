import mongoose from "mongoose";
import Booking from "./Booking";


const movieSchema =new mongoose.Schema({
    title:{
        type:String,
        requred:true,
    },
    descriptiopn:{
        type:String,
        requred:true,
    },
    actors:[{type:String, requred:true}],
    releaseDate:{
        type:Date,
        requred:true,
    },
    posterUrl:{
        type:String,
        requred:true,
    },
    featured:{
        type:Boolean,
    },
    bookings:[{type:mongoose.Types.ObjectId,ref:"Booking"}],
    admin:{
        type:mongoose.Types.ObjectId,
        requred:true,
        ref:"Admin"
    }

})
export default mongoose.model("movies",movieSchema);