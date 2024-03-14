import mongoose from "mongoose";
import Movie from "../models/Movie";
import Admin from "../models/Admin";
import jwt from "jsonwebtoken";

// export const addMovie = async (req, res, next) => {
//     // const extractedTocken = req.headers.autorization;
//     const extractedTocken = req.headers.autorization.split("")[1];
//     // bearer token
//     if (!extractedTocken === "") {
//         return res.status(404).json({ message: "token not found" })
//     };
//     let adminId;
//     jwt.verify(extractedTocken, process.env.SECRET_KEY,
//         (err, decrypted) => {
//             if (err) {
//                 return res.status(400).json({ message: `${err.message}` })
//             } else {
//                 adminId = decrypted.id;
//                 return;
//             }
//         })
//     // create new movie
//     admin: {
//         const { title, descriptiopn, releaseDate, posterUrl, featured, admin, actors } = req.body;
//         if (!title && title.trim() === ""
//             && !descriptiopn && descriptiopn.trim() === ""
//             && !posterUrl && posterUrl.trim() === "") {
//             return res.status(422).json({ message: "invalid input" })
//         }
//         let movie
//         try {
//             movie = new Movie({
//                 title,
//                 descriptiopn,
//                 releaseDate: newdate(`${releaseDate}`),
//                 featured,
//                 actors,
//                 admin: adminId,
//             });
//             const session = await mongoose.startSession();
//             const adminUser = await Admin.findById(adminId);
//             session.startTransaction();
//             await movie.save({ session });
//             adminUser.addMovies.push(movie);
//             await adminUser.save({session});
//             await session.commitTransaction();
            
//         } catch (err) {
//             return console.log(err)
//         }
//         if (!movie) {
//             return res.status(500).json({ mesage: "no movie found" })
//         }
//         return res.status(201).json({ movie })
//     }
// }

export const getMovie = async (req, res, next) => {
    let movies
    try {
        movies = await Movie.find();
    } catch (err) {
        return console.log(err);
    }
    if (!movies) {
        return res.status(500).json({ message: "request failed" })
    }
    return res.status(200).json({movies});
}

export const getMovieById = async (req, res, next) => {
    let movies
    try {
        movies = await Movie.find();
    } catch (err) {
        return console.log(err);
    }
    if (!movies) {
        return res.status(500).json({ message: "invalid movie ID" })
    }
    return res.status(200).json({ movies });
}




//  it just for trial

export const addMovie = async (req, res, next) => {
        // const extractedTocken = req.headers.autorization;
        const extractedTocken = req.headers.autorization.split("")[1];
        // bearer token
        if (!extractedTocken === "") {
            return res.status(404).json({ message: "token not found" })
        };
        let adminId;
        jwt.verify(extractedTocken, process.env.SECRET_KEY,
            (err, decrypted) => {
                if (err) {
                    return res.status(400).json({ message: `${err.message}` })
                } else {
                    adminId = decrypted.id;
                    return;
                }
            })
        // create new movie
        admin: {
            const { title, descriptiopn, releaseDate, posterUrl, featured, admin, actors } = req.body;
            if (!title && title.trim() === ""
                && !descriptiopn && descriptiopn.trim() === ""
                && !posterUrl && posterUrl.trim() === "") {
                return res.status(422).json({ message: "invalid input" })
            }
            let movie
            try {
                movie = new Movie({
                    title,
                    descriptiopn,
                    releaseDate: newdate(`${releaseDate}`),
                    featured,
                    actors,
                    admin: adminId,
                });
                // const session = await mongoose.startSession();
                // const adminUser = await Admin.findById(adminId);
                // session.startTransaction();
                // await movie.save({ session });
                // adminUser.addMovies.push(movie);
                // await adminUser.save({session});
                // await session.commitTransaction();
                //  without transaction
                movie = await movie.save();
                
            } catch (err) {
                return console.log(err)
            }
            if (!movie) {
                return res.status(500).json({ mesage: "no movie found" })
            }
            return res.status(201).json({ movie })
        }
    } 