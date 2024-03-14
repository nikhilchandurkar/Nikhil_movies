import  express  from "express";
import { addAdmin, adminLogin,getAdmin} from "../controllers/admin-controller";

const adminRouter = express.Router();
adminRouter.post("/signup",addAdmin);
adminRouter.get("/",getAdmin);
adminRouter.post("/login",adminLogin);
export default adminRouter;