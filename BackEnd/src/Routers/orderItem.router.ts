import { Router } from "express";
import { createOrderItem,getAllOrderItemByOrderId,updateOrderItem } from "../controller/orderItem.controller";


const orderItemRouter = Router();


orderItemRouter.post("/", createOrderItem);
orderItemRouter.get("/:order_id", getAllOrderItemByOrderId);
orderItemRouter.put("/:id", updateOrderItem);


export default orderItemRouter;
