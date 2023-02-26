import { Router } from "express";
import { createPaymentMethod, updatePaymentMethod,getAllPaymentMethods,getPaymentMethodById } from "../controller/paymentMethod.controller";


const paymentMethodRouter = Router();


paymentMethodRouter.post("/", createPaymentMethod);
paymentMethodRouter.put("/", updatePaymentMethod);
paymentMethodRouter.get("/", getAllPaymentMethods);
paymentMethodRouter.get("/:id", getPaymentMethodById);


export default paymentMethodRouter;

