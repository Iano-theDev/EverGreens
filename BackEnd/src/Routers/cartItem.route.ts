import { Router } from "express";
import { createCartItem, updateCartItem,deleteCartItem,getCartItemByUserId,removeOrReduceQuantity } from "../controller/cartItem.controller";
import { verifyToken } from "../middlewares/verify.middleware";

const cartItemRouter = Router();

cartItemRouter.post("",verifyToken,createCartItem);
cartItemRouter.put("",verifyToken,updateCartItem);
cartItemRouter.delete("/:id",verifyToken, deleteCartItem);
cartItemRouter.get("",verifyToken, getCartItemByUserId);
cartItemRouter.put("/removeOrReduceQuantity/:id",verifyToken, removeOrReduceQuantity);



export default cartItemRouter;