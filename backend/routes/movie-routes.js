import express  from "express";
import { addMovie , getMovie,getMovieById} from "../controllers/movie-controller";

const movieRouter = express.Router();

movieRouter.get("/",getMovie)
movieRouter.get("/:id",getMovieById)
movieRouter.post("/",addMovie)

export default movieRouter;