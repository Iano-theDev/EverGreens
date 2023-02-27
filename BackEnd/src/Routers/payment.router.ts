import { Router } from "express";
import { createPayment, updatePayment } from "../controller/payment.controller";


const paymentRouter = Router();


paymentRouter.post("/", createPayment);
paymentRouter.put("/", updatePayment);


export default paymentRouter;

