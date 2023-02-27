"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderItem_controller_1 = require("../controller/orderItem.controller");
const orderItemRouter = (0, express_1.Router)();
orderItemRouter.post("/", orderItem_controller_1.createOrderItem);
orderItemRouter.get("/:order_id", orderItem_controller_1.getAllOrderItemByOrderId);
orderItemRouter.put("/:id", orderItem_controller_1.updateOrderItem);
exports.default = orderItemRouter;
