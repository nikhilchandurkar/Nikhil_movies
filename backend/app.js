import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes"
import movieRouter from "./routes/movie-routes";
import bookingRouter from "./routes/booking-routes";
import cors from "cors";
const app = express();
const url = `mongodb://localhost:27017/movies`;
const port = 5000

// middlewares
app.use(cors())
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin",adminRouter)
app.use("/movie",movieRouter)
app.use("/booking",bookingRouter)


mongoose.connect(url)
.then(()=>app.listen(port,()=>console.log(`connected to DB and open port:${port}`)))
.catch(err=>console.log((err)));
