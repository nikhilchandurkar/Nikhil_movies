import mongoose, { mongo } from "mongoose";
import Booking from "../models/Booking";
import Movie from "../models/Movie";
import User from "../models/User";

export const newBooking = async (req,res,next)=>{
    const {movie, date,seatNumber,user} = req.body;
    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movie.findById(movie);
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }

    if (!existingMovie) {
        return res.status(404).json({message:"Movie not found with given id"})
    }
    if (!existingUser) {
        return res.status(404).json({message:"user not found with given id"})
        
    }

    let booking;
    try {
        booking = new Booking({
            movie,
            date: new Date(`${date}`,
            seatNumber,
            user),
        })
        const session =await mongoose.startSession();
        session.startTransaction();
        existingUser.bookings.push(booking);
        existingMovie.bookings.push(booking);
        await existingUser.save({session});
        await existingMovie.save({session});
        await booking.save({session});
        sessioncommitTransaction();
        

    } catch (err) {
        return console.log(err);
    }
    if (!booking){
        return res.status(500).json({message:"unable to create booking"})
    }
    return res.status(201).json({booking});
}

export const getBookingById = async(req,res,next)=>{
    
}