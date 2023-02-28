import { Router } from "express";

import { createOrder,deleteOrder,getAllOrders,getOrderById,getOrdersByUserId,updateOrder } from "../controller/order.controller";
import { verifyToken } from "../middlewares/verify.middleware";

const orderRouter = Router();

orderRouter.post("", verifyToken, createOrder);
orderRouter.get("", getAllOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);
orderRouter.get("/user/:user_id", getOrdersByUserId);

export default orderRouter;