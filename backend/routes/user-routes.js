import express from "express";
import { getAllUsers, signup, addUser, updateUser, deleteUser } from "../controllers/user-controller";
const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;