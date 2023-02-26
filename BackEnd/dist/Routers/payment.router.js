"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controller/payment.controller");
const paymentRouter = (0, express_1.Router)();
paymentRouter.post("/", payment_controller_1.createPayment);
paymentRouter.put("/", payment_controller_1.updatePayment);
exports.default = paymentRouter;
