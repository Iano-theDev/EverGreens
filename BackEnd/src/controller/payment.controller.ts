import validatePayment from "../helpers/payment.validate";
import {Request,Response,RequestHandler} from "express";
import PaymentModel from '../model/payment.model';
import {v4 as uuidv4} from 'uuid';
import db from "../Databasehelper/db-connection";




export const createPayment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const payment: PaymentModel = {
            id: uuidv4() as string,
            user_id: req.body.user_id,
            order_id: req.body.order_id,
            amount: req.body.amount,
            payment_method_id: req.body.payment_method_id,
    
        }

        const {error} = validatePayment(payment);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const insertedPayment: PaymentModel = await db.exec("InsertOrUpdatePayment", {...payment}) as unknown as PaymentModel;

            if (insertedPayment) {
                res.status(200).send(insertedPayment);
            }
            else {
                res.status(500).send("Error creating payment");
            }

        }

    } catch (error) {

        console.log(error);
        

        res.status(500).send("Error creating payment");

        

        
    }

}


export const updatePayment: RequestHandler = async (req: Request, res: Response) => {
    try {

        const payment: PaymentModel = {
            id: req.body.id,
            user_id: req.body.user_id,
            order_id: req.body.order_id,
            amount: req.body.amount,
            payment_method_id: req.body.payment_method_id
        }

        const {error} = validatePayment(payment);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const updatedPayment: PaymentModel = await db.exec("InsertOrUpdatePayment", {...payment}) as unknown as PaymentModel;

            if (updatedPayment) {
                res.status(200).send(updatedPayment);
            }
            else {
                res.status(500).send("Error updating payment");
            }

        }


        
    } catch (error) {

        res.status(500).send("Error updating payment");

        
        
    }
}