import { Router  } from "express";
import { getUserById, getAllUsers,updateUser,deleteUser,loginUser,createUser } from "../controller/user.controller";

const UserRouter = Router();

UserRouter.get("", getAllUsers);
UserRouter.get("/:id", getUserById);
UserRouter.post("/login", loginUser);
UserRouter.post("/register", createUser);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);


export default UserRouter;